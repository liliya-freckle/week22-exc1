import React from 'react'

const Card = ({ details }) => {
    console.log(details)
    const { name, universe, alterego, occupation, friends, superpowers, url, info } = details
    return (
        <div>
            <h3>{name}</h3>
            <p>{universe}</p>
            <p>{alterego}</p>
            <p>{occupation}</p>
            <p>{friends}</p>
            <p>{superpowers}</p>
            <img src={url} />
            <p>{info}</p>
        </div>
    )
}

export default Card

