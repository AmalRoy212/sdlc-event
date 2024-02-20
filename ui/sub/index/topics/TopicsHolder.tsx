import React from 'react'
import HoverCard from '../../hoverCards/HoverCards'

function TopicsHolder({data}: any) {
  return (
    <div className='w-full h-auto md:flex-row flex-col mt-3 px-10 flex justify-center items-center gap-3'>
        {data.map((topic : any, index : any) => (
            <div key={index} className='md:w-1/5 w-full h-auto'>
                <HoverCard topic={topic} />
            </div>
        ))}
    </div>
  )
}

export default TopicsHolder