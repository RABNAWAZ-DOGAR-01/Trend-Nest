import React from 'react'
import { client } from '../lib/Sanity'
import { simlifiedproduct } from '../interface';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';


async function GetData(category:string) {
    const query = ` *[_type == "product" && category->name == "${category}"]{
   _id,
     "imageUrl":images[0].asset->url,
     price,
     name,
    "slug":slug.current,
     "categoryName":category->name
     
 }`
 const data = await client.fetch(query)
return data ;
}




const Category = async ({ params }: { params:Promise<{ category:string }> }) => {

    const data:simlifiedproduct[] = await GetData((await params).category)



  return (
    <div className="-bg-gray-900 w-full -bg-yellow-300 flex items-center lg:justify-center">
    <div className="max-auto -max-w-2xl  px-4 py-16 sm:px-6 lg:max-w-7xl lg:px-8 -bg-red-400 ">
    <div className="flex -justify-between gap-5 items-center -bg-slate-400 mb-5  -bg-red-300">
    <h2 className="text-4xl font-bold tracking-tight text-gray-900">
      Our products For {(await params).category} 
      </h2>
      <div>
      <Link href={'/'} className='bold font-[700] lg:hidden' >/Home</Link>
      </div>
    </div>

    
    {/* Create a new Div */}
    {/* First Section */}
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid sm:grid-cols-3 lg:grid-cols-4 xl:gap-x-8 -bg-slate-300 w-full content-between mdr:grid-cols-2 xxs:w-[300px] mdr:w-full   sm:content-evenly  " >
    {data.map((product)=>(
    <div key={product._id} className="group relative ">
    <div className="aspect-square w-full overflow-hidden rounded-md  bg-gray-200 group-hover:opacity-75 lg:h-80">
    <Image src={urlFor(product.imageUrl).url()} alt="images" className="w-full h-full object-cover object-center lg:h-full lg:w-full"
    width={500}
    height={400}></Image>
    </div>
    {/*  Second Section */}
    <div className="mt-4 flex justify-between -bg-zinc-400 text-gray-700">
    <div>
    <h3 className="text-sm   -font-[600]">
       <Link href={`/product/${product.slug}`} >
       {product.name}
       </Link>
    </h3>
    <p className="mt-1 text-sm text-gray-500">{product.categoryName}</p>
    </div>
    <p className="font-[600] text-sm text-gray-700">${product.price}</p>
    </div>
    </div>
    ))}
    </div>
    
    
    </div>
     </div>
  )
}

export default Category