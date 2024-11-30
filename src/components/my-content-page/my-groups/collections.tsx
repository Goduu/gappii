"use client"
import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { IconByName } from "./icons-by-name";

interface Card {
    title: string;
    subtitle: string;
    keys: string[];
}

interface CardStackProps {
    cards: Card[];
    cover: Cover
}
export type Cover = {
    color: string;
    title: string;
    icon: string;
}


export const Collections: React.FC<CardStackProps> = ({ cards, cover }) => {
    const [show, setShow] = useState(false);

    return (
        <div className={`relative gap-0 ${show ? "gap-10" : "gap-0"} flex flex-col transition-all ease-in-out mt-40`} onClick={() => setShow(!show)}>
            {cards?.map((card, index) => {
                return (
                    <Card
                        className={`w-96 p-2 h-44 -mt-40`} key={card.title}>
                        <div className='absolute right-1 top-1'>
                            <div className='justify-end items-end flex'>
                            </div>
                        </div>
                        <CardTitle className="flex justify-between w-full">
                            <div className='whitespace-nowrap overflow-hidden text-ellipsis w-full'>
                                <div className='flex justify-between items-start w-full gap-1'>
                                    <div className="text-lg font-black cursor-pointer" >{card.title}</div>
                                </div>
                                <span className="text-md cursor-pointer">{card.subtitle}</span>
                            </div>
                            <div className="flex gap-1">
                                {card.keys.map((key) => (
                                    <Badge key={key} variant="outline" className="whitespace-nowrap">{key}</Badge>
                                ))}
                            </div>
                        </CardTitle>
                    </Card>

                );
            })}
            <Card
                className={`w-96 p-2 h-44 -mt-40 ${cover.color} text-white relative`} >
                <CardHeader>
                    <CardTitle className="flex justify-between items-start w-full">
                        <div className="text-5xl font-black cursor-pointer" >{cover.title}</div>
                    </CardTitle>
                </CardHeader>
                <IconByName name={cover.icon} size={50} className="w-20 h-20 absolute right-2 bottom-2" />
            </Card>
        </div>
    );
};

