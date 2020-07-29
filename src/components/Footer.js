import React, { Component } from 'react';

class Footer extends Component {
   
    render(){
        
        return(
            <React.Fragment>
               <footer>
                   <hr />
                   <div className="foot">
                        <div>
                            &copy; All rights reserved. <b>Sam (Designer)</b> | <b>Ayomadewale (Web Developer)</b>
                        </div>
                        <div className="flex ai-c justify-se">
                            <a href="/"><i className="fab fa-facebook"></i></a>
                            <a href="/"><i className="fab fa-instagram"></i></a>
                            <a href="/"><i className="fab fa-youtube"></i></a>
                            <a href="/"><i className="fab fa-twitter"></i></a>
                        </div>
                   </div>
               </footer>
            </React.Fragment>
        )
    }
}
export default Footer;