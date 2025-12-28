'use client'
import Searchbar from '@/homeComponents/Searchbar'
import TopNav from '@/homeComponents/TopNav'
import React from 'react'
import { useVisibility } from '@/homeComponents/Visibility'


const Page = () => {

  const {ref,isVisible} = useVisibility()

  return (
    <div className=''>
      <TopNav navRef = {ref} />
      <Searchbar isVisible={isVisible}/>
      <div className='h-screen bg-amber-100'>hi</div>
    </div>
  )
}

export default Page