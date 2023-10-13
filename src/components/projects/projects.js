import React from 'react'
import Title from '../layouts/title'
import ProjectsCard from './projectcard'
import {projectOne,projectTwo,projectThree} from '../../assets/index'

const projects = () => {
  return (
    
        <section id='projects' className='w-full py-20 border-b-[1px] border-b-black'>
            <div className='flex justify-center text-center items-center'>
                <Title title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK" des="My Projects">
                </Title>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectsCard
                    title="WEATHER WEBSITE"
                    des=" It is a website which shows weather using OpenWeather Api built using HTML,CSS and Javascript"
                    src={projectOne}
                    link={"https://nagendrasomala.github.io/Whether-site/"}
                />
                <ProjectsCard
                    title="TIC-TAC-TOE GAME"
                    des="It is a Tic-Tac-Toe Game Applkication built in Android Studio using Java"
                    src={projectTwo}
                    link={"https://github.com/nagendrasomala/Tic-Tac-Toe-game"}
                />
                <ProjectsCard
                    title="NETFLIX LANDING PAGE"
                    des="It is a Landing Oage of Netflix Built using HTML,CSS"
                    src={projectThree}
                    link={"https://github.com/nagendrasomala/Netflix"}
                />
            </div>
        </section>
      
   
  )
}

export default projects
