import { motion } from "framer-motion";
import { TextScramble } from "../ui/text-scramble";
import { useEffect, useState } from "react";

export const LoadingBubble = () => {
    const [isTrigger, setIsTrigger] = useState(true)
    const [loadingSentence, setLoadingSentence] = useState(loadingSentences[Math.floor(Math.random() * loadingSentences.length)])


    const handleOnScrambleComplete = () => {
        setIsTrigger(false)
    }

    useEffect(() => {
        if (!isTrigger) {
            // Add a 1-second delay before showing a new sentence
            const timer = setTimeout(() => {
                setLoadingSentence(loadingSentences[Math.floor(Math.random() * loadingSentences.length)])
                setIsTrigger(true)
            }, 1000)

            // Clean up the timer if component unmounts
            return () => clearTimeout(timer)
        }
    }, [isTrigger])

    return (
        <div className="flex gap-2 items-center rounded-lg p-4 max-w-[80%] bg-muted w-fit text-sm">
            <TextScramble
                className='font-mono text-sm'
                duration={4}
                trigger={isTrigger}
                onScrambleComplete={handleOnScrambleComplete}>

                {loadingSentence}
            </TextScramble>
            <motion.span
                className="size-1 bg-foreground/50 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2 }}
            />
            <motion.span
                className="size-1 bg-foreground/50 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.2 }}
            />
            <motion.span
                className="size-1 bg-foreground/50 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 0.2, delay: 0.4 }}
            />
        </div>
    )
}


const loadingSentences = [
    "Like a galaxy forming—this might take a few billion years.",
    "Just checking if the servers are awake! ",
    "Hopefully, you don't hear the kettle boil. ",
    "Because smooth learning needs a cool flow. ",
    "Knowledge looks better with good lighting. ",
    "Loading screens are just life's mini-mysteries. ",
    "Hold tight, gravity is complicated. ",
    "Because even small facts need care. ",
    "Did you know learning activates the same brain area as music? ",
    "Thunderstruck! Just kidding, we're only loading your content. ",
    "This load time will end, we promise! ",
    "Preparing for a voyage... Destination: Knowledge! ",
    "Fun fact: The coldest place on Earth is -128°F! ",
    "Small bits of learning lead to big waves! ",
    "The universe runs on math—so does your lesson. ",
    "Traveling through bytes and bits to reach you. ",
    "Just a little more, and you'll be on fire! ",
    "Did you know quasars are brighter than whole galaxies? ",
    "Don't worry, this knowledge is real! ",
    "Almost there—your brainpower is rising!",
]
