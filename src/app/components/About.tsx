import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className="bg-[#e0f7f4] py-20 text-center mx-auto text-[#333]">
  <div className="container mx-auto px-8 flex flex-col md:flex md:flex-row md:items-center md:justify-center gap-8">
    <div className="hidden md:block lg:block justify-center">
    <Image src="/profile.png" alt="About me" width={250} height={250} className="rounded-[50%] shadow-lg md:h-[250px] w-[250px]" />
    </div>
    <div>
    <h2 className="text-3xl font-bold mb-4">About Me</h2>
    <p className="text-lg max-w-prose mb-8">
      I&apos;m a passionate Front-End Developer, dedicated to building high-quality, user-centric websites.
    </p>
    <p className="text-lg max-w-prose mb-8 hidden md:block lg:block xl:block">
        I love creating efficient and beautiful applications that enhance the user experience. My journey in web development started with HTML and CSS, and I have expanded my skills to include JavaScript, React, and Next.js.
    </p>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-10">
      <Image src="/profile.png" alt="About me" width={250} height={250} className="rounded-[50%] shadow-lg md:hidden lg:hidden  " />
      <p className="text-lg max-w-prose md:hidden lg:hidden xl:hidden">
        I love creating efficient and beautiful applications that enhance the user experience. My journey in web development started with HTML and CSS, and I have expanded my skills to include JavaScript, React, and Next.js.
      </p>
    </div>
  </div>
</section>
  )
}

export default About
