import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-20 w-full bg-glass backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between
                            px-3 py-2 sm:px-6 sm:py-4">

                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/icons/logo.png"
                        alt="logo"
                        width={20}
                        height={20}
                        className="sm:w-6 sm:h-6 dark:invert-70"
                    />
                </Link>

                <ul className="flex items-center text-[11px] sm:text-sm font-medium">
                    {[
                        ["Overview", "#overview"],
                        ["Education", "#education"],
                        ["Experience", "#experience"],
                        ["Publication", "#publication"],
                        ["Achievement", "#achievement"],
                        ["Media", "#media"],
                    ].map(([label, href]) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className="px-1 py-1 sm:px-3 opacity-70 hover:opacity-100 transition"
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
