import { Card } from "@/components/ui/card";
import user_data from "@/lib/data";
import Head from "next/head";
const SkillsPage = () => {
    return (
        <section className="pt-3 pb-28 px-5">
            <Head>
                <title>Technical Skills</title>
                <meta name="description" content="Technical Skills" />
            </Head>
            <div>
                <h1 className="font-bold lg:text-4xl text-2xl bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                    Technical Skills
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {Object.entries(user_data.skills).map(([category, skillList]) => (
                    <Card key={category} className="p-4 rounded-lg shadow-md border border-primary/20 hover:border-primary/30">
                        <h2 className="text-xl font-semibold mb-2">
                            {category.split("_").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")}
                        </h2>
                        <ul className="list-disc list-inside space-y-1">
                            {skillList.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </Card>
                ))}
            </div>
        </section>
    );
}

export default SkillsPage;