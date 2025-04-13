import React from 'react'
import Globe from "react-globe.gl";
import Button from "../components/Button.jsx";

const About = () => {
    const [hasCopied, setHasCopied] = React.useState(false)
    const handleCopy = () => {
        navigator.clipboard.writeText('work.monish86@gmail.com')
        setHasCopied(true)
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }
    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-rows-[auto] md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                {/* About Card */}
                <div className='col-span-1 xl:row-span-4'>
                    <div className="grid-container h-full flex flex-col bg-gradient-to-br from-gray-900/50 to-gray-800/30">
                        <img 
                            src="/assets/grid1.png" 
                            className="h-40 object-cover" 
                            alt="About visual" 
                        />
                        <div className="p-6 flex-1 flex flex-col">
                            <p className='text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text'>
                                HI, I'm Monish 👋
                            </p>
                            <p className='text-gray-300/90 mt-3 line-clamp-4 hover:line-clamp-none transition-all'>
                                Full-stack developer with <span className="text-blue-400">2 years</span> of experience building web applications. 
                                Expert in <span className="text-purple-400">React</span>, <span className="text-green-400">Node.js</span>, 
                                and <span className="text-pink-400">Three.js</span>. Passionate about creating efficient 
                                solutions with modern tech stacks.
                            </p>
                            <div className="mt-4 flex flex-wrap gap-2">
                                <span className="hobby-pill bg-blue-400/10 text-blue-400">🎮 Gaming</span>
                                <span className="hobby-pill bg-green-400/10 text-green-400">🌍 Travel</span>
                                <span className="hobby-pill bg-purple-400/10 text-purple-400">🎵 Music</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tech Stack Card */}
                <div className="col-span-1 xl:row-span-2">
                    <div className="grid-container h-full p-4 flex flex-col bg-gradient-to-br from-gray-900/50 to-blue-900/20">
                        <div className="flex items-center gap-2 mb-3">
                            <img 
                                src="/assets/react.svg" 
                                className="w-8 h-8 animate-pulse" 
                                alt="React Logo" 
                            />
                            <p className='text-xl font-bold text-blue-400'>Core Stack</p>
                        </div>
                        <div className="grid grid-cols-2 gap-2 flex-1">
                            <div className="tech-item bg-blue-400/10 text-blue-400">React</div>
                            <div className="tech-item bg-purple-400/10 text-purple-400">Tailwind</div>
                            <div className="tech-item bg-green-400/10 text-green-400">Node.js</div>
                            <div className="tech-item bg-yellow-400/10 text-yellow-400">MongoDB</div>
                            <div className="col-span-2 tech-item bg-pink-400/10 text-pink-400">Three.js</div>
                        </div>
                    </div>
                </div>

                {/* Location Card */}
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container h-full flex flex-col bg-gradient-to-br from-gray-900/50 to-green-900/20">
                        <div className="flex-1 relative min-h-[200px]">
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Globe
                                    height={200}
                                    width={800}
                                    backgroundColor="rgba(0,0,0,0)"
                                    globeImageUrl='//unpkg.com/three-globe/example/img/earth-night.jpg'
                                />
                            </div>
                        </div>
                        <div className="p-4">
                            <p className='text-lg font-semibold text-green-400'>📍 Location</p>
                            <p className='text-gray-300/90 mb-2'>India,remote work available</p>
                            <Button 
                                name="Contact" 
                                isBeam 
                                containerClass="w-full mt-2 bg-gradient-to-r from-green-400 to-blue-400" 
                            />
                        </div>
                    </div>
                </div>

                {/* Passion for Coding Section */}
                <div className="xl:col-span-2 xl:row-span-2">
                    <div className='grid-container h-full p-6 flex flex-col bg-gradient-to-br from-gray-900/50 to-purple-900/20'>
                        <p className='text-xl font-bold text-purple-400 mb-4'>🔥 Passion for Coding</p>
                        <div className="grid grid-cols-2 gap-4 flex-1">
                            <div className="passion-item bg-purple-400/10 p-4 rounded-xl hover:bg-purple-400/15 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-purple-400/20 rounded-full flex items-center justify-center">
                                        <span className="text-purple-400">👨💻</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-100">Code Crafting</h3>
                                </div>
                                <p className="text-sm text-gray-300/90">
                                    Building responsive web apps with clean, maintainable code
                                </p>
                            </div>
                            
                            <div className="passion-item bg-blue-400/10 p-4 rounded-xl hover:bg-blue-400/15 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-blue-400/20 rounded-full flex items-center justify-center">
                                        <span className="text-blue-400">🎮</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-100">Gaming Mind</h3>
                                </div>
                                <p className="text-sm text-gray-300/90">
                                    Applying game strategy logic to solve complex problems
                                </p>
                            </div>
                            
                            <div className="passion-item bg-green-400/10 p-4 rounded-xl hover:bg-green-400/15 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-green-400/20 rounded-full flex items-center justify-center">
                                        <span className="text-green-400">🌍</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-100">Global Inspiration</h3>
                                </div>
                                <p className="text-sm text-gray-300/90">
                                    Drawing creativity from diverse cultures and travels
                                </p>
                            </div>
                            
                            <div className="passion-item bg-pink-400/10 p-4 rounded-xl hover:bg-pink-400/15 transition-colors">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-pink-400/20 rounded-full flex items-center justify-center">
                                        <span className="text-pink-400">🎵</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-100">Music & Code</h3>
                                </div>
                                <p className="text-sm text-gray-300/90">
                                    Finding rhythm in code structure and architecture
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Let's Connect Card */}
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container h-full p-6 flex flex-col justify-between bg-gradient-to-br from-gray-900/50 to-pink-900/20">
                        <div className="text-center space-y-4">
                            <p className="text-pink-400 font-medium text-xl">Let's Connect!</p>
                            <div className="flex justify-center gap-4">
                                <a href="mailto:work.monish86@gmail.com" className="social-icon bg-pink-400/10 hover:bg-pink-400/20">
                                    ✉️
                                </a>
                                <a href="#" className="social-icon bg-blue-400/10 hover:bg-blue-400/20">
                                    💼
                                </a>
                                <a href="#" className="social-icon bg-purple-400/10 hover:bg-purple-400/20">
                                    👥
                                </a>
                            </div>
                        </div>
                        <div 
                            className="copy-container hover:bg-pink-400/10 rounded-lg p-3 transition-all cursor-pointer mt-6"
                            onClick={handleCopy}
                        >
                            <div className="flex items-center gap-3 justify-center">
                                <img 
                                    src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} 
                                    className="w-5 h-5 filter-pink-400" 
                                    alt="Copy" 
                                />
                                <span className="text-md truncate bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
                                    work.monish86@gmail.com
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
