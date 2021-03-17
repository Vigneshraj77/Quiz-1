

import React from 'react';
import Logo from './Logo';
import "./nav.css"
  
class Nav extends React.Component{
    constructor(props) {
        super(props);
    this.state={    show: false,
        loggedin: localStorage.getItem("loggedin"),
        name: localStorage.getItem("name"),
      }; 
     
    }
      
      
render(){
    console.log(localStorage.getItem("name"))
    if (localStorage.getItem("loggedin") == null) {
        localStorage.setItem("loggedin", false);
      }
  
      if (localStorage.getItem("name") == null) {
        localStorage.setItem("name", "");
      }
      function handleLogout(){
        localStorage.clear("loggedin");
        localStorage.setItem("loggedin", false);
        window.location.reload();
    } 
  
    function CheckLogin(props) {
    
      const loggedin = props.loggedin;
      const name = props.name;
      return (
        <div>
          {loggedin === "false" && 
           <nav className="navigation">
           <Logo />
           <div >
        <a className="navigation__link" href="/login">LOGIN</a>
        <a className="navigation__link" href="/register">SIGNUP</a>
        </div>
        </nav>
    }
      
  {loggedin === "true" &&
          <nav className="navigation">
          <Logo />
          
          <div >
          <a style={{ paddingRight:"15px",textTransform:"uppercase",fontSize:"20px"}}>{name}</a>
       <button style={{marginTop:"15px"}} className="button-nav  button-1" onClick={handleLogout}>LOGOUT</button>
       </div>
       </nav>
        
  
        
  }
        </div>
      );
    }
  
     return(
     
        <div>
       
          <CheckLogin loggedin={this.state.loggedin} name={this.state.name} />
            </div>

     
     )}
  };
  export default (Nav);