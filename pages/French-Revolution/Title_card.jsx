import React from 'react'


const Title_card = () => {
  return (
    <div id='title-card' className='information-banner'>
        <div id='set-information'>
            <div id='information'>
                <h1>French Revolution</h1>
                <p id='date'>From <span>05.05.1789</span> to <span>09.11.1799</span></p>
            </div>
            <div id='creator'>
                <img id='set-creator-profile-picture' src="./creator_profile_pic.jpg" alt='Profile Picture'></img>
                <h4>Set Creator</h4>
            </div>
        </div>
    </div>
  )
}

export default Title_card
