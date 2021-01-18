import React from 'react'
import { Route, Switch } from 'react-router-dom'
import ProfileForm from './ProfileForm'
import SocialForm from './SocialForm'
import Review from './Review'
import Links from './Links'

export default function SignupForm() {
  return (
    <div className='signup-form'>
      {/* Steps and links */}
      <Links />
      {/* forms */}
      <Switch>
        <Route path='/' exact component={ProfileForm} />
        <Route path='/social' exact component={SocialForm} />
        <Route path='/review' exact component={Review} />
      </Switch>
    </div>
  )
}
