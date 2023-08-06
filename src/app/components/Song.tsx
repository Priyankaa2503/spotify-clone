import { PlayIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';

const Song = () => {
    const [hover, setHover] = useState(false)
    return (
        <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} className='grid grid-cols-2 text-neutral-400 text-sm py-4 px-5 hover:bg-white hover:bg-opacity-10 rounded-lg cursor-default'>
            <div className='flex items-center space-x-4'>
                {hover ? <PlayIcon  className='h-5 w-5 text-white' /> : <p className='w-5'>song no</p>}
                 <img className='h-10 w-10' src=""/>
                <div>
                    <p className='w-36 lg:w-64 truncate text-white text-base'>Track name</p>
                    <p className='w-36 truncate'>
                       
                                    <>
                                        <span  className='hover:underline'>Artist name</span>
                                        <span>artist length</span>
                                    </>
                        
                    </p>
                </div>
            </div>
            <div className='flex items-center justify-between ml-auto md:ml-0'>
                <p className='w-40 truncate hidden md:inline'>Album name</p>
                <p>duration track</p>
            </div>
        </div>
    );
}

export default Song;