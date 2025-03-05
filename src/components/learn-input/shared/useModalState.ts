import { useState, useRef, useEffect } from "react"
import { Message } from "../types"

type UseModalStateProps = {
    isOpen?: boolean
    onClose?: () => void
}

export const useModalState = ({ isOpen = false, onClose }: UseModalStateProps) => {
    const [isActive, setIsActive] = useState(isOpen)
    const [error, setError] = useState<string>("")
    const [messages, setMessages] = useState<Message[]>([])
    const [hasSubmittedPrompt, setHasSubmittedPrompt] = useState(false)
    
    const containerRef = useRef<HTMLDivElement>(null)
    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    // Check if user has submitted a prompt when messages change
    useEffect(() => {
        if (messages.length > 0) {
            setHasSubmittedPrompt(true)
            scrollToBottom()
        }
    }, [messages])

    // Update active state when isOpen changes
    useEffect(() => {
        setIsActive(isOpen)
    }, [isOpen])

    const handleClose = () => {
        setIsActive(false)
        onClose?.()
    }

    const resetState = () => {
        setMessages([])
        setError("")
        setHasSubmittedPrompt(false)
    }

    return {
        isActive,
        setIsActive,
        error,
        setError,
        messages,
        setMessages,
        hasSubmittedPrompt,
        setHasSubmittedPrompt,
        containerRef,
        messagesEndRef,
        scrollToBottom,
        handleClose,
        resetState
    }
} 