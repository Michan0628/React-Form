import React from 'react'
import {useSignupForm} from './SignupFormContext'
import Animator from './Animator'

export default function Review() {
    const {profile, social} = useSignupForm();
    const handleSubmit = (e) =>{
        e.preventDefault();
        const data = {...profile, ...social};
        console.log(data);
        // you can send data to backend by Axios
        alert('you are submitting! congrats');
    }
    return (
        <Animator>
        <form onSubmit={handleSubmit}>
            <h2>Review all your info</h2>
            <p><strong>Name</strong>: {profile.name}</p>
            <p><strong>Email</strong>: {profile.email}</p>
            <p><strong>Twitter</strong>: {social.twitter}</p>
            <p><strong>Facebook</strong>: {social.instagram}</p>
        <input type="submit" value="Submit All Info"/>
        </form>
        </Animator>
    )
}
