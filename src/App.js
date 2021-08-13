import Nav from './components/Nav' ;
import Profile from './components/Profile'
import Post from './components/Post'
import React from "react"
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'
import './App.css' ;

function App() {

  const User = {
    username : "guest_login",
    img : "https://cdn.onlinewebfonts.com/svg/img_83486.png",
    fname : "Guest",
    lname : "One",
    follows : {
      follower : {
        followerId : [],
        count : "98"//{`${this.followerId.length}`}
      },
      following : {
        followingId :[],
        count : "36"
      }
    },
    posts : {
      postId :[],
      count : "12",
      viewsTotal : "134"
    }
  }

  const Posts ={
    author : "Shashank",
    header : "How to Get started with reactJs ?",
    img : {
      src : ["https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.07BktFoI6H5BX-VMUqnwlQHaEU%26pid%3DApi&f=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.GW7WNcM79xlwkI0zPah1TwHaE8%26pid%3DApi&f=1","https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cjajaTB8By4maimMRBUjfgHaD4%26pid%3DApi&f=1"]
    },
    likes : "20023",
    comments : {
      count : "36",
      comment : {
        text : "It was an amazing post",
        date : Date.now()
      }
    }
  }

  return (
    <Router>
      <div className="App">
        <Nav user={User} ifLogged={true}/>
        <Switch>
          <Route path="/" exact><Post post={Posts} /></Route>
          <Route path="/profile"><Profile user={User}/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App ;
