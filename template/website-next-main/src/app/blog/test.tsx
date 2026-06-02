/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import blogs from "../../../utils/blog";
import Image from "next/image";
import { format } from "date-fns";
import RoundedButton from "@/components/buttons/rounded-button";

const BlogDetails = () => {
//   const router = useRouter();
//   const { id } = router.query;
//   const blog = blogs.find((blog) => blog.id === parseInt(id as string, 10));

  // if (!blog) {
  //     return <div>Blog not found</div>;
  // }

  return (
    <section className='container mx-auto my-8'>
            <div className='flex flex-wrap -mx-4 justify-start'>
                {blogs.map(blog => (
                    <div key={blog.id} className='w-full px-4 mb-8'>
                        <div className='bg-cardClr border-borderClr/30 text-textClr p-5 flex flex-col gap-4 h-full rounded-2xl'>
                            <h1 className="text-5xl font-bold font-nunito gradient-text text-center">Unlocking AI: Your Guide to the Future that Belongs to You</h1>
                            <div className="flex flex-col gap-12">
                                <div>
                                <h1 className="text-3xl font-bold font-nunito text-textClr px-4 text-left">Welcome to the AI Revolution – It's for You, Too!</h1>
                            <p className="text-xl px-4 text-left">You've likely heard whispers of an AI revolution transforming our world. It's not just about robots taking over; it's about intelligent technology enhancing every part of our lives. But let's address the elephant in the room: Does all this talk of AI leave you feeling like you are outside looking in?</p>
                            <div className='relative my-8 w-full flex justify-center items-center'>
                    <Image
                        src="/blog/blog-1a.png"
                        alt={blog.title}
                        height={800}
                        width={800}
                        objectFit="cover"
                        className='rounded-lg'
                    />
                </div>
                                </div>

                                <div>
                                <h1 className="text-3xl font-bold font-nunito text-secondaryColor  px-4 text-left">Breaking Down Barriers</h1>
                            <p className="text-xl  px-4 text-left">It's true that the tech gurus have had fun with AI, but it's time to pull back the curtain. Forget complex terms like 'Prompt engineering' and 'Retrieval Augmented Generation'. We're here to translate AI from geek speak to street speak.</p>
                            <div className='relative my-8 w-full flex justify-center items-center'>
                            <Image
                        src="/blog/blog-1b.png"
                        alt={blog.title}
                        height={800}
                        width={800}
                        objectFit="cover"
                        className='rounded-lg'
                    />
                </div>
                                </div>
                                <div>
                                <h1 className="text-3xl font-bold font-nunito text-secondaryColor px-4 text-left">AI in Your Everyday</h1>
                                <p className="text-xl  px-4 text-left">Think about the last time you asked your phone for the weather forecast or received a movie recommendation from Netflix. That's AI at work! It's not just for coding wizards; it's for everyone, from employers to employees, students, artists and grandmothers.</p>
                                </div>
                                <div>
                                <h1 className="text-3xl font-bold font-nunito text-secondaryColor  px-4 text-left">Simple Steps to Embrace AI</h1>
                            <p className="text-xl px-4 text-left"><span className="text-secondaryColor font-bold">1. Ease of Use: </span>AI tools should be as intuitive as coffee-making. We're advocating for tech that serves you, not the other way around.</p>
                            <p className="text-xl px-4 text-left"><span className="text-secondaryColor font-bold">2.Education for All: </span>You shouldn't need a degree in computer science to benefit from AI. It's about support and guidance, not prerequisites and gatekeeping.</p>
                            <p className="text-xl px-4 text-left"><span className="text-secondaryColor font-bold">3.Tailored Technology: </span>Your AI experience should fit you like a glove. It should be customisable, adaptable, and ready to work for your unique needs.</p>
                            <div className='relative my-8 w-full flex justify-center items-center'>
                            <Image
                        src="/blog/blog-1c.png"
                        alt={blog.title}
                        height={800}
                        width={800}
                        objectFit="cover"
                        className='rounded-lg'
                    />
                </div>
                </div>
                <div>
                <h1 className="text-5xl font-bold font-nunito text-textClr px-4 text-left">Meet 2ai.cx AlterEgos – <span className=" gradient-text">Your AI Second Self</span></h1>
                <p className="text-xl px-4 text-left">We're not just dreamers; we're doers. Our platform is designed to be powerful for the pros yet intuitive for the first timers.</p>
                <br />
                <p className="text-xl px-4 text-left"><span className="text-secondaryColor font-bold">Simplicity Reigns Supreme: </span>Our interface is crafted for clarity and ease, empowering you to harness AI's potential without the tech headaches.</p>
                            <p className="text-xl px-4 text-left"><span className="text-secondaryColor font-bold">Custom AI Just for You: </span>Your business and personal life are unique. Your AI should be too. We create AI AlterEgos that get you – really get you.</p>
                            <p className="text-xl px-4 text-left"><span className="text-secondaryColor font-bold">Coding-Free Zone: </span>Don't worry about the technical details. That's our job. Your job is to thrive and grow.</p>
                            <br />
                            <p className="text-xl px-4 text-left">2ai autonomous agents are the operational ‘second self’ your business desperately needs - to fill skill gaps, keep you up to speed with new technology-based efficiencies, lift productivity and free up time.</p>
                </div>
                <div>
                <h1 className="text-3xl font-bold font-nunito text-secondaryColor px-4 text-left">Join the Movement</h1>
                <p className="text-xl px-4 text-left">The AI revolution is not an exclusive club. It's a wave that lifts all boats. Are you ready to ride it?

Don't just observe the transformation. Be an active participant in shaping a future where AI is not a privilege but a shared tool for progress.

The pen for the next chapter of AI is in your hand. It's time to start writing.

Visit https://2ai.cx now. Join us in making AI accessible because when it comes to AI, being early to the party means you get to help set up – and that's where the real magic happens.
</p>
                <br />
                </div>
                <div>
                <h1 className="text-3xl font-bold font-nunito text-secondaryColor px-4 text-left">Share This Journey</h1>
                <p className="text-xl px-4 text-leftr">If you're ready to be a part of the AI revolution for everyone, share this post. Let's spread the word that AI is not just changing the game; it's redefining it for all of us.


This post was written with the help of Colin the Social Media Customer Advocate a 2ai Alter Ego who is skilled in Brand Reputation, Communication and Empathy, Digital Proficiency and Social Media Savvy, Creating viral posts and more

</p>
                <br />
                </div>
                            </div>
                
                </div>


                    </div>
                ))}
            </div>

        </section>


    
  );
};

export default BlogDetails;
