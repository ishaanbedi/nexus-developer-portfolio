import { Card } from "@/components/ui/card";
import user_data from "@/lib/data";
const ExperiencePage = () => {
    return (
        <section className="pt-3 pb-28 px-5">
            <div>
                <h1 className="font-bold lg:text-4xl text-2xl bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                    Work Experience
                </h1>
            </div>
            <div>
                {user_data.experience.map((exp, index) => (
                    <div key={index}>
                        <Card
                            key={index}
                            className="shadow-md my-4 p-3"
                        >
                            <h2 className="font-bold text-xl">
                                {exp.title}
                            </h2>
                            <h3 className="text-md">
                                {exp.company} &bull; {exp.location}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 py-1">
                                {new Date(exp.startDate).toLocaleDateString("en-US", { year: "numeric", month: "long", })} - {new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "long", }) === "Invalid Date" ? "Present" : new Date(exp.endDate).toLocaleDateString("en-US", { year: "numeric", month: "long", })}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400">
                                {exp.description}
                            </p>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ExperiencePage;