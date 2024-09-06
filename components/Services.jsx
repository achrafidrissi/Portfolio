import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';

const servicesData = [
    {
        icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
        title: 'Backend Development',
        description:
            'Leveraging robust frameworks like Laravel and Spring, I develop scalable and secure backend systems that power modern applications. My expertise includes creating RESTful APIs, managing databases, and ensuring seamless server-side functionality.',
    },
    {
        icon: <Blocks size={72} strokeWidth={0.8} />,
        title: 'Frontend Development',
        description:
            'Using the latest technologies such as React and Next.js, I build responsive and interactive user interfaces that provide exceptional user experiences. I focus on clean, maintainable code and performance optimization.',
    },
    {
        icon: <Gem size={72} strokeWidth={0.8} />,
        title: 'Machine Learning',
        description:
            'With a solid foundation in data science and machine learning, I design and implement models that turn data into actionable insights. My experience includes working with various machine learning frameworks and deploying models to production.',
    },
];


const Services = () => {
    return (
        <section className='mb-12 xl:mb-36'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
                    My Services
                </h2>
                {/* grid items */}
                <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                    {servicesData.map((item, index) => {
                        return (
                            <Card
                                className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                                key={index}
                            >
                                <CardHeader className='text-primary absolute -top-[60px]'>
                                    <div
                                        className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>
                                        {item.icon}
                                    </div>
                                </CardHeader>
                                <CardContent className='text-center'>
                                    <CardTitle className='mb-4'>{item.title}</CardTitle>
                                    <CardDescription className='text-lg'>
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Services;

