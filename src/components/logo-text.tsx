"use client"
import { FC } from "react";
import { routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

export const LogoText: FC = () => (
  <Link href={routes.home}>
    <Image src={'/logo-text.svg'} loading='eager' alt='logo' width={208} height={50} className='w-44 sm:w-52 hover:scale-105 transition-transform' />
  </Link>
)

