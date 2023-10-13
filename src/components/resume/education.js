import React from 'react'
import Resumecard from './resumecard'
import {motion} from 'framer-motion'

function Education() {
  return (
    <div>
            <div className='py-12 font-titleFont gap-20'>
                <p className='text-sm text-designColor tracking-[4px]'>2021 - 2025</p>
                <h2 className='text-4xl font-bold'>Education</h2>
                
            </div>

            <div className='mt-4 w-f1/2 h-[1100px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-5'>
                <Resumecard
                    title="BTECH Computer Science and Engineering"
                    subTitle="VIT-AP Uiversity (2021 - 2025)"
                    result="8.96/10"
                    des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
                />
                <br/>
                <Resumecard
                    title="Intermidiate"
                    subTitle="Narayana Intitute (2019 - 2021)"
                    result="96.6%/100"
                    des="Higher educationemphasizes core subjects, elective choices, and personal development, setting the stage for future academic and career pursuits."
                    
                />
                <br/>
                <Resumecard
                    title="Secondary School Education"
                    subTitle="Royal high School (2018 - 2019)"
                    result="10/10"
                    des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
                />
            </div>
      
    </div>
  )
}

export default Education
