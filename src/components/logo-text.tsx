"use client"
import { FC } from "react";
import { routes } from "@/lib/routes";
import Image from "next/image";
import Link from "next/link";

export const LogoText: FC = () => (
  <Link href={routes.home}>
    <Image src={'/logo-text.svg'} priority alt='Image with Gappii written on it' width={208} height={77.7578} className='hover:scale-105 transition-transform' />
  </Link>
)

