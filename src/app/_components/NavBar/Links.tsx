"use client"
import Link from "next/link";
import { useRouter, NextRouter } from "next/router";
import { useEffect, useRef } from "react";

export function Links(){
    return(
        <div className="flex w-fit text-[#E4E6F2] font-outfit font-normal  tracking-wider  space-x-[10%]">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/process">Process</Link>
            <Link href="/about">Work</Link>
            <Link href="/pricing">Pricng</Link>
            <Link href="/faqs">FAQs</Link>
        </div>
    )
}