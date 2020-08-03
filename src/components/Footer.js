import React, { Component } from 'react';

class Footer extends Component {
   
    render(){
        
        return(
            <React.Fragment>
               <footer>
                  
                   <div className="foot row">
                        <p className="col-lg-6">
                            &copy; All rights reserved. <b>Sam (Designer)</b> | <b>Ayomadewale (Web Developer)</b>
                        </p>
                        <div className="flex ai-c justify-se col-lg-6">
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