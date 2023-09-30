import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const formSchema = z.object({
    name: z.string().min(2).max(50),
    email: z.string().email(),
    message: z.string().min(5).max(500),
});


const ContactPage = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema as any),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <section className='flex justify-center items-center h-[70vh]'>
            <Card className='p-4 mx-2 lg:md:sm:w-1/2 w-full border border-primary/20'>
                <h1 className="font-bold lg:text-2xl text-xl bg-gradient-to-br dark:from-gray-100 dark:via-gray-200 dark:to-gray-300 from-gray-400 via-gray-600 to-gray-800 bg-clip-text text-transparent pb-3">
                    Contact Me
                </h1>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium pb-2">
                            Name
                        </label>
                        <Input
                            placeholder="John Doe"
                            type="text"
                            id="name"
                            className=""
                            {...form.register('name')}
                        />
                        {form.formState.errors.name && (
                            <span className="text-red-300 text-sm">{form.formState.errors.name.message}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium pb-2">
                            Email
                        </label>
                        <Input
                            placeholder="hello@example.com"
                            type="text"
                            id="email"
                            className=""
                            {...form.register('email')}
                        />
                        {form.formState.errors.email && (
                            <span className="text-red-300 text-sm">{form.formState.errors.email.message}</span>
                        )}
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium pb-2">
                            Message
                        </label>
                        <Textarea
                            placeholder="Hello, I'd like to talk about..."
                            id="message"
                            className=""
                            {...form.register('message')}
                        />
                        {form.formState.errors.message && (
                            <span className="text-red-300 text-sm">{form.formState.errors.message.message}</span>
                        )}
                    </div>
                    <Button>Submit</Button>
                </form>
            </Card>
        </section>
    );
}

export default ContactPage;