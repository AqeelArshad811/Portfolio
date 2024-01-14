import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import nextjs from '../assets/nextjs.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import node from '../assets/node.png'
import mongodb from '../assets/mongodb.png'



export default function Experience() {
    const experience = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: 'shadow-orange-500',
            clink: "https://www.w3schools.com/html/"
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: 'shadow-blue-400',
            clink: 'https://www.w3schools.com/css/default.asp',
        },
        {
            id: 3,
            src: javascript,
            title: "JAVASCRIPT",
            style: 'shadow-rose-400',
            clink: 'https://www.w3schools.com/js/default.asp'
        },
        {
            id: 4,
            src: react,
            title: "REACT JS ",
            style: 'shadow-green-300',
            clink: 'https://www.w3schools.com/react/default.asp'
        },
        {
            id: 5,
            src: nextjs,
            title: "NEXT JS",
            style: 'shadow-white',
            clink: 'https://nextjs.org/'
        },
        {
            id: 6,
            src: tailwind,
            title: "TAILWIND",
            style: 'shadow-purple-400',
            clink: 'https://tailwindcss.com/'
        },
        {
            id: 7,
            src: mongodb,
            title: "MONGO DB",
            style: 'shadow-pink-400',
            clink: 'https://www.mongodb.com/'
        },
        {
            id: 8,
            src: github,
            title: "GITHUB",
            style: 'shadow-teal-400',
            clink: 'hhttps://desktop.github.com/'
        },
        {
            id: 9,
            src: node,
            title: "NODE JS",
            style: 'shadow-gray-400',
            clink: 'https://nodejs.org/en'
        }

    ]
    return (
        <>        
         
        <div name="Experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">
       
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
                <div >
                    <p className='text-4xl font-bold font-body border-b-4 border-gray-500 p-2 inline'>Experience </p>
                    <p className='py-6 italic text-xl'>These are the technologies I've worked with . </p>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
                    {experience.map(({ id, src, title, style, clink }) => (

                        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                            <a href={clink}>
                                <img src={src} alt="" className='w-20 mx-auto' />
                            </a>
                            <p className='mt-4'>{title}</p>
                        </div>
                    ))}

                </div>
            </div>
        </div>


        </>

    );
}
