import React, { Component } from 'react';
import Movies from './Movies';

class Featured extends Component {


    render(){
        var left = 0;
        var scrollLeft = () => {      
                var box = document.querySelector("#box");
                if(left > 0){left-=100};
                box.scroll({
                left: left,
                behavior: 'smooth'
            });
        }
        var scrollRight = () => {      
            var box = document.querySelector("#box");
            if(left < box.scrollWidth){left+=100};
            box.scroll({
            left: left,
            behavior: 'smooth'
        });
        }
        return(
            <div className="pb-6 pt-6">
                <div className="heading row ai-c pb-4">
                    <h2 className="col-sm-12 col-md-3 col-lg-3">Featured</h2>
                    <p className="col-sm-12 col-md-3 col-lg-5">This pick won't disappoint you</p>
                </div>
                <div className="row justify-sb ai-c">
                    <div onClick={scrollLeft}><i className="fa fa-angle-left fa-2x"></i> </div>
                    <div className="flex justify-sb ai-c col-10 overflow-auto hide-scroll" width="100%" id="box">
                        <Movies movies={this.props.featured} imgWidth="340px" className="mov-outer p-relative mr-5"/>
                    </div>
                    <div onClick={scrollRight}><i className="fa fa-angle-right fa-2x p-1"></i> </div>
                </div>
            </div>
        )
    }
}
export default Featured;