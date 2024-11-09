
import React from "react";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Simple Website",
    description:
      "A fully responsive website built with Next.js, showcasing my skills in web development and Next.js fundamentals.",
    image: "/mywebsite.png",
    link: "https://nextjs-website-tailwindcss-milestone2.vercel.app/",
  },
  {
    title: "Banking System",
    description: 
      "A Node.js application simulating essential banking functionalities, built to demonstrate backend and API management skills.",
    image: "/bank System.png",
    link: "https://github.com/wasifsoomro/Bank-System.git",
  },
  {
    title: "Quiz Application",
    description: 
      "An interactive quiz application developed with Node.js and TypeScript, highlighting backend logic and TypeScript usage.",
    image: "/quiz-app.png",
    link: "https://github.com/wasifsoomro/quiz-app-.git",
  },
  {
    title: "Foodie Hamburger",
    description: 
      "A visually engaging, single-page food ordering application built to enhance UI/UX design skills.",
    image: "/foodie.png",
    link: "https://foodie-hamburger.vercel.app/",
  },
  {
    title: "Resume Builder",
    description: 
      "A dynamic resume builder allowing users to create and download a resume by entering personal details.",
    image: "/resume.png",
    link: "https://resume-milestone5.vercel.app/",
  },
  {
    title: "REST Countries API Explorer",
    description: 
      "A React app integrating REST Countries API to search and filter countries by region, showcasing API handling and data manipulation.",
    image: "/rest-countries.png",
    link: "https://github.com/wasifsoomro/Countries.git",
  },
  {
    title: "Pro ATM Simulation",
    description: 
      "A detailed ATM simulation project demonstrating my skills in TypeScript, focusing on transaction management and user interface.",
    image: "/atm.png",
    link: "https://github.com/wasifsoomro/ATM-Project.git",
  },
  {
    title: "100 Coding Challenges in TypeScript",
    description: 
      "A project featuring 100 diverse coding challenges completed in TypeScript, reflecting problem-solving and programming proficiency.",
    image: "/100 Coding.png",
    link: "https://github.com/wasifsoomro/CODING-CHALLENGES-FOR-100-DAYS.git",
  },
];


const ProjectsPage: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-[#34495e] text-center text-white min-h-screen">
      <h1 className="text-5xl font-bold mb-8">All Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-opacity-20 bg-black shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img 
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Link href={project.link} passHref>
                <button className="text-emerald-500 font-semibold hover:underline">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
