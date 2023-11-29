import React from 'react'
import { AppartementCard } from '../components/appartementCart/AppartementCard'
import "./containers.css"

export const AppartementSection = () => {
  return (

    <div>
      <div className="section2">
        <h1 className='sect-title'> CHOOSE YOUR Appartement </h1>
      </div>
        <AppartementCard/>

    </div>
  )
}
