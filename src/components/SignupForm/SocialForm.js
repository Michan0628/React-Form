import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useSignupForm } from './SignupFormContext'
import Animator from './Animator'

export default function SocialForm() {
  const { register, handleSubmit, errors } = useForm()
  const history = useHistory()
  const { social, setSocial } = useSignupForm()

  const onSubmit = (data) => {
    // react hook form will automatically prevent refresh
    console.log(data)
    // store the data in the SignupFormContext hook
    setSocial(data)
    history.push('/review')
  }
  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on Social?</h2>
        <input
          type='text'
          name='twitter'
          defaultValue={social.twitter}
          placeholder="What's your Twitter?"
          ref={register({ required: true })}
        />
        <p>{errors.twitter && 'Twitter is required.'}</p>
        <input
          type='text'
          name='instagram'
          defaultValue={social.instagram}
          placeholder="What's your Instagram?"
          ref={register({ required: true })}
        />
        <p>{errors.instagram && 'A valid instagram is required.'}</p>

        <input type='submit' value='Next' />
      </form>
    </Animator>
  )
}
