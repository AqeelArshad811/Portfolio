import React from 'react'
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg'
import installNode from '../assets/portfolio/installNode.jpg'
import navbar from '../assets/portfolio/navbar.jpg'
import reactParallax from '../assets/portfolio/reactParallax.jpg'
import reactSmooth from '../assets/portfolio/reactSmooth.jpg'
import reactWeather from '../assets/portfolio/reactWeather.jpg'




export default function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: arrayDestruct,
            dlink: "https://youtu.be/QANG6A1-zkQ?si=50SFAq8ImDYQfrdp",
            clink: "https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/#:~:text=Destructuring%20is%20a%20JavaScript%20expression,and%20assign%20them%20to%20variables."
        },
        {
            id: 2,
            src: installNode,
            dlink: 'https://youtu.be/mIW_8dMQaUk?si=2_P8D6e84CoKXSv8',
            clink: 'https://nodejs.org/en/download',

        },
        {
            id: 3,
            src: navbar,
            dlink: 'https://youtu.be/8AJ3Kcz5FsM?si=xvMavyqCMaLJ4yQd',
            clink: 'https://react-bootstrap.netlify.app/docs/components/navbar/'
        }, {
            id: 4,
            src: reactParallax,
            dlink: 'https://youtu.be/UgIwjLg4ONk?si=lqSg_MKlwuhxw1q0',
            clink: 'https://www.npmjs.com/package/react-parallax'
        }, {
            id: 5,
            src: reactSmooth,
            dlink: 'https://youtu.be/QzW03hyw_bU?si=Jq5uiWbk4ugKYLCE',
            clink: 'https://www.npmjs.com/package/react-smooth'
        }, {
            id: 6,
            src: reactWeather,
            dlink: 'https://youtu.be/7JqdjWB88Kk?si=SQxMXAzvXp9WfXKX',
            clink: 'https://www.npmjs.com/package/react-weather'

        }
    ]



    return (
<>
       
        <div name="Portfolio" className="bg-gradient-to-b from-gray-800 to-black w-full text-white md:h-screen">
           


            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

                <div className="pb-8">

                    <p className="text-4xl font-bold font-body inline border-b-4 border-gray-500">Portfolio</p>

                    <p className="py-6 italic text-xl">Check out some of my work right here </p>
                </div>


                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {
                        portfolios.map(({ id, src, dlink, clink }) => (
                            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">

                                <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />

                                <div className="flex items-center justify-center">

                                    <button
                                        onClick={() => window.open(dlink)}
                                        
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>

                                    <button onClick={() => window.open(clink)}
                                        className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>

                                </div>
                            </div>

))
}

                </div>
            </div>
        </div>
</>
    )
}
