
//action type
export const ADD_MOVIE='ADD_MOVIE';
export const ADD_TO_FAVOURITES='ADD_TO_FAVOURITES'; 
export const REMOVE_FROM_FAVOURITES='REMOVE_FROM_FAVOURITES';
export const SET_SHOW_FAVOURITES='SET_SHOW_FAVOURITES';
export const SEARCH_RESULT='SEARCH_RESULT';
export const ADD_MOVIE_TO_SEARCH='ADD_MOVIE_TO_SEARCH';
export const ADD_MOVIE_TO_RESULT='ADD_MOVIE_TO_RESULT';

//action creator
export function addMovies(movies){
    return {
        type:ADD_MOVIE,
        movies:movies
    }
}

export function addToFavourites(movie){
    return {
        type:ADD_TO_FAVOURITES,
        movie:movie
    }
}

export function removeFromFavourites(movie){
    return {
        type:REMOVE_FROM_FAVOURITES,
        movie:movie
    }
}

export function setShowFavourites(val){
    return {
        type:SET_SHOW_FAVOURITES,
        val:val
    }
}


export function showSearch(movie){
    const url =`http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response=>response.json())
        .then(movie=>{
            console.log('movie&*(',movie);
            dispatch(addMoviesToSearch(movie));
        })
    }
}

export function addMoviesToSearch(movie){
    return {
        type:ADD_MOVIE_TO_SEARCH,
        movie:movie
    }
}

export function addMovieToResult(movie){
    return{
        type:ADD_MOVIE_TO_RESULT,
        movie:movie
    }
}