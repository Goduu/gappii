import { PageTitle } from "@/components/ui/page-title"
import { PathPage } from "./path-page"
import { PathActionBar } from "./path-action-bar"


const Page = async (props: {
    searchParams?: Promise<{
        pathSearch?: string;
        pathReaction?: string;
    }>;
}) => {

    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <PageTitle title="Paths" />
                </div>
            </div>
            <PathActionBar />
            <PathPage searchParams={await props.searchParams} />
        </div>
    )
}

export default Page

