import React from 'react'
import Nav_element from '../components/Nav_element'
import Set_thumbnail from '../components/Set_thumbnail'

export default function Set_List() {
  return (
    <main id='set-list-viwe'>
      <h1>My Sets</h1>
      <Nav_element />
      <Set_thumbnail />
      <Set_thumbnail />
      <Set_thumbnail />
      <Set_thumbnail />
    </main>
  )
}
