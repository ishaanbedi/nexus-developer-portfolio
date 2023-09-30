import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Link from 'next/link';

interface Post {
    published: string;
    slug: string;
    title: string;
    description: string;
    body: string;
    views: number;
}

const BlogPage = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [searchParams, setSearchParams] = useState({
        q: ''
    });

    const getPosts = async () => {
        try {
            const { data } = await axios.get<Post[]>('/api/getPosts');
            data.sort((a, b) => {
                if (a.published > b.published) {
                    return -1;
                } else if (a.published < b.published) {
                    return 1;
                } else {
                    return 0;
                }
            });
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const searchPosts = async () => {
        try {
            const { data } = await axios.get<Post[]>('/api/searchPost', {
                params: {
                    query: searchParams.q
                }
            });
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.error('Error searching posts:', error);
        }
    };

    useEffect(() => {

        if (searchParams.q === '') {
            getPosts();
        } else {
            searchPosts();
        }
    }, [searchParams.q]);

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <section className='px-2'>
            <div className="mt-8">
                <form>
                    <Input
                        name="q"
                        defaultValue={searchParams.q}
                        placeholder="Search blog posts..."
                        onChange={(e) => setSearchParams({ ...searchParams, q: e.target.value })}
                    />
                </form>
            </div>
            <div className="mt-8">
                {posts.length === 0 && <p>No blog posts found</p>}
                {posts.map((post, index) => (
                    <Card key={index} className="mb-16 p-3 my-2">
                        <p className="text-xs mb-2 text-secondary-foreground">
                            {new Date(post.published).toLocaleDateString('en-US', {
                                weekday: 'long',
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}
                            &bull; {post.views} views
                        </p>
                        <h2 className="text-2xl text-primary">
                            <Link href={`blog/${post.slug}`}>{post.title}</Link>
                        </h2>
                        <p className="text-secondary-foreground/70 mb-5">{post.description}</p>
                        <Link
                            href={`blog/${post.slug}`}
                        >
                            <Button>
                                Read more &rarr;
                            </Button>
                        </Link>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default BlogPage;
