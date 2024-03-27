import React from 'react'

const Profile_view = () => {
  return (
    <a href='../profile'id='profile-view' className='information-banner'>
      <h1 id='welcome'>Welcome Back</h1>
      <div id='profile-info'>
        <img src="profile.png" style={{width:'100px', height:'100px', borderRadius:'1rem'}}/>
        <div>
          <h1>User Name</h1>
          <p>Your Rank is #</p>
          <p id="points">You have ### points</p>
        </div>
      </div>
    </a>
  )
}

export default Profile_view
