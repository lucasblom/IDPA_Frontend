import React from 'react'
import Nav_element from '../components/Nav_element'
import Set_thumbnail from '../components/Set_thumbnail'
import Upload from '../components/Upload'

export default function Add_Set() {
  return (
    <main id='set-list-viwe' >
      <Nav_element />
      <Upload />
      <div id='existing'>
        <h1>Edit existing set</h1>
        <Set_thumbnail />
        <Set_thumbnail />
      </div>
      
    </main>
  )
}
