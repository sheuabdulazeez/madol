import React, { Component } from 'react';

class CommingSoon extends Component {
   
    render(){
        
        return(
            <div className="mt-6">
               <h2 className="pb-4 text-center">COMING SOON</h2>
               <div className="row">
                   <div className="col-sm-12 col-lg-6 mb-5">
                        <img src="https://image-cdn.essentiallysports.com/wp-content/uploads/20200626165844/Untitled-design-1-2-1600x900.jpg" 
                        alt="" width="100%" height="500px"/>
                    </div>
                    <div className="col-sm-12 col-lg-6">
                            <div className="mb-6">
                                <h1>MONEY HEIST</h1>
                                <p className="grey">1hr 59min   Action,Adventure,Stealing   May 18, 2020 (SPAIN)</p>
                            </div>
                            <p className="pb-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque, 
                            ut ducimus corporis temporibus eveniet similique ea ad fugiat, saepe 
                            reiciendis iste obcaecati praesentium hic recusandae. Labore harum a eius?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque, 
                            </p>
                            <p className="pb-4"><b>Director:</b> David  Leitch</p>
                            <p className="pb-4"><b>Writer:</b> Rhett Reese, Paul Wernick</p>
                            <p  className="pb-4"><b>Stars:</b> Ryan Reynolds, Josh Brolin, Morena  Baccarin</p>

                            <div className="mb-6  pt-4">
                                <a href="/"  className="watch-link">ADD TO WATCHLIST</a>
                            </div>
                    </div>
                </div>
               
            </div>
        )
    }
}
export default CommingSoon;