import React from "react";
import Link from "next/link";
import Image from "next/image";

function HomeLink() {
    return (
        <div className="mx-4 first:ml-0 last:mr-0">
            <Link href="/">
                <a className="flex flex-row items-center block">
                    <Image src="/triforce.svg" width={64} height={64} alt="logo"/>
                    <span className="text-yellow-400 font-bold font-heading tracking-wider text-5xl hover:underline">Blitz</span>
                </a>
            </Link>
        </div>
    )
}

interface NavigationLinkProps {
    href: string;
}

function NavigationLink(props: React.PropsWithChildren<NavigationLinkProps>) {
    return (
        <div className="mx-4 first:ml-0 last:mr-0">
            <Link href={props.href}>
                <a className="text-yellow-300 font-semibold font-heading tracking-wider text-2xl hover:underline">
                    {props.children}
                </a>
            </Link>
        </div>
    );
}

export default function Navigation() {
    return (
        <nav className="flex flex-row items-center">
            <HomeLink/>
            <NavigationLink href="/rules">Rules</NavigationLink>
            <NavigationLink href="/how-to-play">How to play</NavigationLink>
        </nav>
    );
}