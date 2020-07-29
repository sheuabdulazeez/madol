import React, { Component } from 'react';
import Movies from './Movies';

class NewArival extends Component {
   
    render(){
        
        return(
            <div className="container">
                <div className="heading flex ai-c pb-4">
                    <h2>New Arrival</h2><p className="p-1">This pick won't disappoint you</p>
                </div>
                <div >
                    
                    <div className="grid-3 ai-c w-100">
                        <Movies movies={this.props.newarrival} className="mov-outer-alt p-relative mb-4"/>
                      
                    </div>
                   <div  className="text-center">
                       <button className="p-1 r-curve btn-trans"><i className="fa fa-angle-down pr-1"></i>  Load More</button>
                   </div>
                </div>
            </div>
        )
    }
}
export default NewArival;