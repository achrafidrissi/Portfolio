'use client'
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
      image: "/work/eazyschool.png",
      category: "spring boot",
      name: "eazyschool Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "http://eazyschool-env.eba-ecsf9yiv.us-east-1.elasticbeanstalk.com/home",
      github: "/",
    },
    {
      image: "/work/dashboard.png",
      category: "Next js",
      name: "School dashboard",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "https://next-dashboard-three-woad.vercel.app/",
      github: "/",
    },
    {
      image: "/work/Meals.png",
      category: "Next js",
      name: "Meals Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "https://next-js-project-50g790uu0-elaidi-idrissi-achrafs-projects.vercel.app/",
      github: "/",
    },
    {
      image: "/work/1.png",
      category: "fullstack",
      name: "Nexa Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "/",
      github: "/",
    },
    /* {
      image: "/work/3.png",
      category: "next js",
      name: "Nexa Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "/",
      github: "/",
    },
    {
      image: "/work/4.png",
      category: "next js",
      name: "Nexa Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "/",
      github: "/",
    },
    {
      image: "/work/1.png",
      category: "fullstack",
      name: "Nexa Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "/",
      github: "/",
    },
    {
      image: "/work/3.png",
      category: "fullstack",
      name: "Nexa Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "/",
      github: "/",
    },
    {
      image: "/work/2.png",
      category: "fullstack",
      name: "Nexa Website",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, quis.",
      link: "/",
      github: "/",
    }, */
];

const uniqueCategories = [
    'all projects',
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
        <section className='min-h-screen pt-12'>
            <div className='container mx-auto'>
                <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
                    My Projects
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
                                    <ProjectCard project={project}/>
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



