import { Button } from "@/components/ui/button";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { remark } from 'remark';
import html from 'remark-html';


interface Post {
    id: string;
    title: string;
    published: string;
    description: string;
    body: string;
    views: number;
}

const DyanmicBlogPostPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [post, setPost] = useState<Post | null>(null);
    const [markdownBody, setMarkdownBody] = useState<string>('')
    const [views, setViews] = useState<number>(post?.views || 0);
    const getPost = async () => {
        try {
            const { data } = await axios.get<Post>('/api/getPost', {
                params: {
                    id
                }
            });
            const result = await remark().use(html).process(data.body)
            setMarkdownBody(result.toString())
            setPost(data)
        } catch (error) {
            console.error('Error fetching post:', error);
        }
    };
    const updateViews = async () => {
        try {
            await axios.post('/api/updateViews', {
                id: post?.id,
                views: post?.views
            });
            setViews(views + 1);
        } catch (error) {
            console.error('Error updating views:', error);
        }
    }

    useEffect(() => {
        if (id) {
            getPost();
        }
    }, [id]);

    useEffect(() => {
        if (post) {
            updateViews();
        }
    }, [post]);
    return (
        <>
            <Link href="/blog">
                <Button className="px-2" variant={"outline"}>
                    &larr; Go Back
                </Button>
            </Link>
            <div className="mt-6 px-2">

                {post ? (
                    <div className="pb-24">
                        <h1 className="text-3xl mb-2">{post.title}</h1>
                        <p className="text-sm mb-4 text-secondary-foreground">
                            {new Date(post.published).toLocaleDateString('en-US', {
                                day: 'numeric',
                                month: 'long',
                                year: 'numeric'
                            })} • {post.views} views
                        </p>
                        <article dangerouslySetInnerHTML={{ __html: markdownBody }}
                            className="prose dark:prose-invert max-w-none mt-10"
                        />
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    );
};

export default DyanmicBlogPostPage;
