import { PageTitle } from "@/components/ui/page-title"
import { PathPage } from "./path-page"
import { PathDetailsDialog } from "./path-details-dialog"

const Page = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <PageTitle title="Paths" />
                    <PathDetailsDialog mode="edit" />
                </div>
            </div>
            <PathPage />
        </div>
    )
}

export default Page

