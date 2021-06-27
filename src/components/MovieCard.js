import React from 'react';
import {removeFromFavourites,addToFavourites} from '../actions';

class MovieCard extends React.Component{
    handleUnFavourite = () =>{
        const {movie} = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    }
    handleFavourite=()=>{
        const {movie} = this.props;
        this.props.dispatch(addToFavourites(movie));
    }
    render(){
        const {movie,isFavourite} =this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster"/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">{movie.imdbRating}</div>
                        {
                            isFavourite
                            ?<button className="unfavourite-btn" onClick={this.handleUnFavourite}>Unfavourite</button>
                            :<button className="favourite-btn" onClick={this.handleFavourite}>favourite</button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;