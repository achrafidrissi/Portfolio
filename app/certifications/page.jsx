'use client'
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import CertificationCard from "@/components/CertificationCard";

const projectData = [
    {
        image: '/certifications/c++.jpg',
        category: 'Dev Languages',
        name: 'C++20 Materclass',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-1c144bca-08ba-4b5c-90ac-0f128b0381d9',
        github: '/',
    },
    {
        image: '/certifications/Java SE 17.png',
        category: 'Dev Languages',
        name: 'Professional Java SE 17 Developer',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
        github: '/',
    },
    {
        image: '/certifications/Python.jpg',
        category: 'Dev Languages',
        name: 'Python',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-14e5709d-be91-474e-82c4-318d5d620265/',
        github: '/',
    },
    {
        image: '/certifications/Spring Boot.jpg',
        category: 'Backend',
        name: 'Master Spring 6, Spring Boot 3, Rest, JPA, Hibernate',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-b9df0146-b005-4a16-81f6-201d4e6eb314',
        github: '/',
    },
    {
        image: '/certifications/PhpHtmlCss.jpg',
        category: 'Backend',
        name: 'Dévelopoeur Php, Html et Css',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-0c22a771-6045-4d63-949d-04785062012d',
        github: '/',
    },
    {
        image: '/certifications/LARAVEL.jpg',
        category: 'Backend',
        name: 'Master Laravel',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-7db24d07-aedd-431b-a38f-21050a95c8de',
        github: '/',
    },
    {
        image: '/certifications/React.jpg',
        category: 'Frontend',
        name: 'React',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-660a703a-c671-45bc-9def-f1b1b5556177',
        github: '/',
    },
    {
        image: '/certifications/JavaScript.jpg',
        category: 'Frontend',
        name: 'JavaScript',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-27d2cf3c-a3bd-4267-8e7c-b93fbf30aa2a/',
        github: '/',
    },
    {
        image: '/certifications/OracleGenAi.png',
        category: 'Data Science & AI',
        name: 'Oracle Cloud Infrastructure 2024 Generative AI',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: '/',
    },
    {
        image: '/certifications/Data Science.jpg',
        category: 'Data Science & AI',
        name: 'Data Science for Business',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-c26b06b0-d9cc-492f-b045-65e2efc41564/',
    },
    {
        image: '/certifications/GenAi.jpg',
        category: 'Data Science & AI',
        name: 'Amazon Bedrock & AWS Generative AI',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.udemy.com/certificate/UC-41230cf6-43b5-44d2-9a72-8a1c4f0179ed/',
    },
    {
        image: '/certifications/Advanced Learning Algorithms.png',
        category: 'Data Science & AI',
        name: 'Advanced Learning Algorithms',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://www.coursera.org/account/accomplishments/verify/P6RHSLRVDGX2',
    },
    {
        image: '/certifications/Supervised Machine Learning.png',
        category: 'Data Science & AI',
        name: 'Supervised Machine Learning',
        description:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.',
        link: 'https://coursera.org/verify/3TCSGLHNSRLN',
    },
];

const uniqueCategories = [
    ...new Set(projectData.map((item) => item.category)),
];


const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState('all projects');

    const filteredProjects = projectData.filter((project) => {
        // if category is 'all projects' return all projects, else filter by category
        return category === 'all projects'
            ? project
            : project.category === category;
    });


    return (
        <section className='min-h-screen pt-12 pb-1'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    Cerifications
                </h2>
                {/* tabs */}
                <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
                    <TabsList
                        className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'
                    >
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setCategory(category)}
                                    value={category}
                                    key={index}
                                    className='capitalize w-[162px] md:w-auto'
                                >
                                    {category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <CertificationCard project={project}/>
                                </TabsContent>
                            );
                        })}
                    </div>

                </Tabs>
            </div>
        </section>

    )

};

export default Projects;



