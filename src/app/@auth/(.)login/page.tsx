import { LoginCard } from '@/app/login/login-card'
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from '@/components/ui/alert-dialog'

export default function Page() {
    return (
        <AlertDialog open>
            <AlertDialogContent className='w-fit h-fit'>
                <AlertDialogTitle hidden>Login</AlertDialogTitle>
                <LoginCard />
            </AlertDialogContent>
        </AlertDialog>
    )
}