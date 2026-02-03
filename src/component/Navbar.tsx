"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const sections = [
    "overview",
    "education",
    "experience",
    "publication",
    "achievement",
    "media",
];

const Navbar = () => {
    const [active, setActive] = useState("overview");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActive(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
            }
        );

        sections.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <nav className="fixed top-0 left-0 z-20 w-full bg-glass backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 sm:px-6 sm:py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/icons/logo.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="sm:w-6 sm:h-6 dark:invert"
                    />
                </Link>

                <ul className="flex items-center text-[11px] sm:text-sm font-medium">
                    {sections.map((id) => (
                        <li key={id}>
                            <Link
                                href={`#${id}`}
                                className={`px-2 py-1 sm:px-3 transition ${
                                    active === id
                                        ? "opacity-100 text-primary"
                                        : "opacity-60 hover:opacity-100"
                                }`}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
