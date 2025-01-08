// /pages/api/auth-handler.ts
import { clerkClient } from '@clerk/nextjs/server';
import { client } from '@/lib/apollo-provider';
import { CHECK_USER, CREATE_USER } from '@/lib/gqls/userGQLs';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { userId } = body;

        if (!userId) {
            return NextResponse.json({ message: 'Missing userId in request body' }, { status: 400 });
        }

        // Fetch user details from Clerk
        const clerkClientInstance = await clerkClient();
        const user = await clerkClientInstance.users.getUser(userId);

        if (!user) {
            return NextResponse.json({ message: 'User not found in Clerk' }, { status: 404 });
        }

        // Check if the user exists in Neo4j
        const { data: checkUserData } = await client.query({
            query: CHECK_USER,
            variables: { id: userId },
        });

        if (checkUserData.user) {
            // User already exists
            return NextResponse.json({ message: 'User already exists', user: checkUserData.user }, { status: 200 });
        }

        // Create the user in Neo4j
        const { data: createUserData } = await client.mutate({
            mutation: CREATE_USER,
            variables: {
                id: userId,
                email: user.emailAddresses[0].emailAddress,
            },
        });

        return NextResponse.json(
            { message: 'User created', user: createUserData.createUser.user },
            { status: 201 }
        );
    } catch (error: unknown) {
        console.error('Error in POST /api/auth-handler:', error);
        return NextResponse.json({ message: 'Internal Server Error', error: error?.message }, { status: 500 });
    }
}

export async function GET() {
    return NextResponse.json({ message: 'This endpoint only supports POST requests.' }, { status: 405 });
}
