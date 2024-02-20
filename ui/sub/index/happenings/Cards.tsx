import React from 'react'

interface Props{
    img:string 
    content:string
    title:string
    cardWidth : string
}

function Cards({ img, content, title, cardWidth }:Props) {
    return (
        <div className={`md:w-${cardWidth} min-h-[450px] border m-5 mx-2 p-2 cursor-pointer flex flex-col items-center rounded-lg hover:shadow-md hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200`}>
            <img src={img} className='relative rounded-lg w-full h-[80%] object-cover' alt="" />
            <h1 className='text-white absolute top-[40%] rounded-md border border-black p-1 ' style={{backgroundColor:'rgba(0, 0, 0, 0.721)'}} >{title}</h1>
            <p className=" w-[90%] p-2 rounded-lg absolute md:bottom-2 bottom-5 text-sm  bg-gray-400 text-black text-[14px] text-justify hover:text-gray-900 transition-all duration-200">{content}</p>
        </div>
    )
}

export default Cards