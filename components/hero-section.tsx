import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "./ui/button";
import Link from "next/link";

const HeroSection = (
    {
        name,
        bio,
        profile_image,
    }: {
        name: string,
        bio: string,
        profile_image: string,
    }
) => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-6 px-2">
            <div className="pt-24">
                <Avatar className="w-32 h-32 ring-4 dark:ring-white ring-black ring-offset-4">
                    <AvatarImage src={profile_image} alt={name} />
                    <AvatarFallback>
                        {name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                </Avatar>

            </div>
            <div>
                <h1 className="font-bold lg:text-4xl text-2xl bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                    Hi, I&apos;m {name}!
                </h1>
            </div>
            <div>
                <p className="font-light max-w-2xl lg:text-xl text-lg">
                    {bio}
                </p>
            </div>
            <div className="flex space-x-4 pt-6">
                <Link href="/about">
                    <Button>
                        More About Me
                    </Button>
                </Link>
                <Link href="/blog">
                    <Button>
                        Read My Blog
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default HeroSection;