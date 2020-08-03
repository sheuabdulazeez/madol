import React, { Component } from 'react';
import Movies from './Movies';

class NewArival extends Component {
   
    render(){
        
        return(
            <div className="mb-6 mt-6">
                <div className="heading row ai-c pb-4">
                    <h2 className="col-sm-12 col-md-3 col-lg-3">New Arrival</h2>
                    <p className="col-sm-12 col-md-3 col-lg-3">This pick won't disappoint you</p>
                </div>
                <div>
                    
                    <div className="row ai-c w-100">
                        <Movies movies={this.props.newarrival} className="mov-outer-alt p-relative mb-4 col-xs-12 col-sm-12 col-md-4 col-lg-4"/>
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