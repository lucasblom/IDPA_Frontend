import React from 'react'
import Nav_element from '../components/Nav_element'

export default function Profile() {
  return (
    <main>
        <div id='Profile-Container'
        className='
          container 
          w-4/5 
          h-auto 
          my-8
          bg-stone-200
          flex 
          flex-col 
          gap-2
          p-4 
          shadow-xl 
          rounded-xl'>
          <img 
            src='../profile.png'
            className='rounded-2xl h-64 w-64 self-center'>
            </img>
          <h1 className='text-2xl text-center overflow-hidden'>First Name</h1>
          <h1 className='text-2xl text-center overflow-hidden'>Last Name</h1>
          <h3 className='text-xl text-center overflow-hidden'>Email</h3>
        </div>
        <div id='Ranking-Container'
        className='container w-4/5 h-auto bg-stone-200 flex flex-col p4 shadow-xl rounded-xl py-8'>
            <img src='../trophy-solid.svg' className='w-16 h-24 self-center'></img>
            <h3 className=' text-xl text-center'>Your Rank</h3>
            <p className='text-sm text-center'>Your Points</p>
         </div>
        <Nav_element />
    </main>
  )
}
