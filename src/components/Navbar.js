import React from 'react';
import { connect } from 'react-redux';
import {showSearch,addMovieToResult} from '../actions';

class Navbar extends React.Component{
    constructor(){
        super();
        this.state={
            searchText:''
        }
    }
    handleSearch =() => {
        const {searchText}=this.state;
        this.props.dispatch(showSearch(searchText));
    }
    handleChange=(e)=>{
        this.setState({
            searchText:e.target.value
        })
    }
    handleAddSearch=(movie)=>{
        this.props.dispatch(addMovieToResult(movie));
    }
    render(){
        const{result,showSearchResult}=this.props.search;
        return(
            <div className="nav">
                <div className="search-container">
                    <input onChange={this.handleChange}/>
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>
                </div>
                {showSearchResult && 
                <div className="search-results">
                    <div className="search-result">
                        <img  src={result.Poster}/>
                        <div className="movie-info">
                            <span>{result.Title}</span>
                            <button onClick={()=>this.handleAddSearch(result)}>ADD MOVIE</button>
                        </div>
                    </div>
                </div>
            }
            </div>

        );
    }
}

// class NavbarWrapper extends React.Component{
//     render(){
//         return(
//             <StoreContext.Consumer>
//                 {(store)=> <Navbar dispatch={store.dispatch} search={this.props.search}/>}
//             </StoreContext.Consumer>
//         )
//     }
// }

function mapStateToProps(state){
    return {
        search:state.search
    }
}
export default connect(mapStateToProps)(Navbar);