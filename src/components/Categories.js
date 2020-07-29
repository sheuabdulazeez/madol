import React, { Component } from 'react';
import Cates from './Cates';

class Categories extends Component {
   
    render(){
        
        return(
            <div className="container">
                <div className="catebar">
                   <ul class="flex justify-se" style={{width:"500px",listStyle:"none"}}>
                       <li><a href="/" className="active">All</a></li>
                       <li><a href="/">Action</a></li>
                       <li><a href="/">Drama</a></li>
                       <li><a href="/">Sci-fi</a></li>
                   </ul>
                </div>
                <div >
                    
                    <div className="grid-3 ai-c w-100">
                        <Cates movies={this.props.movies} className="cat-outer p-relative mb-4"/>
                      
                    </div>
                   <div  className="text-center mb-4">
                       <button className="p-1 r-curve btn-trans"><i className="fa fa-angle-down pr-1"></i>  Load More</button>
                   </div>
                </div>
            </div>
        )
    }
}
export default Categories;