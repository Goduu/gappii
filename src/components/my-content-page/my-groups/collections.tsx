"use client"
import React, { useState } from "react";
import { Card, CardHeader, CardTitle } from "../../ui/card";
import { Badge } from "../../ui/badge";
import { IconByName } from "./icons-by-name";
import { Droppable } from "@/components/ui/dnd/droppable";
import { Collection, Lesson } from "@/ogm-resolver/ogm-types";
import { getInitials } from "@/lib/utils";
import { CollectionPageMode } from "./types";
import { Edit } from "lucide-react";
import { useCollection } from "./collection-context";

interface Card {
    title: string;
    subtitle: string;
    keys: string[];
}

interface CardStackProps {
    cards: Lesson[];
    collection: Collection
    isDragging: boolean
    mode: CollectionPageMode
    setCollectionFormOpen?: (open: boolean) => void
}

export const Collections: React.FC<CardStackProps> = ({ cards, collection, isDragging, mode, setCollectionFormOpen }) => {
    const [show, setShow] = useState(false);
    const { setCollection } = useCollection();
    const isEditMode = mode === "edit";

    const handleClick = () => {
        if (mode === "edit") {
            console.log("edit", {
                id: collection.id || "",
                color: collection.color,
                icon: collection.icon,
                name: collection.title,
            }
            )
            setCollection({
                id: collection.id || "",
                color: collection.color,
                icon: collection.icon,
                name: collection.title,
            });
            setCollectionFormOpen?.(true);
        } else {
            setShow(!show);
        }
    }

    return (
        <Droppable id={collection.id || ""}>
            <div className={`relative gap-0
              flex flex-col transition-all ease-in-out mt-40
               ${isEditMode ? "cursor-pointer" : show ? "cursor-n-resize gap-10" : "cursor-s-resize gap-0"} `}
                onClick={handleClick}>
                {isDragging && <div className="absolute z-30 rounded-lg hover:opacity-75 -mt-36 bg-slate-50 opacity-25 w-full h-full flex items-center justify-center">
                    <div className="text-2xl">
                        DROP HERE
                    </div>
                </div>
                }
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
                                        <div className="text-lg font-black cursor-pointer" >{card.hasTopic.title}</div>
                                    </div>
                                    <span className="text-md cursor-pointer">{card.hasSubtopic.title}</span>
                                </div>
                                <div className="flex gap-1">
                                    {card.hasKeywords.map((key) => (
                                        <Badge key={key.id} variant="outline" className="whitespace-nowrap">{key.name}</Badge>
                                    ))}
                                </div>
                            </CardTitle>
                        </Card>

                    );
                })}
                <Card
                    className={`w-96 p-2 h-44 -mt-40 ${collection.color} text-white relative`} >
                    <CardHeader>
                        <CardTitle className="flex justify-between items-start w-full">
                            <div className="text-5xl font-black" >{collection.title}</div>
                        </CardTitle>
                    </CardHeader>
                    {collection.icon === "text" ? (
                        <div className="text-6xl font-black absolute right-2 bottom-2 tracking-tighter" >{getInitials(collection.title)}</div>
                    ) : (
                        <IconByName name={collection.icon} size={50} className="w-20 h-20 absolute right-2 bottom-2" />
                    )}
                    {mode === "edit" && (
                        <div className="absolute top-2 right-2 z-40 opacity-30">
                            <Edit size={50} />
                        </div>
                    )}
                </Card>
            </div>
        </Droppable>

    );
};

