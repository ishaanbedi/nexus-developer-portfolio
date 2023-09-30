import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { remark } from 'remark';
import html from 'remark-html';
import axios from "axios";
import { ScrollArea } from "@/components/ui/scroll-area"
import { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast"

const AdminPanel = () => {
    const { toast } = useToast()
    const [password, setPassword] = useState('')
    const [showAdminPanel, setShowAdminPanel] = useState(false)
    const [blogTitle, setBlogTitle] = useState('')
    const [blogDescription, setBlogDescription] = useState('')
    const [blogContent, setBlogContent] = useState('')
    const [blogSlug, setBlogSlug] = useState('')
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState<File | null>(null)
    const [imageLink, setImageLink] = useState<string>('')
    const [showImageProcessed, setShowImageProcessed] = useState(false)
    const verifyPassword = async () => {
        try {
            const { data } = await axios.post('/api/verifyAdminPanel', { password })
            if (data.success) {
                setPassword('')
                setShowAdminPanel(true)
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Uh oh!",
                description: "Incorrect Password"
            })
        }
    }
    if (!showAdminPanel) {
        return (
            <section className='px-2 lg:md:sm:w-1/2 w-full mx-auto h-[70vh] flex space-x-2 justify-center items-center'>
                <Input
                    placeholder="Enter the admin password to continue..."
                    type="password"
                    id="password"
                    className=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button onClick={() => {
                    verifyPassword()
                }}
                >
                    Enter
                </Button>

            </section>
        );
    }
    if (showAdminPanel) {
        return (
            <section className='px-2'>
                <div className="flex space-x-2">
                    <Button onClick={() => {
                        setShowAdminPanel(false)
                    }}
                    >
                        Exit Admin Panel
                    </Button>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button >
                                New Blog
                            </Button>
                        </DialogTrigger>
                        <DialogContent className={"lg:max-w-screen-xl h-[99vh] overflow-y-scroll max-h-screen"}>
                            <MarkdownEditor
                                setContent={setBlogContent}
                            />
                            <div className="flex justify-center items-center space-x-2">
                                <Dialog>
                                    <DialogTrigger>
                                        <Button
                                            disabled={loading}
                                        >
                                            {loading ? "Publishing..." : "Publish"}
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>
                                                Publish Blog
                                            </DialogTitle>
                                            <section className="flex flex-col space-y-2">
                                                <Input
                                                    placeholder="Enter the blog title..."
                                                    type="text"
                                                    id="title"
                                                    className="mt-3"
                                                    value={blogTitle}
                                                    onChange={(e) => setBlogTitle(e.target.value)}
                                                />
                                                <Input
                                                    placeholder="Enter the blog description..."
                                                    type="text"
                                                    id="description"
                                                    className=""
                                                    value={blogDescription}
                                                    onChange={(e) => setBlogDescription(e.target.value)}
                                                />
                                                <Input
                                                    placeholder="Enter the blog slug..."
                                                    type="text"
                                                    id="slug"
                                                    className=""
                                                    value={blogSlug}
                                                    onChange={(e) => {
                                                        const allowedCharacters = /^[a-zA-Z0-9-]*$/
                                                        const slug = e.target.value
                                                        const slugWithoutSpaces = slug.replace(/\s+/g, '-').toLowerCase()
                                                        if (slugWithoutSpaces.match(allowedCharacters)) {
                                                            const slugWithoutConsecutiveDashes = slugWithoutSpaces.replace(/--+/g, '-')
                                                            setBlogSlug(slugWithoutConsecutiveDashes)
                                                        }
                                                    }}
                                                />
                                                <Button
                                                    disabled={loading}
                                                    onClick={async () => {
                                                        setLoading(true)
                                                        if (blogTitle === '' || blogDescription === '' || blogContent === '' || blogSlug === '') {
                                                            toast({
                                                                variant: "destructive",
                                                                title: "Uh oh!",
                                                                description: "Please fill all the fields"
                                                            })
                                                            setLoading(false)
                                                            return
                                                        }
                                                        const object = {
                                                            title: blogTitle,
                                                            slug: blogSlug,
                                                            description: blogDescription,
                                                            body: blogContent
                                                        }
                                                        const { data } = await axios.post('/api/newBlogPost', object)
                                                        if (data.success) {
                                                            toast({
                                                                title: "Success!",
                                                                description: "Blog published successfully"
                                                            })
                                                            setBlogTitle('')
                                                            setBlogDescription('')
                                                            setBlogContent('')
                                                            setBlogSlug('')
                                                        } else {
                                                            toast({
                                                                variant: "destructive",
                                                                title: "Error!",
                                                                description: data.message
                                                            })
                                                            setLoading(false)
                                                        }
                                                        setLoading(false)
                                                    }}
                                                >
                                                    {loading ? "Publishing..." : "Publish"}
                                                </Button>
                                            </section>
                                        </DialogHeader>
                                    </DialogContent>
                                </Dialog>

                                <Dialog>
                                    <DialogTrigger>
                                        <Button>
                                            Image Plugin
                                        </Button>
                                    </DialogTrigger>
                                    <DialogContent>
                                        <DialogHeader>
                                            <DialogTitle>Image &rarr; URL Plugin</DialogTitle>
                                        </DialogHeader>
                                        <section className="flex flex-col space-y-2">
                                            <Input
                                                accept="image/*"
                                                id="picture" type="file"
                                                onChange={(e) => {
                                                    if (e.target.files !== null) {
                                                        setImage(e.target.files[0])
                                                    }
                                                }}
                                            />
                                            {!showImageProcessed && (<Button
                                                disabled={image === null || loading}
                                                onClick={async () => {
                                                    setLoading(true)
                                                    if (image === null) {
                                                        toast({
                                                            variant: "destructive",
                                                            title: "Please select an image"
                                                        })
                                                        setLoading(false)
                                                        return
                                                    }
                                                    const base64 = await new Promise((resolve, reject) => {
                                                        const reader = new FileReader();
                                                        reader.readAsDataURL(image);
                                                        reader.onload = () => resolve(reader.result);
                                                        reader.onerror = error => reject(error);
                                                    }
                                                    )
                                                    try {
                                                        const { data } = await axios.post('/api/uploadImage', {
                                                            base64: base64,
                                                            name: image.name
                                                        })
                                                        if (data.image_file.url) {
                                                            setImageLink(data.image_file.url)
                                                            setShowImageProcessed(true)
                                                        }
                                                    } catch (error) {
                                                        toast({
                                                            variant: "destructive",
                                                            title: "Something went wrong...",
                                                        })
                                                    }
                                                    setLoading(false)

                                                }}>
                                                Get URL
                                            </Button>)}

                                            {showImageProcessed && (
                                                <div className="flex flex-col space-y-2">
                                                    <Button onClick={() => {
                                                        navigator.clipboard.writeText(imageLink)
                                                        toast({
                                                            title: "Success!",
                                                            description: "Image URL copied to clipboard"
                                                        })
                                                        setShowImageProcessed(false)
                                                        setImageLink('')
                                                        setImage(null)
                                                    }
                                                    }>
                                                        Copy Image URL
                                                    </Button>
                                                    <Button onClick={() => {
                                                        navigator.clipboard.writeText(
                                                            `![${image?.name}](${imageLink})`
                                                        )
                                                        toast({
                                                            title: "Success!",
                                                            description: "Image URL copied to clipboard"
                                                        })
                                                        setShowImageProcessed(false)
                                                        setImageLink('')
                                                        setImage(null)
                                                    }
                                                    }>
                                                        Copy as Markdown Image
                                                    </Button>
                                                </div>
                                            )}
                                        </section>
                                    </DialogContent>
                                </Dialog>
                            </div>

                        </DialogContent>
                    </Dialog>
                </div>
            </section>
        );
    }
}

