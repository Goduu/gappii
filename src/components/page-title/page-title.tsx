import React, { FC } from 'react'

type PageTitleProps = {
    title: string
}

export const PageTitle: FC<PageTitleProps> = ({ title }) => {
    return (
        <h1 className='text-2xl font-bold'>{title}</h1>
    )
}
