import { CommunitySearchParams } from "@/app/types";
import { CommunityPage } from "@/components/community-page/community-page";

export default async function Community(props: {
    searchParams?: Promise<CommunitySearchParams>;
}) {
    return (
        <CommunityPage searchParams={await props.searchParams || {}} />
    )
}