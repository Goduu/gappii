import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { termsOfUse } from './terms';

export const TermsOfUseDialog = () => {
    return (
        <Dialog>
            <DialogTrigger className="text-blue-500 hover:underline">
                terms of use
            </DialogTrigger>
            <DialogContent className='overflow-scroll'>
                <DialogHeader>
                    <DialogTitle>{termsOfUse.title}</DialogTitle>
                    <DialogDescription className='overflow-scroll h-96'>
                        <div className="mt-4 space-y-4 justify-start flex flex-row">
                            <div className="mb-6">
                                <p className="text-sm font-semibold mb-2">{`Effective Date: ${termsOfUse.effectiveDate}`}</p>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {termsOfUse.introduction}
                                </p>
                                {termsOfUse.sections.map((section) => (
                                    <div key={section.title} className="mt-4 flex flex-col gap-2 items-start text-left">
                                        <h4 className="text-sm font-semibold text-left">{`${section.number} ${section.title}`}</h4>
                                        <div className="text-sm text-gray-600 leading-relaxed text-left">
                                            {section.content.map(content => (
                                                <div key={content.id} className='flex flex-col items-start justify-start text-left'>
                                                    <div className="text-left">{`${content.id}  ${content.text}`}</div>
                                                    {content.subItems?.map((subItem, index) => (
                                                        <div key={`si${index}}`} className="text-left">
                                                            <span className="text-left">- {subItem}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}
