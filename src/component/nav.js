
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
    } 
  
 function CheckLogin(props) {
    
    const loggedin = props.loggedin;
    const name = props.name;
    return (
      <div>
        {loggedin === "false" && 
        <div className="navigation">
      <a className="navigation__link" href="/login">LOGIN</a>
      <a className="navigation__link" href="/register">SIGNUP</a>
      </div>
}
{loggedin === "true" &&
        <div className="navigation">
          <h3>{name}</h3>
      <button className="navigation__link" onClick={handleLogout}>LOGOUT</button>

      </div>
}
      </div>
    );
  }

   return(
   
      <div>
      <nav className="navigation">
          <Logo />
          <div>
        <CheckLogin loggedin={this.state.loggedin} name={this.state.name} />
          </div>

      </nav>
  </div>
   
   )}
};
export default (Nav);