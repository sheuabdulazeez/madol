import React, { Component } from 'react';
import  {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

// Components
import Header from './components/Header'
import Sliders from './components/Sliders'
import Featured from './components/Featured'
import NewArrival from './components/NewArrival'
import Footer from './components/Footer'
import CommingSoon from './components/CommingSoon'
import Categories from './components/Categories'


class App extends Component {

  madol = {
    home:{
      slider:{
        urls:[
          "https://image-cdn.essentiallysports.com/wp-content/uploads/20200626165844/Untitled-design-1-2-1600x900.jpg"
        ],
        title: [
          "Avengers",
          "END GAME"
        ],
      },
      featured:[
          {
            id:1,
            img: 'https://www.screengeek.net/wp-content/uploads/2019/08/terminator-dark-fate.jpg',
            title: "Terminator"
          },
          {
            id:2,
            img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
            title: "Time"
          },
          {
            id:3,
            img: 'https://www.screengeek.net/wp-content/uploads/2018/12/venom-movie.jpg',
            title: "Venom"
          },
          {
            id:2,
            img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
            title: "Time"
          },
          {
            id:3,
            img: 'https://www.screengeek.net/wp-content/uploads/2018/12/venom-movie.jpg',
            title: "Venom"
          }   
      ],
      newarrival:[
        {
          id:1,
          img: 'https://image.tmdb.org/t/p/w500/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg',
          title: "Hacker"
        },
        {
          id:2,
          img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
          title: "Time"
        },
        {
          id:3,
          img: 'https://www.screengeek.net/wp-content/uploads/2018/12/venom-movie.jpg',
          title: "Venom"
        },
        {
          id:4,
          img: 'https://image.tmdb.org/t/p/w500/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg',
          title: "Hacker"
        },
        {
          id:5,
          img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
          title: "Time"
        },
        {
          id:6,
          img: 'https://www.screengeek.net/wp-content/uploads/2018/12/venom-movie.jpg',
          title: "Venom"
        }  
    ],
            
    },
    series:{
      slider:{
        urls:[
          "https://images.justwatch.com/backdrop/10573937/s1440/the-dark-tower",
          "https://www.joblo.com/newsimages1/avengers-infinity-war-main.jpg"
        ],
        title: [
          "Dark Tower",
          ""
        ]
      },
      all:[
        {
          id:1,
          img: 'https://image.tmdb.org/t/p/w500/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg',
          title: "Hacker"
        },
        {
          id:2,
          img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
          title: "Time"
        },
        {
          id:3,
          img: 'https://www.screengeek.net/wp-content/uploads/2018/12/venom-movie.jpg',
          title: "Venom"
        },
        {
          id:4,
          img: 'https://image.tmdb.org/t/p/w500/sJKcpT5LRuCdGpWm29yH2bMWqT0.jpg',
          title: "Hacker"
        },
        {
          id:5,
          img: 'https://upload.wikimedia.org/wikipedia/en/f/fe/1917_%282019%29_Film_Poster.jpeg',
          title: "Time"
        },
        {
          id:6,
          img: 'https://www.screengeek.net/wp-content/uploads/2018/12/venom-movie.jpg',
          title: "Venom"
        }  
    ],      
    }
  }

  render(){
    console.log(typeof this.madol.home.featured)
    return (
     <div>
       <Router>
         <Header />
         <Route exact path="/" render={props => (
           <React.Fragment>
             <Sliders sliders={this.madol.home.slider}/>
            <main>
              <Featured featured={this.madol.home.featured} />
              <NewArrival newarrival={this.madol.home.newarrival}/>
              <CommingSoon />
            </main>
           </React.Fragment>
         )}/>
           
         
       <Route path="/series" render={props => ( 
         <React.Fragment>
            <Sliders sliders={this.madol.series.slider}/>
            <main>
                <Categories movies={this.madol.series.all}/>
            </main>
         </React.Fragment>
        )}/>
         
     
       <Route path="/watch" render={props=>(
         <React.Fragment>
           <Sliders sliders={this.madol.series.slider}/>
          <main>
              
          </main>
         </React.Fragment>  
       )}/>

       <Footer />

       </Router>
       
     </div>
    
  );
  }
  
}

export default App;
