import { useEffect } from "react"

export const useDetectOutsideClick = (ref: React.RefObject<HTMLElement>, onDetectOutsideClick: () => void) => {

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onDetectOutsideClick()
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])
}