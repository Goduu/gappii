import { useEffect } from "react"

export const useDetectEsc = (onEsc: () => void) => {

    useEffect(() => {
        const handleClickOutside = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onEsc()
            }
        }

        document.addEventListener('keydown', handleClickOutside)
        return () => document.removeEventListener('keydown', handleClickOutside)
    }, [])
}