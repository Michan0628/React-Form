import React from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import ProfileForm from './ProfileForm'
import SocialForm from './SocialForm'
import Review from './Review'
import Links from './Links'
import { SignupFormProvider } from './SignupFormContext'
import {AnimatePresence} from 'framer-motion'


export default function SignupForm() {
    const location = useLocation();
    
  return (
    <SignupFormProvider>
      <div className='signup-form'>
        {/* Steps and links */}
        <Links />
        {/* forms */}
        <AnimatePresence>
        <Switch location = {location} key={location.pathname}>
          <Route path='/' exact component={ProfileForm} />
          <Route path='/social' exact component={SocialForm} />
          <Route path='/review' exact component={Review} />
        </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  )
}
