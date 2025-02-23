import { PageTitle } from "@/components/ui/page-title"
import { PathPage } from "./path-page"
import { PathDetailsDialog } from "./path-details-dialog"

const Page = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center gap-4">
                <PageTitle title="Paths" />
                <PathDetailsDialog lessons={[]} mode="edit" />
            </div>
            <PathPage />
        </div>
    )
}

export default Page

