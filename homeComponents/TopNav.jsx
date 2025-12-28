'use client'
import React from 'react'
import { useState } from 'react'




const TopNav = () => {


    const [menuState, setmenuState] = useState(false)
    console.log(menuState)

    return (
        <div className='flex flex-row justify-between px-20 py-2 items-center'>
            <div className="text-blue-500 text-3xl cursor-pointer">tenor</div>
            <div className="flex text-lg gap-4">
                <button className="bg-blue-500 text-white px-4 py-1 rounded-sm font-bold">Create</button>
                <button className="px-4 border border-blue-500 rounded-sm text-blue-500 font-bold">Sign In</button>
                <div className="flex items-center" onClick={() => setmenuState(prev => !prev)}>
                    {menuState ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>

                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </div>
            </div>
        </div>
    )
}

export default TopNav