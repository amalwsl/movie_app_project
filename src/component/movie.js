import React from 'react'
import './ComponentMovie.css'

export default function MovieVideos({match,movies}) {
    const {ID}=match.params
    const movie=movies.find(movie=>movie.id===ID)
    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe width="700" height="394" src={movie.url} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen>
            </iframe>
        </div>
    )
}
