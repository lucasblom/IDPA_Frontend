import React from 'react'
import Nav_element from '../../components/Nav_element.jsx'
import Title_card from '../title_card.jsx'
import Flash_cards from './Flash_cards.jsx'
 import { useEffect } from 'react'



export default function Study() {
  useEffect(() => {
    document.querySelector('img').setAttribute('src', '../../creator_profile_pic.jpg')
    document.querySelector('#nav').children[1].setAttribute('href', '../../set-list')
    document.querySelector('#nav').children[2].setAttribute('href', '../../add-set')

  })
  return (
    <main>
        <Title_card />
        <Flash_cards />
        <Nav_element />
    </main>
  )
}
