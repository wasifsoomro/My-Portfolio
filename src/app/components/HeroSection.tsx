import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
  return (
    <section className="bg-custom-gradient h-screen flex items-center justify-center text-center text-white overflow-hidden">
  <div className='flex gap-10 items-center mx-auto md:gap-0 '>
    <div className='mx-4 md:mx-6'>
    <h1 className="text-5xl font-bold mb-4">Hello, I&apos;m Muhammad Wasif</h1>
    <p className="text-lg mb-6">A passionate Front-End Developer</p>
    <div className='space-x-2'>
    <Link href="/contact">
    <button className="bg-forestGreen text-white px-6 py-3 rounded hover:bg-opacity-90 hover:shadow-lg transition duration-200 hover:bg-emerald-600 hover:scale-105
">
      Get In Touch
    </button>
    </Link>
    <Link href="/projects">
    <button className="bg-forestGreen text-white px-6 py-3 rounded hover:bg-opacity-90 hover:shadow-lg transition duration-200 hover:bg-emerald-600 hover:scale-105
">
      View Portfolio
    </button>
    </Link>
    </div>
    </div>
    <div className='hidden md:block lg:block mt-32'>
        <Image src="/profile-nobg.png" alt='profile' width={350} height={300} className='h-[480px]'/>
    </div>
  </div>
</section>
  )
}

export default HeroSection
