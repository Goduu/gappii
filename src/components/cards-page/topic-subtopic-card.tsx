import React, { FC } from 'react'
import { Card, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Button } from '../ui/button'
import { VotingIcons } from '../card/voting-icons'
import { redirect } from 'next/navigation'

type TopicSubtopicCardProps = {
    topic: { id: string, title: string}
    subtopic:  { id: string, title: string}
    voting: {
        liked: boolean
        disliked: boolean
        crowned: boolean
    }
}
export const TopicSubtopicCard: FC<TopicSubtopicCardProps> = ({ topic, subtopic, voting }) => {
    return (
        <Card className="w-96">
            <CardHeader>
                <CardTitle className="flex justify-between items-center">
                    {topic.title} / {subtopic.title}
                    <VotingIcons {...voting} />
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex justify-center gap-4">
                <Button onClick={() => redirect(`lesson/${topic.id}/${subtopic.id}`)}> Start</Button>
            </CardFooter>
        </Card>
    )
}
