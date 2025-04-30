
import React from 'react'
import { data } from '../constants.js/constants'
import Card from './Card'
import '../styles/Cards.css'

function MainPage() {
    return (
        <div className='mainPage'>
            {
                data.map((person) => {
                    return <Card details={person} />
                })
            }

        </div>
    )
}

export default MainPage