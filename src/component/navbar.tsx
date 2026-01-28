import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 z-20 w-full bg-glass backdrop-blur-md">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/icons/logo.png" alt="logo" height={24} width={24} />
                    <span className="font-semibold">Logo</span>
                </Link>

                <ul className="flex gap-6 text-sm font-medium">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/">Events</Link></li>
                    <li><Link href="/">Create Event</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
