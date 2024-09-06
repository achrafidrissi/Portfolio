import {Download, Send} from "lucide-react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

import {
    RiBriefcase4Fill,
    RiTeamFill,
    RiTodoFill,
    RiArrowDownSLine
} from "react-icons/ri";

//components
import DevImg from "@/components/DevImg";
import Badge from "@/components/Badge";
import Socials from "@/components/Socials";

const Hero = () => {
    return (
        <section
            className='py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat
            bg-bottom bg-cover dark:bg-none'
        >
            <div className='container mx-auto'>
                <div className='flex justify-between gap-x-8'>
                    {/* text */}
                    <div className='flex max-w-[600px] flex-col justify-center mx-auto
                    xl:mx-0 text-center xl:text-left'>
                        <div className='text-sm uppercase font-semibold mb-4
                        text-primary tracking-[4px]' >
                            Software Engineer
                        </div>
                        <h1 className='h1 mb-4' >Hello, my name is Idrissi Achraf</h1>
                        <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>
                            Computer engineer specializing in backend, frontend, machine learning
                        </p>
                        {/* Buttons */}
                        <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                            <Link href='/contact'>
                                <Button className='gap-x-2'>
                                    Contact me <Send size={18} />
                                </Button>
                            </Link>
                            <Button variant='secondary' className='gap-x-2'>
                                Download CV <Download size={18} />
                            </Button>
                        </div>
                        {/* socials */}
                        <Socials
                            containerStyles='flex gap-x-6 mx-auto xl:mx-0'
                            iconsStyles='text-foreground text-[22px] hover:text-primary transition-all'
                        />
                    </div>
                    {/* image */}
                    <div className='hidden xl:flex relative'>
                        {/* badge1 */}
                        <Badge
                            containerStyles='absolute top-[24%] -left-[5rem]'
                            icon={<RiBriefcase4Fill />}
                            endCountNum={2}
                            badgeText='Years Of Experience'
                        />
                        {/* badge2 */}
                        <Badge
                            containerStyles='absolute top-[80%] -left-[1rem]'
                            icon={<RiTodoFill />}
                            endCountNum={50}
                            badgeText='Finished Projects'
                        />

                        {/* badge3 */}
                        <Badge
                            containerStyles='absolute top-[55%] -right-8'
                            icon={<RiTeamFill />}
                            endCountNum={100}
                            badgeText='Happy Clients'
                        />
                        {/*<DevImg imgSrc='/hero/Achraf2.jpeg'/>*/}
                        <div className='relative w-[490px] h-[462px] overflow-hidden rounded-full bg-red-400 '>
                            <Image 
                            src='/hero/Achraf2.jpeg' 
                            fill 
                            className="object-cover"
                            priority 
                            alt=''/>
                        </div>
                    </div>
                </div>
                {/* icon */}
                <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                    <RiArrowDownSLine className='text-3xl text-primary' />
                </div>
            </div>
        </section>
    );
};

export default Hero;

