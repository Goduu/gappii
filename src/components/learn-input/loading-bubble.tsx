import { motion } from "framer-motion";

export const LoadingBubble = () => (
    <div className="flex gap-2 items-center rounded-lg p-4 max-w-[80%] bg-muted w-fit">
        <motion.span
            className="w-2 h-2 bg-foreground/50 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
        />
        <motion.span
            className="w-2 h-2 bg-foreground/50 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
        />
        <motion.span
            className="w-2 h-2 bg-foreground/50 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
        />
    </div>
)