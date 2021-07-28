import React from 'react';
import {Card,Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
// import ReactStars from "react-rating-stars-component";

function MovieCard({movie}){

    return(
        <Card style={{ width: '18rem' , margin: "1rem"}}>
        <Card.Img variant="top" src={movie.posterUrl} width="100%" height="400px" />
        <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
            {movie.description}
            </Card.Text>
            <Card.Text>
                {"⭐".repeat(movie.rate)}
            {/* <ReactStars
              count={5}
              value={movie.rate}
             size={24}
         /> */}
            </Card.Text>
            <Link to = {`/${movie.id}`}>
                       <Button variant="primary">Go somewhere</Button>
           </Link>
        </Card.Body>
        </Card>
    )

}

export default MovieCard