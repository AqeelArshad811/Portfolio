import React from 'react'


export default function Contact() {
    return (
<>


        <div name="Contact" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
        
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500 font-body'>Contact</p>
                    <p className='py-6 italic text-xl'>Submit the Form below to get in touch with me.</p>

                </div>
                <div className=' flex justify-center items-center'>
                    <form action="https://getform.io/f/efd811c9-b568-4a33-bb8a-46a3d12da0b2"  method="POST" className='flex flex-col w-full md:w-1/2'>
                        <input type="text" name="" placeholder='Enter your name  ' className=' p-2 bg-transparent border-2 text-white focus:outline-none ' required/>

                        <input type="email" name="" placeholder='Enter your Email  ' className='my-4 p-2 bg-transparent border-2 text-white focus:outline-none ' required/>

                        <textarea name="message"  placeholder='Enter your message' rows="10" className='p-2 bg-transparent border-2 text-white focus:outline-none' required></textarea>
                      <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-500 hover:bg-black'>Let's Talk</button>   
                    </form>
                </div>
            </div>
        </div>
</>
    )
}
