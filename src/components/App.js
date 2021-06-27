import React from 'react';
import Navbar from './Navbar';
import {data} from '../data';
import {addMovies,setShowFavourites} from '../actions';
import MovieCard from './MovieCard';
import { connect } from 'react-redux';
import { movies } from '../reducers';

class App extends React.Component {
  componentDidMount(){
    const {store} = this.props;
    // store.subscribe(()=>{
    //   console.log('updated here');
    //   this.forceUpdate();
    // })
    this.props.dispatch(addMovies(data));
    //console.log('store now',this.props.movies);
  }
  handleIsFavourite=(movie)=>{
    const {movies} = this.props;
    const index = movies.favourites.indexOf(movie);
    if(index===-1){
      return false;
    }
    return true;
  }
  handleTab = (val) => {
    this.props.dispatch(setShowFavourites(val));
  }
  render(){
    console.log('state',this.props);
    console.log('APP');
    const {movies,search} = this.props;
    const {list, favourites, showFavourites} = movies;
    const displayMovies=showFavourites?favourites:list;
    return(
      <div>
        <Navbar 
          search={search}
        />
        <div className="main">
          <div className="tabs">
            <div className={`tab ${showFavourites?'':'active-tabs'}`} onClick={()=>this.handleTab(false)}>Movies</div>
            <div className={`tab ${showFavourites?'active-tabs':''}`} onClick={()=>this.handleTab(true)}>Favourites</div>
          </div>
          <div className="list">
            {displayMovies.map((movie,index)=>(
              <MovieCard  
                movie={movie}
                isFavourite={this.handleIsFavourite(movie)}
                dispatch={this.props.dispatch}
                key={index}
              />
            ))
            }
            {displayMovies.length===0? <div className="no-movies">No Movies To Display!</div>:null}
          </div>
        </div>
      </div>
     );
  }
}

// class AppWrapper extends React.Component{
//   render(){
//     const{store}=this.props;
//     console.log('APPWRAPPER');
//     return (
//       <StoreContext.Consumer>
//         {(store)=>
//           <App store={store} />
//         }
//       </StoreContext.Consumer>
//     )
//   }
// }
function mapStateToProps(state){
  return {
    movies:state.movies,
    search:state.movies
  }
}
const connectedAppComponent=connect(mapStateToProps)(App);
export default connectedAppComponent;
