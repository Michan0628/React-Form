import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSignupForm } from './SignupFormContext'

// How to check the length of Object:
// var size = Object.keys(myObj).length;
function isEmpty(obj) {
  return Object.keys(obj).length === 0
}

export default function Links() {
  const { profile, social } = useSignupForm()
  // if profile form is empty
  const isProfileEmpty = isEmpty(profile)
  // if social form is empty
  const isSocialEmpty = isEmpty(social)

  return (
    <div className='step-links'>
      <NavLink to='/' exact>
        {isProfileEmpty ? '🤍' : '💖'} Profile
        <span />
      </NavLink>
      {isProfileEmpty ? (<a>🤍 Social<span /></a>):(
        <NavLink to='/social'>
        {isSocialEmpty ? '🤍' : '💖'} Social
        <span />
      </NavLink>
      )}
      
      {isProfileEmpty || isSocialEmpty ? (<a>Review<span/></a>):
          <NavLink to='/review'>
          Review
          <span />
        </NavLink>
      }
  
    </div>
  )
}
