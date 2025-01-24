"use client"
import { FC } from "react";
import { routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

export const LogoText: FC = () => (
  <Link href={routes.home}>
    <Image src={'/logo-text.svg'} alt='logo' width={500} height={500} className='w-44 sm:w-52 hover:scale-105 transition-transform' />
  </Link>
)

