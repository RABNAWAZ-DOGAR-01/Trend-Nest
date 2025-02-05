
import { fullproduct } from '@/app/interface'
import { client } from '@/app/lib/Sanity'
import AddtoBag from '@/components/AddtoBag';

import ImageGallery from '@/components/imageGallery'
import { Button } from '@/components/ui/button';
import { Star, Truck } from 'lucide-react';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Link from 'next/link';





async function Getdata(slug:string){
    const query = `*[_type == "product" && slug.current == "${slug}"][0]{
  _id,
    images[],
    price,
    name,
    description,
     "slug":slug.current,
     "categoryName":category->name,
     price_id,
}`;

 const data = await client.fetch(query)
  return data

  
}

export const  dynamic = "force-dynamic";
 async function Slugpage({params}:{params:Promise<{slug:string}>}) {
    const data : fullproduct = await  Getdata((await params).slug)
 

  


    const builder = imageUrlBuilder(client);
function urlFor(source: SanityImageSource) {
  return builder.image(source).url();
}


// const incrementRating = () => {
//   setRating((prev) => Math.min(prev + 1, 10)); // Ensure the max rating is 10
// };
  return (
    <div className='bg-white  w-full'>
    <div className='mx-auto max-w-screen-xl px-4 md:px-8 -bg-black py-5'>
    <Link href={'/'} className='lg:hidden pb-3'>Home/</Link>
    <div className='grid gap-2 md:grid-cols-2 -bg-slate-900 content-between px-5 '>
    <ImageGallery images={data.images || []} />
    {/* New div */}

    <div className='md:py-8 -bg-slate-400 -bg-amber-200'>
    <div className='mb-2 md:mb-3 -bg-slate-400 -flex'>
    
    <span className='mb-0.5 inline-block  text-gray-500'>
      {data.categoryName}
    </span>
  
    <h2 className='text-2xl font-bold text-gray-800 lg:text-3xl'>{data.name}</h2>
    </div>
    {/* New div  */}

    <div className=' mb-6 flex items-center  md:mb-10  gap-3 -bg-zinc-400'>
    <Button className='rounded-lg gap-x-3' >
      <span className='text-sm'>2.6</span>
      <Star className='h-5 w-5'/>
    </Button>

    <span className='text-gray-500 text-sm transition duration-100 font-[500]'>
      56 Rating
    </span>

    </div>

    {/* New div */}

    <div className='mb-4'>
    <div className='flex item-end gap-2 '>
    <span className='text-xl font-bold text-gray-800  md:text-2xl'>
      $
      {data.price}
    </span>
    <span className='mb-0.5 text-red-500 line-through font-bold'>${data.price + 30}</span>
    </div>

   {/* New span */}
   <span className='text-sm text-gray-500 -font-bold'>Incl Vat Plus Shipping</span>
    </div>

{/* New div */}
    <div className='mb-6  flex items-center text-gray-500 gap-5'>
    <Truck className='h-6 w-6'/>
    <span className='text-sm'>2-4 Day Shipping</span>
    </div>

    {/* New div */}
    <div className='flex gap-2.5 -bg-slate-400 items-center '>
    {/* <Button>Add To Bag</Button> */}
    <AddtoBag name={data.name} description={data.description}
              price={data.price} currency={'USD'} key={data._id} id={data._id} quantity={0}
              image={urlFor(data.images[0])} sku={''} price_id={data.price_id}/>
    <Button variant={'secondary'}>Checkout now</Button>
    </div>

    {/* New div */}
    <div>
      <p className='mt-12 text-base tracking-wide text-gray-500'>{data.description}</p>
    </div>

    </div>
    </div>
    </div>
    </div>
  )
}

export default Slugpage

