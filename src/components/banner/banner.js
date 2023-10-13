import React from 'react'
import {useTypewriter, Cursor} from 'react-simple-typewriter';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiLeetcode} from "react-icons/si";


 
const Banner = () => {
    const [text] = useTypewriter({
        words: ["Web Developer."," Coder."],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 30,
        delaySpeed: 2000,
      }); 
  return (
    <section id='home' className='w-full py-20   pb-20 flex items-center  border-b-[1px] border-b-black'>
        <div className='w-10/12 flex flex-col gap-20'>
            <div className='flex flex-col gap-5'>
                <h1 className='text-6xl font-bold text-white'>Hi, I'm {" "}
                    <span className='text-designColor capitalize'>Venkat Ram Chaitanya</span>
                </h1>
                <h2 className='text-4xl font-bold text-white'>a <span>{text}</span>
                
                <Cursor
                    cursorBlinking="false"
                    cursorStyle="|"
                    cursorColor="#ff014f"
                />
                </h2>

                <p>I am an enthusiastic and dedicated individual committed to continuous personal and professional growth. With a passion for Developer, I strive to create meaningful and impactful work. My self-portfolio is a reflection of my journey, showcasing my skills, experiences, and creative endeavors.</p>
            </div>
            <div>
            <div className='flex gap-11 ps-8'>
                        <span className="bannerIcon">
                        <a href='https://github.com/venkatramchaitanya18/'><FaGithub /></a>
                        </span>
                        <span className="bannerIcon">
                        <a href='https://leetcode.com/Venkat918/'><SiLeetcode/></a>
                        </span>
                        <span className="bannerIcon">
                        <a href='https://www.linkedin.com/in/venkat-ram-chaitanya-40607622b/'><FaLinkedinIn /></a>
                        </span>
                </div>
            </div>
        </div>
            
        <div className='w-1/2 flex flex-col gap-20 h-[500px] border-collapse'>
            <img className=' '></img>
            

        </div>
    </section>
  )
}

export default Banner
