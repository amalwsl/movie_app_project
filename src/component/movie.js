import React from 'react'
import './ComponentMovie.css'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

export default function MovieVideos({match,movies}) {
    const {ID}=match.params
    const movie=movies.find(movie=>movie.id===Number(ID))
    const history=useHistory()
    return (
        <div>
            <Button onClick={()=>history.goBack()}>Go Back</Button>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
            <iframe width="700" height="394" src={movie.trailer} 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"allowfullscreen>
            </iframe>
        </div>
    )
}
