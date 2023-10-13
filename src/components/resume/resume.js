import React from 'react'
import Title from '../layouts/title'
import Resumecard from './resumecard'
import Education from './education'
import Skills from './Skills'
import { useState } from 'react'
import {motion} from 'framer-motion'

const Resume = () => {
    const [educationData, setEducationData] = useState(false);
    const [skillData, setSkillData] = useState(true);
  return (
    <section id='resume' className='w-full py-20 border-b-[1px] border-b-black'>
        <div className='flex justify-center text-center items-center'>
                <Title title="" des="My Resume">
                </Title>
            </div>

            <div >
                <ul className='flex flex-row justify-between w-full'>
                    <li onClick={()=> setEducationData(true) & setSkillData(false) } className='resumeLi'>Education</li>
                    <li onClick={()=>setSkillData(true) & setEducationData(false)} className='resumeLi'>Skills</li>
                </ul>
            </div>

            {skillData && <Skills/>}
            {educationData && <Education/>}

            


    </section>
  )
}

export default Resume
