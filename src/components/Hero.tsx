
import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
// import { Link } from 'lucide-react'
import Link from 'next/link'


async function grtData (){
const query = `*[_type =="heroImage"][0]`

const data = await client.fetch (query)

return data
}


const Hero = async () => {

    const  data = await grtData()

    return (
        <section className='w-full h-full  -px-7 sm:pb-6  lg:px-20 md:px-0  xxs:px-0 -sm:px-10 -bg-slate-400 -flex -justify-center flex-col  '>
            <div className='mb-8 sm:flex sm:flex-row -flex-wrap mdr:justify-between md:mb-16 -bg-neutral-500 w-full pt-5  mdr:flex xxs:justify-center -bg-slate-400  -justify-between xxs:px-5'>
 <div className='flex mb-6  w-full flex-col sm:mb-12 lg:mb-0  lg:w-[380px]  md:w-[350px] sm:pt-10 mdr:pt-10 lg:pb-24 -lg:pt-32 -bg-slate-500 pr-4 -bg-red-400  mdr:w-[400px] xxs:w-[300px] -mdr:w-full  sm:w-[400px] -xxs:px-5 mdr:px-5  bg-red-200
  '>   
                    <h1 className='mb-4 mdr:text-4xl  xxs:text-5xl font-bold  text-black sm:text-5xl md:mb-8 md:text-6xl  -bg-black'>
                        <span className='text-[#3b82f6]'>Top</span>Fashion for a top <span className='text-[#3b82f6]'>price!</span>
                    </h1>
                    <p className='max-w-md leading-relaxed text-gray-500 xl:text-lg'>
                        We sell only the most exclusive and high quality products for you 
                        we are the best so come and shop with us.
                    </p>
                </div>
                {/* Second div  */}
                <div className='mb-12 flex items-center justify-center w-full md:mb-16 lg:w-[700px]  -bg-red-400 h-full   -bg-orange-300 -bg-black xxs:px-5 mdr:px-0  '>
                    <div className='relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg shadow-lg md:left-8 md:top-11 lg:ml-0 -bg-slate-500  '>
<Image src={urlFor(data.image1).url()} alt=''
className='w-full lg:h-[420px]  sm:h-[300px]  object-cover object-center    ' 
                                width={600} 
                                height={500} 
priority/>
                    </div>
{/* Second iamge */}
                    <div className='overflow-hidden rounded-lg bg:gray-100 shadow-lg pt-3 sm:w-[250px] mdr:h-[300px]  md:h-[400px] md:w-[300px]'>
                            <Image 
src={urlFor(data.image2).url()} alt=''
                                width={500} 
                                height={500} 
                                className='lg:h-full md:h-[400px] -md:w-[300px]  sm:h-[300px] w-full object-cover object-center' 
                                priority 
                            />
                    </div>
                </div>
            </div>
            {/* More than div  */}
            <div className='flex items-center gap-8 flex-col -justify-center md:flex-row -bg-slate-500'>
<div className='flex h-12 w-64 divide-x overflow-hidden  rounded-lg border '>
                    <Link href='\Men' className='flex w-1/3 items-center justify-center text-gray-400 transition duration-500 hover:bg-gray-100 active:bg-gray-200'>Men</Link>

                    {/* Second Link */}
                    <Link href='\Women' className='flex w-1/3 items-center justify-center text-gray-400 transition duration-500 hover:bg-gray-100 active:bg-gray-200'>Women</Link>

                    {/* Third Link */}
                    <Link href='\Teens' className='flex w-1/3 items-center justify-center text-gray-400 transition duration-500 hover:bg-gray-100 active:bg-gray-200'>Teens</Link>
                </div>
            </div>
        </section>
  )
}

export default Hero
