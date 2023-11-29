import React from 'react';
import "./Footer.css"

export const Footer = () => {
  return (
    <div className='s-f'>
        <div className='explore'>
            <h1 className='f-tit'>explore</h1>
            <h2 className='h-subtit'>about</h2>
            <h2 className='h-subtit'>contact</h2>
            <h2 className='h-subtit'>the buildings</h2>
            <h2 className='h-subtit'>appartement</h2>
            <h2 className='h-subtit'>our agents</h2>
            <h2 className='h-subtit'>news</h2>
            <h2 className='h-subtit'>feedback</h2>
            <h2 className='h-subtit'>privacy policy</h2>


        </div>
        <div className='contact'>
        <h1 className='f-tit'>About</h1>
            <h2 className='h-subtit'>email </h2>
            <h2 className='h-subtit'>phone</h2>
            <h2 className='h-subtit'>address</h2>
        </div>

    </div>
  )
}
