import user_data from "@/lib/data";
import Link from "next/link";
const AboutPage = () => {
    return (
        <section className="pt-3 pb-28 px-5">
            <div>
                <h1 className="font-bold lg:text-4xl text-2xl bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                    About Me
                </h1>
            </div>
            <div className="pt-7">
                {user_data.about.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-8 dark:text-gray-300 pb-4">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="pt-4 dark:text-gray-300">
                You can connect with me on
                {Object.entries(user_data.socialLinks).map(([socialMedia, link]) => (
                    <Link target="_blank" href={link} key={socialMedia}>
                        <span className="font-bold">
                            {" " + socialMedia.charAt(0).toUpperCase() + socialMedia.slice(1)}
                        </span>
                        {Object.keys(user_data.socialLinks).indexOf(socialMedia) ===
                            Object.keys(user_data.socialLinks).length - 1
                            ? "."
                            : Object.keys(user_data.socialLinks).indexOf(socialMedia) ===
                                Object.keys(user_data.socialLinks).length - 2
                                ? " or"
                                : ","}
                    </Link>
                ))}
            </div>
        </section>
    );
}
export default AboutPage;