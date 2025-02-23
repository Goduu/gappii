'use server'


export const completeOnboarding = async () => {
    // const { userId } = await auth()
    return { message: 'Onboarding completed' }

    // if (!userId) {
    //     return { message: 'No Logged In User' }
    // }

    // const client = await clerkClient()

    // try {
    //     const res = await client.users.updateUser(userId, {
    //         publicMetadata: {
    //             onboardingComplete: true,
    //             termsAcceptedAt: new Date().toISOString(),
    //         },
    //     })
    //     return { message: res.publicMetadata }
    // } catch (err) {
    //     return { error: `There was an error updating the user metadata. ${err}` }
    // }
}