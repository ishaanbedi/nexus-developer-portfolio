import user_data from "@/lib/data";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, MousePointerClick } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import Head from "next/head";
const ProjectsPage = () => {
    const router = useRouter();
    return (
        <section className="pt-3 pb-28 px-5">
            <Head>
                <title>Projects</title>
                <meta name="description" content="Projects" />
            </Head>
            <div className="flex flex-col space-y-3">
                <h1 className="font-bold lg:text-4xl text-2xl bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                    Projects
                </h1>
                <h2 className="text-lg dark:text-gray-300">
                    Here are some of the projects I&apos;ve worked on.
                </h2>
            </div>
            <div className="project-list pt-4 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
                {user_data.projects.map((project, index) => (
                    <div key={index} className="project">
                        <Card className="h-full border border-primary/40">
                            <CardHeader>
                                <CardTitle>
                                    <h3 className="font-bold text-xl">{project.title}</h3>
                                </CardTitle>
                                <CardDescription>
                                    {project.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm font-bold dark:text-gray-300 flex flex-wrap">
                                    {project.techStack.map((tech, index) => (
                                        <Badge className="mr-1 mb-1" key={index} variant="default">
                                            {tech}
                                        </Badge>
                                    ))}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex justify-evenly space-x-2 w-full">
                                    <Button
                                        onClick={() => router.push(project.links.github)}
                                        variant={"secondary"} className="w-full flex space-x-2 justify-center items-center"
                                    >
                                        <Github size={16} />
                                        <span>
                                            Github
                                        </span>
                                    </Button>
                                    <Button
                                        onClick={() => router.push(project.links.live)}
                                        variant={"secondary"} className="w-full flex space-x-2 justify-center items-center"
                                    >
                                        <MousePointerClick size={16} />
                                        <span>
                                            Live Demo
                                        </span>
                                    </Button>

                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsPage;