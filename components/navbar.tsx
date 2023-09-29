import { AlignJustify, MoonStar, SunDim } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from "next-themes"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
const Navbar = () => {
    const { setTheme } = useTheme()

    const navbarItems = [
        {
            name: "About",
            href: "/about",
        },
        {
            name: "Projects",
            href: "/projects",
        },
        {
            name: "Experience",
            href: "/experience",
        },
        {
            name: "Skills",
            href: "/skills",
        },
        {
            name: "Contact",
            href: "/contact",
        },
        {
            name: "Blog",
            href: "/blog",
        }
    ]
    return (
        <header >
            <div className="py-3 lg:px-2 px-6">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/">
                        <div className="flex items-center justify-between">
                            <span className='dark:hidden'>
                                <Image src="/logo_light_mode.png" alt="Logo" width={40} height={40} />
                            </span>
                            <span className='secondary-foreground:hidden'>
                                <Image src="/logo_dark_mode.png" alt="Logo" width={40} height={40} />
                            </span>
                        </div>
                    </Link>
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <AlignJustify size={24} className='text-neutral-500 dark:text-secondary-foreground' />
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                {navbarItems.map((item, index) => (
                                    <DropdownMenuItem key={index} >
                                        <Link href={item.href} className="text-neutral-500 transition hover:text-neutral-500/75 dark:text-secondary-foreground dark:hover:text-secondary-foreground/75">
                                            {item.name}
                                        </Link>
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                    <div className="md:flex md:items-center md:gap-12 hidden">
                        <nav aria-label="Global">
                            <ul className="flex items-center gap-6 text-sm">
                                {navbarItems.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.href} className="text-neutral-500 transition hover:text-neutral-500/75 dark:text-secondary-foreground dark:hover:text-secondary-foreground/75">
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                                <li className='mt-1.5'>
                                    <DropdownMenu>
                                        <DropdownMenuTrigger>
                                            <span className='dark:hidden'>
                                                <SunDim size={20} className='text-neutral-500 dark:text-secondary-foreground' />
                                            </span>
                                            <span className='hidden dark:block'>
                                                <MoonStar size={20} className='text-neutral-500 dark:text-secondary-foreground' />
                                            </span>

                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end">
                                            <DropdownMenuItem onClick={() => setTheme("light")}>
                                                Light
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme("dark")}>
                                                Dark
                                            </DropdownMenuItem>
                                            <DropdownMenuItem onClick={() => setTheme("system")}>
                                                System
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header >
    );
}
export default Navbar;