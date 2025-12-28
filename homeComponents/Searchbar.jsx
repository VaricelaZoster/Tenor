
import React from 'react'

const Searchbar = ({isVisible}) => {
    console.log(isVisible);
    return (
        <div className='bg-blue-400 flex justify-center py-3 sticky top-0 z-10'>
            {!isVisible && (
                <div>tenor</div>
            )}
            <div className="flex bg-white w-[80%] h-15 rounded-sm shadow-md font-semibold text-xl">
                <input type="text" placeholder='Search for GIFS and stickers' className="px-6 w-full" />
                <div className="flex items-center px-2.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Searchbar