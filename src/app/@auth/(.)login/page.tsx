"use client"
import { LoginCard } from '@/app/login/login-card'
import { AlertDialog, AlertDialogContent, AlertDialogTitle } from '@/components/ui/alert-dialog'
import { useDetectOutsideClick } from '@/lib/utilitary-hooks/useDetectOutsideClick'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function Page() {
    const router = useRouter()
    const ref = useRef<HTMLDivElement>(null)
    useDetectOutsideClick(ref, router.back)

    return (
        <AlertDialog defaultOpen>
            <AlertDialogContent ref={ref} className='w-fit h-fit'>
                <AlertDialogTitle hidden>Login</AlertDialogTitle>
                <LoginCard />
            </AlertDialogContent>
        </AlertDialog>
    )
}