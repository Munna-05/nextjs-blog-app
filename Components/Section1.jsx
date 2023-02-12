import React from 'react'
import Image from 'next/image'
import moment from 'moment'
import { motion } from 'framer-motion'
import Author from './Author'



export default function Section1() {



    return (
        <section className='py-16'>
            <div className='container mx-auto md:px-20'>
                <h1 className='font-bold text-center text-4xl pb-12 '>
                    Trending
                </h1>

            </div>
            {slide()}
        </section>
    )
}



function slide() {

    const para = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto natus qui eligendi, laborum voluptatem fugit quod accusantium deserunt optio repellat numquam tempora reprehenderit necessitatibus delectus? Accusantium, quia ipsa! Obcaecati corrupti fugit ipsam consequuntur perspiciatis sed quis assumenda suscipit, veritatis qui accusantium natus ea? Atque eum alias mollitia, non expedita esse laborum ducimus explicabo sint ullam reprehenderit. Amet expedita libero id facere, obcaecati dignissimos tempore velit nobis odit esse in mollitia maxime tempora rem cupiditate quis nostrum perspiciatis nesciunt inventore a!'

    
    return (
        <>
            <div className='grid md:grid-cols-2'>
                <div className='image flex justify-center  px-4'  >
                    <img className='object-cover h-[65vh] w-full ' src={'https://images.pexels.com/photos/7063779/pexels-photo-7063779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}  />
                </div>
                <div className='flex items-baseline'>
                    <div className='px-4'>
                        <span className='text-sm text-orange-500'>Business,Travel - <span className='text-white text-xs'>{moment(Date.now()).format('lll')}</span></span>
                        <div> <heading className='text-6xl font-bold break-all capitalize'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</heading></div>
                        <p className='text-xs text-slate-400 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus facilis officiis vel porro! Dolor modi nam porro maxime similique! Earum, autem facere dolorum dicta voluptatibus corporis nisi libero iure blanditiis.</p>
                        <p className='text-sm text-slate-200 mt-5'>

                            {
                               para
                            }
                        </p>
                            <Author></Author>
                    </div>
                </div>
            </div>
        </>
    )
}

