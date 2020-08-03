import React, { Component } from 'react';
import Movies from './Movies';

class Featured extends Component {


    render(){
        var left = 0;
        var scrollLeft = () => {      
                var box = document.querySelector("#box");
                left-=100;
                box.scroll({
                left: left,
                behavior: 'smooth'
            });
        }
        var scrollRight = () => {      
            var box = document.querySelector("#box");
            left+=100;
            box.scroll({
            left: left,
            behavior: 'smooth'
        });
        }
        return(
            <div className="pb-6 pt-6">
                <div className="heading row ai-c pb-4">
                    <h2 className="col-sm-12 col-md-3 col-lg-3">Featured</h2>
                    <p className="col-sm-12 col-md-3 col-lg-3">This pick won't disappoint you</p>
                </div>
                <div className="row justify-sb ai-c">
                    <div onClick={scrollLeft}><i className="fa fa-angle-left fa-3x"></i> </div>
                    <div className="flex justify-sb ai-c col-10 overflow-auto hide-scroll" id="box">
                        <Movies movies={this.props.featured}  className="mov-outer p-relative col-sm-12 col-xs-12 col-lg-4"/>
                    </div>
                    <div onClick={scrollRight}><i className="fa fa-angle-right fa-3x p-1"></i> </div>
                </div>
            </div>
        )
    }
}
export default Featured;