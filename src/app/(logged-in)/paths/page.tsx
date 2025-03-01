import { PageTitle } from "@/components/ui/page-title"
import { PathPage } from "./path-page"
import { PathFilterBar } from "./path-filters-bar"

const Page = () => {
    return (
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                    <PageTitle title="Paths" />
                </div>
            </div>
            <PathFilterBar />
            <PathPage />
        </div>
    )
}

export default Page

