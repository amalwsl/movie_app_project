import MovieCard from "./MovieCard"

function MoviesList({movies,search,searchRate}){

    return(
        <div className="movieList" >
            {
                movies.filter(movie=>movie.title.toLowerCase().includes(search.toLowerCase())&& (movie.rate>=searchRate))
                .map((movie,i)=><MovieCard movie={movie} key={i} /> )
            }
        </div>
    )

}

export default MoviesList