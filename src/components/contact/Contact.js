import React,{useState} from 'react'
import Title from '../layouts/title';

const Contact = () => {
 
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full">
        <div className="w-full h-auto flex flex-col lgl:flex-row align-middle justify-between">
          
          <div className="w-full lgl:w-[100%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b]  lgl:p-8 rounded-lg shadow-shadowOne">
            <form action="https://getform.io/f/a5f781dc-3d2a-4fe8-ab15-40cba5a7913e" method="POST" encType='multipart/form-data' className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5">
              
              
              <div className="w-full flex flex-col lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Your name
                  </p>
                  <input name="name" className='border-2 rounded-lg p-3 flex bg-bodyColor border-gray-300'
                    type="text"
                  />
                </div>
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input name='phone' className='border-2 rounded-lg p-3 flex bg-bodyColor border-gray-300'
                    type="text"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Email
                </p>
                <input name="email" className='border-2 rounded-lg p-3 flex bg-bodyColor border-gray-300'
                  
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Subject
                </p>
                <input name="subject" className='border-2 rounded-lg p-3 flex bg-bodyColor border-gray-300'
                  
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  Message
                </p>
                <textarea name="message" className='border-2 rounded-lg p-3 flex bg-bodyColor border-gray-300'
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>
              
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact