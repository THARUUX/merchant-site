import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Center from './Center'


export default function Footer() {
  return (
    <div className='w-full footer pb-10 flex flex-col items-center bottom-0 '>
        <div className='h-36  w-full'></div>
        <Center>
        <div className='w-full flex flex-col sm:flex-row justify-between items-end p-2 lg:p-2'>
            <div className='md:ml-10 lg:ml-10 ml-2 w-full sm:w-3/4'>
                <div className='flex items-center ml-2 gap-2 text-slate-900'>
                    MERCHANT
                </div>
                <div className='flex flex-col  items-start gap-4 mt-10'>
                    <div className='flex text-sm gap-2 ml-1 text-main-dark'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        hiranthamerchant@gmail.com
                    </div>
                    <div className='flex text-sm gap-2 ml-1 text-main-dark'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                        +94 72 469 7185
                    </div>
                </div>

            </div>
                <div className='sm:text-end text-center px-10 h-full w-full text-xs md:text-sm lg:text-sm mt-10 md:mt-0 lg:mt-0  text-slate-900'>
                Copyright © 2024 MARCHANT
                </div>
        </div>
        <div className='flex sm:mt-10 text-xs gap-2 justify-center w-100 text-slate-800'>
                Designed and developed by <Link href={'https://tharuux.github.io'}>THARUUUX</Link>
        </div>
        </Center>
    </div>
  )
}
