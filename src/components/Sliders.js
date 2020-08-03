import React, { Component } from 'react';

class Sliders extends Component {
    urls = this.props.sliders.urls;
    titles = this.props.sliders.title;
    render(){
        
        return(
            <div>
                <div className="outer-layer">
                    <img src={this.urls[0]} 
                    alt="" width="100%" height="100%"/>
                     <div className="inner-layer row">
                        <div className="details col-sm-12 col-lg-6">
                            <div>
                                <h1>{this.titles[0]}</h1>
                                <h3>{this.titles[1]}</h3>
                            </div>
                            <div>
                                <div>Action | <s>X X X X X</s> | 2020</div>
                                <p>
                                    The Rock seizes the opportunity of a lifetime when 
                                    she lands a job with the world's most powerful 
                                    technology and social media company.
                                </p>
                            </div>
                            <div>
                                <a href="/watch" className="watch-link"><i className="fa fa-play-circle"></i> Watch Now</a>
                            </div>
                        </div>

                     </div>
                </div>
            </div>
        )
    }
}

export default Sliders;