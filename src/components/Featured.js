import React, { Component } from 'react';
import Movies from './Movies';

class Featured extends Component {
   
    render(){
        
        return(
            <div className="mb-6 mt-6">
                <div className="heading flex ai-c pb-4">
                    <h2>Featured</h2><p className="p-1">This pick won't disappoint you</p>
                </div>
                <div className="flex justify-sb ai-c">
                    <div><i className="fa fa-angle-left fa-3x"></i> </div>
                    <div className="flex justify-sb ai-c w-100">
                        <Movies movies={this.props.featured}  className="mov-outer p-relative"/>
                    </div>
                    <div><i className="fa fa-angle-right fa-3x p-1"></i> </div>
                </div>
            </div>
        )
    }
}
export default Featured;