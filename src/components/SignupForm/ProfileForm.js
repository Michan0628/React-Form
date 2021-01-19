import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSignupForm } from './SignupFormContext'
import Animator from './Animator'

export default function ProfileForm() {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const { profile, setProfile } = useSignupForm()

  const onSubmit = (data) => {
    // react hook form will automatically prevent refresh
    console.log(data)
    // store the data in the SignupFormContext hook
    setProfile(data)
    history.push('/social')
  }

  return (
    //   start from 200, animate to the center, exit to -200
    <Animator>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Tell us about yourself</h2>
        <input
          type='text'
          name='name'
          defaultValue={profile.name}
          placeholder="What's your name?"
          ref={register({ required: true })}
          />
        <p>{errors.name && 'Name is required.'}</p>
        <input
          type='email'
          name='email'
          placeholder="What's your email?"
          defaultValue={profile.email}
          ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
            />
        <p>{errors.email && 'A valid email is required.'}</p>

        <input type='submit' value='Next' />
      </form>
            </Animator>
  )
}
