import React from 'react';
import Link from 'next/link';

const Projectspage = () => {
  const projects = [
    {
      title: "Simple Website",
      description:
        "A fully responsive website built with Next.js, showcasing my skills in web development and Next.js fundamentals.",
      image: "/mywebsite.png",
      link: "https://nextjs-website-tailwindcss-milestone2.vercel.app/",
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
      image: "/resume-builder.webp",
      link: "https://resume-milestone5.vercel.app/",
    },
  ];

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-[#2c3e50] via-[#34495e] to-[#2c3e50] text-center text-white">
      <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>
      <div className="flex flex-wrap justify-center gap-8 z-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="max-w-xs bg-opacity-20 bg-black shadow-lg rounded-lg overflow-hidden hover:scale-105 transform transition duration-300m "
          >
            <img src={project.image} alt={project.title} className="w-full h-60 p-4" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-[#e0e0e0]">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <Link href={project.link}>
                <button className="text-emerald-500 font-semibold hover:underline">View Details</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link href="/projects">
        <button className="inline-block mt-8 px-6 py-3 bg-emerald-500 text-white font-bold rounded hover:bg-emerald-600 transition duration-200 shadow-lg">
          View All Projects
        </button>
      </Link>
    </section>
  );
};

export default Projectspage;
