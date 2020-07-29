import React, { Component } from 'react';
import Movie from './bits/Movie'

class Movies extends Component {

    render(){
        
        return this.props.movies.map((movie) =>(
            <Movie id={movie.id} movie={movie}  className={this.props.className}/>
        )
        )
        
    }
}
export default Movies;