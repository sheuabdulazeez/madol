import React, { Component } from 'react';
class Header extends Component{
    

    avatarStyle = {
        borderRadius:"50%",
        width:"40px",
        height:"40px"
    }
    render(){
        return (
        <div> 
            <header>
                <nav className="desktop">
                    <div className="logo ">
                        <a href="/">MAYOL</a>
                    </div>
                    <ul className="nav-links flex w-50">
                        <li><a href="/" className="link active">Home</a></li>
                        <li><a href="/series" className="link">TV Series</a></li>
                        <li><a href="/movies" className="link">Movies</a></li>
                        <li><a href="/seasonal" className="link">Seasonal</a></li>
                    </ul>
                    <div id="search " className="">
                        <i className="fa fa-search"></i>
                    </div>
                    <div className="user ">
                        <div className="flex ai-c">
                            <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                style={this.avatarStyle} alt=""/>
                            <h4 className="p-1">Angelina Joe</h4>    
                        </div>
                    </div>
                </nav>
                <nav className="mobile">
                    <div className="flex justify-sb">
                        <div className="logo ">
                            <a href="/">MAYOL</a>
                        </div>
                        <div className="user ">
                            <div className="flex ai-c">
                                <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
                                    style={this.avatarStyle} alt=""/>
                            </div>
                        </div>
                    </div>
                    
                        <ul className="nav-links flex hide-scroll">
                            <li><a href="/" className="link active">Home</a></li>
                            <li><a href="/series" className="link">TV Series</a></li>
                            <li><a href="/movies" className="link">Movies</a></li>
                            <li><a href="/seasonal" className="link">Seasonal</a></li>
                        </ul>
                   
                
                </nav>
            </header>
        </div>

        )
        
    }

    
}

export default Header;