// app/about/page.tsx
import React from 'react';
import Image from 'next/image';

const AboutPage: React.FC = () => {
  return (
    <section className="py-32 px-8 bg-[#2c3e50] text-white min-h-screen">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="text-left">
            <p className="text-lg mb-4 text-justify">
              Hi, I&apos;m <strong>Muhammad Wasif</strong>, a passionate Front-End Developer. I have a strong foundation in HTML, CSS, JavaScript, React, and Next.js, and I am continuously learning and honing my skills to become a full-stack developer.
            </p>
            <p className="text-lg mb-4 text-justify">
              My journey into web development has been both challenging and rewarding, driving me to create beautiful, responsive, and user-friendly websites. I am particularly interested in building modern interfaces and ensuring seamless user experiences.
            </p>
          </div>
          <Image
            src="/profile-nobg.png"
            alt="Muhammad Wasif"
            width={300}
            height={300}
            className="rounded-[50%] shadow-lg bg-teal-500"
          />
        </div>

        <h2 className="text-4xl font-semibold mt-12 mb-6">Skills</h2>
        <div className="flex flex-wrap gap-6">
          {['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'].map((skill, index) => (
            <span
              key={index}
              className="bg-[#3498db] text-white font-bold py-2 px-4 rounded-lg shadow-md transition transform hover:scale-105"
            >
              {skill}
            </span>
          ))}
        </div>

        <h2 className="text-4xl font-semibold mt-12 mb-6">Goals</h2>
        <p className="text-lg max-w-3xl  text-justify">
          My current focus is to deepen my knowledge of full-stack development, improve my problem-solving skills, and contribute to impactful projects. I am eager to expand my expertise by working with experienced developers and taking on complex challenges in web development.
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
