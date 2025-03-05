// components/AIRequestButton.tsx
'use client'

export function AIRequestButton({ setTaskId }: { setTaskId: (taskId: string) => void }) {
    const startTask = async () => {
        const res = await fetch('/api/testTask', {
            method: 'POST'
        });
        const { taskId } = await res.json()
        setTaskId(taskId)

        const ws = new WebSocket(process.env.NEXT_PUBLIC_WS_URL!)

        ws.onmessage = (event) => {
            if (event.data.taskId === taskId) {
                // Handle notification
            }
        }
    }

    return <button onClick={startTask}>Start AI Task</button>
}
