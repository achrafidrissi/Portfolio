import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import Link from "next/link";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Elaidi Idrissi Achraf',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '+212 661 89 83 50',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'elaidiidrissiachraf@gmail.com',
    },
    {
        icon: <Calendar size={20} />,
        text: 'Born on 12 Fev, 2004',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Computer Science Engineer',
    },
    {
        icon: <HomeIcon size={20} />,
        text: 'Rabat, Morocco',
    },
]

const certifications = [
    {   src: '/certifications/Spring Boot.jpg',
        title: 'Spring Boot Certification',
        icon: '/about/springboot.svg',
    },
    {   src: '/certifications/React.jpg',
        title: 'React Certification',
        icon: '/about/react.svg'
    },
    {   src: '/certifications/OCPJSE17.jpg',
        title: 'Professional Java SE 17',
        icon: '/about/java.svg'
    },
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Programming Languages: C, C++, Java, Python, PHP, Javascript, Python',
            },
            {
                name: 'Front-end Development: React, Next.js, TypeScript',
            },
            {
                name: 'Back-end Development: Spring Boot, Laravel, Django, Microservices',
            },
            {
                name: 'DevOps & Deployment: Amazon AWS, Docker, Kubernetes',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/java.svg',
            },
            {
                imgPath: '/about/js.svg',
            },
            {
                imgPath: '/about/python.svg',
            },
            {
                imgPath: '/about/laravel.svg',
            },
            {
                imgPath: '/about/react.svg',
            },
            {
                imgPath: '/about/docker.svg',
            },
            {
                imgPath: '/about/github.svg',
            },
            {
                imgPath: '/about/vscode.svg',
            },
        ]
    }
]

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className='xl:h-[860px] pb-12 xl:py-24'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    About me
                </h2>
                <div className='flex flex-col xl:flex-row gap-12' >
                    {/* image */}
                    {/*<div className='hidden xl:flex flex-1 relative' >
                        <DevImg
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>*/}
                    <div className='hidden xl:flex relative w-[450px] h-[462px] overflow-hidden rounded-full '>
                            <Image 
                            src='/hero/achraf.png' 
                            fill 
                            className="object-cover"
                            priority 
                            alt=''/>
                        </div>
                    {/* tabs */}
                    <div className='flex-1'>
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='qualifications'>Certification</TabsTrigger>
                                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            {/* tabs content */}
                            <div className='text-lg mt-12 xl:mt-8'>
                                {/* personal */}
                                <TabsContent value='personal'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-4'>Innovative Solutions in Software Development</h3>
                                        <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                                            I am dedicated to building efficient and user-friendly applications using the latest technologies, always aiming to create exceptional digital experiences.
                                        </p>
                                        {/* icons */}
                                        <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div className='flex items-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                        <div className='text-primary'>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        {/* languages */}
                                        <div className='flex flex-col gap-y-2'>
                                            <div className='text-primary'>Language Skill</div>
                                            <div className='border-b border-border'></div>
                                            <div>English, French, Arabic</div>
                                        </div>

                                    </div>
                                </TabsContent>

                                {/* certifications */}
                                <TabsContent value='qualifications'>
                                    <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24
                                    xl:gap-x-8 '>
                                        {certifications.map((item, index) => {
                                            return (
                                                <Card
                                                    className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                                                    key={index}
                                                >
                                                    <CardHeader className='text-primary absolute -top-[60px]'>
                                                        <div
                                                            className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                                            <Image src={item.icon} alt=''
                                                                   width={48}
                                                                   height={48}
                                                                   priority />
                                                        </div>
                                                    </CardHeader>
                                                    <CardContent className='text-center flex flex-col justify-between'>
                                                        <div className='w-full max-w-[200px] md:max-w-[200px] xl:max-w-[1000px] h-auto mx-auto' >
                                                            <Image
                                                                src={item.src}
                                                                alt=''
                                                                width={1000}
                                                                height={500}
                                                                priority
                                                            />
                                                        </div>
                                                        <CardTitle className='mb-4 pt-5'>
                                                            {item.title}
                                                        </CardTitle>
                                                    </CardContent>
                                                </Card>
                                            );
                                        })}
                                    </div>
                                    {/* Bouton "View More" */}
                                    <div className='text-center mt-8'>
                                        <Link
                                            href={'certifications'}
                                            className='bg-primary text-white py-2 px-6 rounded-md'>
                                            View More
                                        </Link>
                                    </div>

                                </TabsContent>
                                {/* Skills */}
                                <TabsContent value='skills'>
                                    <div className='text-center xl:text-left'>
                                        <h3 className='h3 mb-8'>What I Use Everyday</h3>
                                        <div className='mb-16'>
                                            <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                                            <div className='border-b border-border mb-4'></div>
                                            {/* skill list */}
                                            <div>
                                                {getData(skillData, 'skills').data.map((item, index) => {
                                                    const {name} = item;
                                                     return (
                                                        <div
                                                            className=' text-center xl:text-left mx-auto xl:mx-0'
                                                            key={index}
                                                        >
                                                            <div className='font-medium my-2'>{name}</div>
                                                        </div>

                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className='border-b border-border mb-4'></div>
                                        {/*Tools*/}
                                        <div className='flex gap-x-8 justify-center xl:justify-start' >
                                            {getData(skillData, 'tools').data.map((item, index) => {
                                                const { imgPath } = item;
                                                return (
                                                    <div key={index}>
                                                        <Image
                                                            src={imgPath}
                                                            width={48}
                                                            height={48}
                                                            alt=''
                                                            priority
                                                        />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

