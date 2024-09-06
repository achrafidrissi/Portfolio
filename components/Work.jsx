"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

// components
import ProjectCard from "@/components/ProjectCard";

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
    category: "next js",
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

const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left xl:h-[400px] flex flex-col justify-center items-center xl:items-start mb-12">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Explore some of the recent projects I've been working on
          </p>
          <Link href="/projects">
            <Button>ALL projects</Button>
          </Link>
        </div>
      </div>
      {/* Slider */}
      <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
        <Swiper
          className="h-[480px] "
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {/* show only the first 4 projects for the slides */}
          {projectData.slice(0, 4).map((project, index) => {
            return (
              <SwiperSlide key={index}>
                <ProjectCard project={project} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Work;
