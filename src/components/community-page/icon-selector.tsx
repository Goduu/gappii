"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../ui/dialog'
import { DialogClose } from '@radix-ui/react-dialog'
import { Input } from '../ui/input'
import { ThumbsUp, Ticket, TicketCheck, TicketPercent, ToggleLeft, ToggleRight, Toilet, Tornado, Torus, Touchpad, TouchpadOff } from 'lucide-react'

export const IconSelector = () => {
    const [searchText, setSearchText] = useState("")
    return (
        <Dialog open>
            <DialogHeader >
                header
            </DialogHeader>
            <DialogContent>
                <DialogTitle>
                    title
                </DialogTitle>
                <Input value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <div className='flex gap-2 flex-wrap'>
                    {icons.filter(icon => icon.label.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())).map(icon => icon.icon)}
                </div>
            </DialogContent>
            <DialogClose>close</DialogClose>
        </Dialog>
    )
}


const icons = [
    {
        // add other labels in the string under
        label: "ThumbsUp",
        icon: <ThumbsUp />
    },
    {
        label: "TicketCheck",
        icon: <TicketCheck />
    },
    {
        label: "TicketPercent",
        icon: <TicketPercent />
    },
    {
        label: "Ticket",
        icon: <Ticket />
    },
    {
        label: "ToggleLeft",
        icon: <ToggleLeft />
    },
    {
        label: "ToggleRight",
        icon: <ToggleRight />
    },
    {
        label: "Toilet",
        icon: <Toilet />
    },
    {
        label: "Tornado",
        icon: <Tornado />
    },
    {
        label: "Torus",
        icon: <Torus />
    },
    {
        label: "TouchpadOff",
        icon: <TouchpadOff />
    },
    {
        label: "Touchpad",
        icon: <Touchpad />
    },
]
