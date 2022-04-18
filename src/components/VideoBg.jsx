import torontoVideo from '../assets/toronto-video.mp4'


import React from 'react'

export default function VideoBg() {
  return (
    <div>


      <video className='w-screen object-cover h-[300px]' muted loop autoPlay src={torontoVideo} type='video/mp4'/>
    </div>
  )
}
