import clsx from "clsx";
import Fuse from "fuse.js";
import React from "react";

interface GapInputProps {
    text: string; // Text containing {gap:N} placeholders
    value?: string | null; // Optional value to pre-fill the gap
    options: string[]
    answer: string
}

export const GapInput: React.FC<GapInputProps> = ({ text, value, options, answer }) => {
    const replaceGaps = (inputText: string): (string | JSX.Element)[] => {
        const parts = inputText.split(/({gap})/);

        const fuse = new Fuse<string>([ answer ], {
            includeScore: true,
        })
        const result = fuse.search(value || "")
        const isExactMatch = result[0] && result[0].score === 0
        const isAnswerRight = result[0] && result[0].score || 10 < 0.1
        let valueIndex = 0; // Track position in the value string if provided

        return parts.map((part, index) => {
            const match = part.match(/{gap}/);
            if (match) {
                const optionsLength = options.map(option => option.length)
                const charCount = Math.max(optionsLength[0], optionsLength[1]);
                const prefillValue = value?.substring(valueIndex, valueIndex + charCount) || "";
                const width = charCount * 0.6 + "em";
                // Increment valueIndex if value is provided
                if (value) valueIndex += charCount;

                return (
                    <span
                        key={`gap-${index}`}
                        className={clsx(`inline-block border-b-2 border-dashed border-gray-400 mx-1 text-center`, {
                            "text-amber-500": isAnswerRight && !isExactMatch,
                            "text-green-500": isExactMatch,
                            "text-red-500": !isAnswerRight && !isExactMatch  && prefillValue,
                            "text-red-50/0": !prefillValue,
                        })}
                        style={{ width }}
                    >
                        {prefillValue || "."} {/* Default gap if no value */}
                    </span>
                );
            }
            return (
                <p className="whitespace-normal inline" key={`text-${index}`}>
                    {part}
                </p>
            )
        });
    };

    return <div className="space-y-1">{replaceGaps(text)}</div>;
};

export default GapInput;


