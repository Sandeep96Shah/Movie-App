import {
    ADD_MOVIE,
    ADD_TO_FAVOURITES,
    REMOVE_FROM_FAVOURITES,
    SET_SHOW_FAVOURITES,
    ADD_MOVIE_TO_SEARCH,
    ADD_MOVIE_TO_RESULT
    } from '../actions';


const initialStateMovies = {
    list:[],
    favourites:[],
    showFavourites:false
}
export function movies(state=initialStateMovies,action){
    switch(action.type){
        case ADD_MOVIE:
            return {
                ...state,
                list:action.movies
            }
        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        case REMOVE_FROM_FAVOURITES:
            const filteredFavourites=state.favourites.filter((favMovie)=>favMovie.Title!==action.movie.Title);
            return {
                ...state,
                favourites:filteredFavourites
            }
        case SET_SHOW_FAVOURITES:
            return {
                ...state,
                showFavourites:action.val
            }
        case ADD_MOVIE_TO_RESULT:
            return{
                ...state,
                list:[action.movie, ...state.list]
            }
        default:
            return state;
    }
}

const initialStateSearch = {
    result:{},
    showSearchResult:false
}

export function search(state=initialStateSearch,action){
    switch(action.type){
        case ADD_MOVIE_TO_SEARCH:
            return{
                ...state,
                result:action.movie,
                showSearchResult:true
            }
        case ADD_MOVIE_TO_RESULT:
            return {
                ...state,
                showSearchResult:false
            }
        default:
            return state;
    }
}

const initialState={
    movies:initialStateMovies,
    search:initialStateSearch
}

export default function combineReducer(state=initialState,action){
    return {
        movies:movies(state.movies,action),
        search:search(state.search,action)
    }
}