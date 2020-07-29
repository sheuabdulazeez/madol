import React, { Component } from 'react';
import Cate from './bits/Cate'
class Cates extends Component {
    render(){
        
        return this.props.movies.map((movie) =>(
            <Cate id={movie.id} movie={movie}  className={this.props.className}/>
        )
        )
    }
}
export default Cates;