import React from 'react'
import StartRating from './StartRating'

const MovieCard = ({card}) => {
    return (
    <div className="card">

        <StartRating rate={card.rating}/>
        <img src={card.image} alt="max" />
        <h1>{card.name} </h1>
        <p>{card.date} </p>

    </div>
   )
}

export default MovieCard
