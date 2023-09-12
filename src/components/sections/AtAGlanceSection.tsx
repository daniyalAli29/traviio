import React from 'react'
import { SanityAtGlanceSection } from '@/sanity/types'
import { urlFor } from '@/sanity/client'
import Image from 'next/image'

export type AtAGlanceSectionProps = {
    data: SanityAtGlanceSection
}

const AtAGlanceSection = (props:AtAGlanceSectionProps) => {
    console.log(props)
    const {data:{tagline,title,useful_links_section,facts},}=props
  return (
    <div className='px-6 py-9'>
    <div className='bg-[#F2FAFF] py-6'>
      <h2 className="text-blue text-base font-medium text-center">{tagline?.en}</h2>
      <h4 className="text-3xl font-medium text-center">{title?.en}</h4>
      <hr className="lg:w-1/12 w-1/3 my-2 text-yellow m-auto  bg-yellow  rounded-full border-2" />
      <div className='px-10 py-2 grid grid-flow-row grid-cols-4'> 
        {
             facts?
             facts.map((item:any,index:any)=>{
                return(
                    <div className='flex gap-x-2 items-center'>
                       <Image src={urlFor(item.icon)} width={55} height={50}/>
                       <div>
                          <h3 className='text-lg font-medium'>{item.title?.en}</h3>
                          <h3 className='text-sm opacity-50'>{item.subtitle?.en}</h3>
                       </div>
                    </div>
                )
             })
             :null
        }
      </div>
      
    </div>
    </div>
  )
}

export default AtAGlanceSection