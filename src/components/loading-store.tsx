"use client"
import { createContext, useContext, useTransition, ReactNode } from "react"
import { LoadingAnimation } from "./loading-animation"

interface TransitionContextProps {
  isPending: boolean
  startTransition: (callback: () => void) => void
}

const TransitionContext = createContext<TransitionContextProps | undefined>(undefined)

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isPending, startTransition] = useTransition()

  return (
    <TransitionContext.Provider value={{ isPending, startTransition }}>
      {isPending &&
        <div
          className={`fixed left-0 top-0 z-50 h-screen w-screen items-center justify-center bg-white/50 py-10 dark:bg-slate-800/50`}
        >
          <div className="flex h-full flex-col items-center justify-center gap-0">
            <LoadingAnimation className="w-24 h-24" />
          </div>
        </div>
      }
      {children}
    </TransitionContext.Provider>
  )
}

export const useTransitionContext = () => {
  const context = useContext(TransitionContext)
  if (context === undefined) {
    throw new Error("useTransitionContext must be used within a TransitionProvider")
  }
  return context
}