export default AdminPanel;

const MarkdownEditor: React.FC<{ setContent: (content: string) => void }> = ({ setContent }) => {
    const [markdown, setMarkdown] = useState<string>('');
    const [htmlOutput, setHtmlOutput] = useState<string>('');

    useEffect(() => {
        const savedContent = localStorage.getItem('markdownContent');
        if (savedContent) {
            setMarkdown(savedContent);
            setContent(savedContent);
        }
    }, [setContent]);

    useEffect(() => {
        localStorage.setItem('markdownContent', markdown);
    }, [markdown]);

    useEffect(() => {
        remark()
            .use(html)
            .process(markdown)
            .then((file) => setHtmlOutput(String(file)));
    }, [markdown]);

    const handleMarkdownChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMarkdown(event.target.value);
        setContent(event.target.value);
    };

    return (
        <div className="flex">
            <div className="flex-1 p-4">
                <h2 className="text-lg font-semibold mb-4">Markdown Input</h2>
                <Textarea
                    className="w-full h-[75vh] p-2 border rounded-md resize-none"
                    value={markdown}
                    onChange={handleMarkdownChange}
                    placeholder="Type your Markdown here..."
                />
            </div>

            <div className="flex-1 p-4">
                <h2 className="text-lg font-semibold mb-4">Output</h2>
                <div
                    className="prose dark:prose-invert w-full h-[75vh] p-2 border rounded-md overflow-y-scroll"
                    dangerouslySetInnerHTML={{ __html: htmlOutput }}
                />
            </div>
        </div>
    );
};
