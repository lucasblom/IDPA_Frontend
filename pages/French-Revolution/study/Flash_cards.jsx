'use client'
import React from 'react'
import { useState } from 'react'

const Flash_cards = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`${value}`);
  };
  return (
    <div id='Flashcard-Container' className='w-auto h-fit py-24 flex justify-center flex-col gap-6'>
      <h1 className='underline'>Date of Event</h1>
      <form onSubmit={handleSubmit}>
      <div className="flex items-center">
        <input 
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Event ..."></input>
        <button className="shadow-2xl appearance-none border rounded bg-stone-200 text-gray-700 font-bold py-2 px-3 ml-2 focus:outline-none focus:shadow-outline" type="submit">
          Check
        </button>
      </div>
      </form>
    </div>
  )
}

export default Flash_cards
