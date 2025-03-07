import { AlertDialogAction, AlertDialogCancel, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog"
import { AlertDialogContent } from "@/components/ui/alert-dialog"
import { Trash } from "lucide-react"
import { AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { AlertDialog } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Path } from "@/ogm-types"
import { useState } from "react"
import { DELETE_PATH } from "@/lib/gqls/pathGQL"
import { useMutation } from "@apollo/client"
import { GET_USER_PATHS_AND_LESSONS } from "@/lib/gqls/userGQLs"
import { useTransitionContext } from "@/components/loading-store"

type PathDeleteDialogProps = {
    path?: Path
    onDelete?: () => void
}

export const PathDeleteDialog = ({ path, onDelete }: PathDeleteDialogProps) => {
    const [deletePath] = useMutation(DELETE_PATH, { refetchQueries: [GET_USER_PATHS_AND_LESSONS] })
    const [open, setOpen] = useState(false)
    const { startTransition, isPending } = useTransitionContext()

    const handleDeletePath = async () => {
        if (!path?.id) return

        startTransition(async () => {
            await deletePath({ variables: { where: { id: path.id } } })
            setOpen(false)
            onDelete?.()
        })
    }

    return (
        <div className="flex gap-2">
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogTrigger asChild>
                    <Button variant="outline" size="icon" title="Delete Path" >
                        <Trash />
                    </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure you want to delete this path?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the path
                            &quot;{path?.title}&quot; and all of its associated data.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeletePath}
                            disabled={isPending}
                            className="bg-red-500 hover:bg-red-700 focus:ring-red-500"
                        >
                            {isPending ? "Deleting..." : "Delete Path"}
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    )
}