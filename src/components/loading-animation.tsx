import { motion } from 'framer-motion'
import React, { FC, SVGProps } from 'react'

export const LoadingAnimation: FC<SVGProps<SVGSVGElement>> = (svgProps) => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 4916 4916"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 1.5,
            }}
            {...svgProps}
        >
            <motion.g
                animate={{
                    rotate: [0, 0, 180, 180, 180, 360],
                }}
                transition={{
                    duration: 5, // Total duration of one loop
                    repeat: Infinity, // Loop the animation infinitely
                    repeatType: "loop", // Continue looping from the beginning
                    ease: "easeInOut",
                }}>

                <path
                    id="BL"
                    d="M2307.15,2953.01l0,716.85c0,197.821 -160.604,358.425 -358.425,358.425l-716.85,-0c-197.821,-0 -358.425,-160.604 -358.425,-358.425l0,-716.85c0,-197.821 160.604,-358.425 358.425,-358.425l716.85,-0c197.821,-0 358.425,160.604 358.425,358.425Z"
                    style={{
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: "173.63px",
                    }}
                />
                <path
                    id="TL"
                    d="M2307.15,1245.24l0,716.85c0,197.821 -160.604,358.425 -358.425,358.425l-716.85,-0c-197.821,-0 -358.425,-160.604 -358.425,-358.425l0,-716.85c0,-197.821 160.604,-358.425 358.425,-358.425l716.85,-0c197.821,-0 358.425,160.604 358.425,358.425Z"
                    style={{
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: "173.63px",
                    }}
                />
                <motion.path
                    id="TR"
                    d="M4041.65,1245.24l0,716.85c0,197.821 -160.608,358.425 -358.425,358.425l-716.85,-0c-197.821,-0 -358.425,-160.604 -358.425,-358.425l0,-716.85c0,-197.821 160.604,-358.425 358.425,-358.425l716.85,-0c197.817,-0 358.425,160.604 358.425,358.425Z"
                    style={{
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: "173.63px",
                    }}
                    animate={{
                        y: [-600, 0, 0, -600, -600],
                        opacity: [0, 1, 1, 0, 0],
                    }}
                    transition={{
                        duration: 5, // Total duration of one loop
                        repeat: Infinity, // Loop the animation infinitely
                        repeatType: "loop", // Continue looping from the beginning
                        ease: "easeInOut",
                    }}
                />
                <path
                    id="BR"
                    d="M4041.65,2953.01l0,716.85c0,197.821 -160.608,358.425 -358.425,358.425l-716.85,-0c-197.821,-0 -358.425,-160.604 -358.425,-358.425l0,-716.85c0,-197.821 160.604,-358.425 358.425,-358.425l716.85,-0c197.817,-0 358.425,160.604 358.425,358.425Z"
                    style={{
                        fill: "none",
                        stroke: "#000",
                        strokeWidth: "173.63px",
                    }}
                />
            </motion.g>
        </svg>
    )

}
