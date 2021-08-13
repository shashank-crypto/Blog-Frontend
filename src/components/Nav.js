import React from 'react';
import {Link} from 'react-router-dom'
// import '../App.css' //Don't even need to import the css here

//user = Guest iff ifLogged = False
const Nav = ({user , ifLogged}) => {

  var message = <GetUser />

  if (ifLogged) message = <Link to="/profile"><UserLink image={user.img} name={user.fname}/></Link>

  return (
    <div className='Navigation'>
      <Link to="/"><h2>Logo</h2></Link>
      {message}
    </div>
)}

const GetUser = () => (
  <div style={{"display" : "flex","justifyContent": "space-evenly" , "width" : "15%"}}>
    <button className="SignUp">SignUp</button>
    <button className="Login">Login</button>
  </div>
)

const UserLink = (props) => (
  <div style={{"display" : "flex" , "alignItems" : "center"}}>
      <img style={{"width" : "50px" , "height" : "50px" , "margin": "5px"}} src={props.image} alt="user Profile"/>
    <span>Hey, {props.name}</span>
  </div>
)

export default Nav;