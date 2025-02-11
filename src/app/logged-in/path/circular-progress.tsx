import React, { FC, ReactNode } from "react"

type CircularProgressProps = {
  percent: number
  size?: "small" | "medium" | "large"
  children: ReactNode
}

export const CircularProgress: FC<CircularProgressProps> = ({ percent = 50, size = "medium", children }) => {
  const radius = size === "small" ? 42 : size === "medium" ? 50 : 70
  const stroke = size === "small" ? 10 : size === "medium" ? 15 : 28
  const initialPosition = radius + stroke
  const circumference = 2 * Math.PI * radius

  return (
    <div className="relative inline-block">
      <svg
        className="-rotate-90 transform items-center justify-center"
        width={2 * initialPosition}
        height={2 * initialPosition}
      >
        <circle
          cx={initialPosition}
          cy={initialPosition}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          className="text-gray-200 dark:text-gray-800"
        />
        <circle
          cx={initialPosition}
          cy={initialPosition}
          r={radius}
          stroke="currentColor"
          strokeWidth={stroke}
          fill="transparent"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - (percent / 100) * circumference}
          className="rounded-xl text-amber-500"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center drop-shadow-xl">{children}</div>
    </div>
  )
}
