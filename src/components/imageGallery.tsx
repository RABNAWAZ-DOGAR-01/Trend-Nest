"use client";
import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
interface iappimages{
    images: { asset: { url: string } }[];
}



const ImageGallery = ({images}:iappimages) => {
    const [BigImage , SetImage] = useState(images[0])
                   
    const handelSmallClick = (image:any) => {
    SetImage(image);
    }
  return (
    <div className="grid gap-5 lg:grid-cols-5 -bg-slate-400 content-center px-5">
      <div className="flex order-last gap-4 lg:order-none lg:flex-col">
        {images.map((image, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg -bg-gray-100">
            <Image
              src={urlFor(image).url()}
              alt={`Product image ${idx + 1}`}
              className="h-full w-full object-cover cursor-pointer object-center"
              width={200}
              height={200}
              onClick={()=> handelSmallClick(image)}
            />
          </div>
        ))}
      </div>
      {/* Big Images */}
      <div className='-bg-blue-500 relative overflow-hidden rounded-lg lg:col-span-4 -bg-red-500 '>
       <Image src={urlFor(BigImage).url()}
        alt='photo'
         width={400} 
         height={400}
          className='-h-full -w-full
       object-cover object-center'/>
      
      <span className=' absolute left-0 right-0 uppercase rounded-br-lg bg-red-500 px-3 py-1.5 text-sm tracking-wider text-white'>
      Sale
       </span>
      </div>
    </div>
  )
}

export default ImageGallery