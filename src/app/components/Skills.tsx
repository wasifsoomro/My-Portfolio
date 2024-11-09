import React from 'react'

const Skills = () => {
  return (
    <section className="bg-gradient-to-br from-[#1f4037] to-[#99f2c8] py-20">
    <div className="container mx-auto px-8 text-center">
      <h2 className="text-4xl font-bold text-[#faf9f6] mb-8">Skills</h2>
      <p className="text-lg text-[#faf9f6] mb-12">Technologies I work with to build engaging applications</p>
      
     
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="html.png" alt="HTML Icon" className="w-16 h-16 bg-[#3498db] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">HTML</h3>
        </div>
  
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="/css.png" alt="CSS Icon" className="w-16 h-16 bg-[#3498db] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">CSS</h3>
        </div>
  
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="/javascript.png" alt="JavaScript Icon" className="w-16 h-16 bg-[#ffb400] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">JavaScript</h3>
        </div>
  
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="/typescriptlogo.png" alt="TypeScript Icon" className="w-16 h-16 bg-[#007acc] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">TypeScript</h3>
        </div>
  
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="/nodejs.png" alt="Node.js Icon" className="w-16 h-16 bg-[#68a063] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">Node.js</h3>
        </div>
  
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="/react-icon.png" alt="React.js Icon" className="w-16 h-16 bg-[#61dafb] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">React.js</h3>
        </div>
  
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="/next.png" alt="Next.js Icon" className="w-16 h-16  bg-[#f3f2f2] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">Next.js</h3>
        </div>
  
        
        <div className="bg-[#2c3e50] p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-200 hover:scale-105 text-center">
          <div className="flex justify-center mb-4">
            <img src="/tailwindcss.png" alt="Tailwind CSS Icon" className=" bg-[#3498db] p-2 rounded-full"/>
          </div>
          <h3 className="text-xl font-semibold text-[#faf9f6]">Tailwind CSS</h3>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Skills
