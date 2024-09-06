'use client';

import {
    RiLinkedinFill,
    RiGithubFill,
    RiFacebookFill,
    RiInstagramFill,
} from 'react-icons/ri';

import UpworkIcon from "@/Icons/UpworkIcon";

import Link from 'next/link';
import IconUpwork from "@/Icons/IconUpwork";

const icons = [
    {
        path: 'https://www.linkedin.com/in/achraf-elaidi-idrissi-61b9b8259/',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://github.com/achrafidrissi',
        name: <RiGithubFill />
    },
    {
        path: '/',
        name: <RiFacebookFill />
    },
    {
        path: '/',
        name: <RiInstagramFill />
    },
];

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Socials;

