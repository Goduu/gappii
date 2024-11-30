import { Collections, Cover } from '@/components/my-content-page/my-groups/collections'
import React from 'react'

export const MyGroups = () => {
  return (
    <div className='h-80 overflow-visible z-20'>
      <div className="flex gap-4 absolute ">
        <Collections cover={coverData2} cards={cardData2} />
        <Collections cover={coverData} cards={cardData} />
      </div>
    </div>
  )
}

const coverData: Cover = {
  color: "bg-red-500",
  title: "Forests from Brazil",
  icon: "TreePine"
}


const coverData2: Cover = {
  color: "bg-slate-500",
  title: "Finances",
  icon: "Ambulance"
}

// Usage Example
const cardData = [
  {
    title: "Card 1",
    subtitle: "Subtitle 1",
    keys: ["Key 1-1", "Key 1-2", "Key 1-3"],
  },
  {
    title: "Card 2",
    subtitle: "Subtitle 2",
    keys: ["Key 2-1", "Key 2-2", "Key 2-3"],
  },
  {
    title: "Card 3",
    subtitle: "Subtitle 3",
    keys: ["Key 3-1", "Key 3-2", "Key 3-3"],
  },
  {
    title: "Card 4",
    subtitle: "Subtitle 4",
    keys: ["Key 4-1", "Key 4-2", "Key 4-3"],
  },
  {
    title: "Card 5",
    subtitle: "Subtitle 5",
    keys: ["Key 5-1", "Key 5-2", "Key 5-3"],
  },
  {
    title: "Card 6",
    subtitle: "Subtitle 6",
    keys: ["Key 6-1", "Key 6-2", "Key 6-3"],
  },
];


// Usage Example
const cardData2 = [
  {
    title: "Card 1",
    subtitle: "Subtitle 1",
    keys: ["Key 1-1", "Key 1-2", "Key 1-3"],
  },
  {
    title: "Card 2",
    subtitle: "Subtitle 2",
    keys: ["Key 2-1", "Key 2-2", "Key 2-3"],
  },
  {
    title: "Card 3",
    subtitle: "Subtitle 3",
    keys: ["Key 3-1", "Key 3-2", "Key 3-3"],
  },
  {
    title: "Card 4",
    subtitle: "Subtitle 4",
    keys: ["Key 4-1", "Key 4-2", "Key 4-3"],
  },
  {
    title: "Card 5",
    subtitle: "Subtitle 5",
    keys: ["Key 5-1", "Key 5-2", "Key 5-3"],
  },
  {
    title: "Card 6",
    subtitle: "Subtitle 6",
    keys: ["Key 6-1", "Key 6-2", "Key 6-3"],
  },
  {
    title: "Card 7",
    subtitle: "Subtitle 7",
    keys: ["Key 7-1", "Key 7-2", "Key 7-3"],
  },
  {
    title: "Card 8",
    subtitle: "Subtitle 8",
    keys: ["Key 8-1", "Key 8-2", "Key 8-3"],
  },
  {
    title: "Card 9",
    subtitle: "Subtitle 9",
    keys: ["Key 9-1", "Key 9-2", "Key 9-3"],
  },
  {
    title: "Card 10",
    subtitle: "Subtitle 10",
    keys: ["Key 10-1", "Key 10-2", "Key 10-3"],
  }
];

