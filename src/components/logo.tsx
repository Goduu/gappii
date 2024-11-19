"use client"
import { redirect } from "next/navigation";
import { FC, SVGProps } from "react";

export const Logo: FC<SVGProps<SVGSVGElement>> = (svgProps) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: 1.5,
        }}
        viewBox="0 0 334 178"
        onClick={() => redirect("/")}
        {...svgProps}
    >
        <path
            d="M98.495 24.405h7.832c9.966 0 18.058 8.091 18.058 18.058v113.464c0 9.966-8.092 18.058-18.058 18.058H22.058C12.091 173.985 4 165.893 4 155.927V42.463c0-9.967 8.091-18.058 18.058-18.058h8.137"
            style={{
                fill: "none",
                stroke: "#091a2e",
                strokeWidth: 8,
            }}
        />
        <path
            d="M77.494 13.661h10.847a4.418 4.418 0 0 1 4.416 4.416v8.832a4.418 4.418 0 0 1-4.416 4.416H40.043a4.418 4.418 0 0 1-4.416-4.416v-8.832a4.418 4.418 0 0 1 4.416-4.416h10.671a11.973 11.973 0 0 1-.003-.268C50.711 6.001 56.712 0 64.104 0s13.393 6.001 13.393 13.393c0 .089-.001.179-.003.268ZM64.192 7.184a5.535 5.535 0 0 0-5.532 5.533 5.535 5.535 0 0 0 5.532 5.532 5.535 5.535 0 0 0 5.533-5.532 5.535 5.535 0 0 0-5.533-5.533Z"
            style={{
                fill: "#091a2e",
            }}
        />
        <path
            d="M77.216 50.583v54.132c0 5.75-4.669 10.418-10.419 10.418h-5.209c-5.751 0-10.419-4.668-10.419-10.418V50.583c0-5.751 4.668-10.419 10.419-10.419h5.209c5.75 0 10.419 4.668 10.419 10.419Z"
            style={{
                fill: "#0284c7",
            }}
        />
        <path
            d="M37.126 64.625h54.132c5.75 0 10.419 4.669 10.419 10.419v5.209c0 5.751-4.669 10.419-10.419 10.419H37.126c-5.75 0-10.418-4.668-10.418-10.419v-5.209c0-5.75 4.668-10.419 10.418-10.419Z"
            style={{
                fill: "#0284c7",
            }}
        />
        <path
            d="M93.912 146.094c-1.268-.66-2.113-1.837-2.113-3.178v-33.09c0-3.863 3.748-7 8.364-7 4.616 0 8.364 3.137 8.364 7v33.09c0 1.368-.88 2.565-2.191 3.217l-6.08 10.702-6.344-10.741Z"
            style={{
                fill: "none",
                stroke: "#091a2e",
                strokeWidth: 5,
            }}
        />
        <path
            d="M19.858 130.305h54.485M19.858 146.218h54.485"
            style={{
                fill: "none",
                stroke: "#091a2e",
                strokeWidth: 8,
            }}
        />
        <text
            x={135.552}
            y={81.537}
            style={{
                fontFamily: "&quot",
                fontSize: "71.396px",
                fill: "#091a2e",
            }}
        >
            {"H"}
        </text>
        <text
            x={182.731}
            y={81.537}
            style={{
                fontFamily: "&quot",
                fontSize: "71.396px",
                fill: "#091a2e",
            }}
        >
            {"e"}
        </text>
        <text
            x={256.904}
            y={81.537}
            style={{
                fontFamily: "&quot",
                fontSize: "71.396px",
                fill: "#091a2e",
            }}
        >
            {"l"}
        </text>
        <text
            x={220.811}
            y={81.537}
            style={{
                fontFamily: "&quot",
                fontSize: "71.396px",
                fill: "#091a2e",
            }}
        >
            {"a"}
        </text>
        <text
            x={311.904}
            y={81.536}
            style={{
                fontFamily: "&quot",
                fontSize: "71.458px",
                fill: "#091a2e",
            }}
            transform="matrix(.99063 0 0 1 -13.604 0)"
        >
            {"h"}
        </text>
        <text
            x={288.562}
            y={81.472}
            style={{
                fontFamily: "&quot",
                fontSize: "71.458px",
                fill: "#091a2e",
            }}
            transform="matrix(.99063 0 0 1 -13.907 0)"
        >
            {"t"}
        </text>
        <text
            x={144.17}
            y={157.117}
            style={{
                fontFamily: "&quot",
                fontSize: "97.35px",
                fill: "#091a2e",
            }}
            transform="matrix(.99465 0 0 1 -9.954 0)"
        >
            {"N"}
        </text>
        <text
            x={207.059}
            y={157.117}
            style={{
                fontFamily: "&quot",
                fontSize: "97.35px",
                fill: "#091a2e",
            }}
            transform="matrix(.99465 0 0 1 -9.659 0)"
        >
            {"o"}
        </text>
        <text
            x={261.414}
            y={157.117}
            style={{
                fontFamily: "&quot",
                fontSize: "97.35px",
                fill: "#091a2e",
            }}
            transform="matrix(.99465 0 0 1 -9.433 0)"
        >
            {"t"}
        </text>
        <text
            x={291.135}
            y={157.117}
            style={{
                fontFamily: "&quot",
                fontSize: "97.35px",
                fill: "#091a2e",
            }}
            transform="matrix(.99465 0 0 1 -9.212 0)"
        >
            {"e"}
        </text>
    </svg>
)

