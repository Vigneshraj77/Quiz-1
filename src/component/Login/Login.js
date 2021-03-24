import React from 'react'
import './Login.css'
import Nav from '.././nav';
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie";
import Loader from '.././Loader'
import Home from ".././Home"
class Login extends React.Component {
   constructor(props) {
   super(props);  
  this.state = { email:"", password:"" }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.Load = this.Load.bind(this);
}
async handleSubmit(event) {
  event.preventDefault()
  const cookies = new Cookies();
  cookies.set("email", this.state.email[0]);
  cookies.set("password", this.state.password[0]);
  console.log(cookies.get("email"));
  const email = this.state.email
  const password = this.state.password
  this.Load();
 fetch('https://aqueous-waters-26248.herokuapp.com/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then((res) => res.json())
  .catch((error) =>
    console.error("Show me error that cannot be specify", error)
  )
  .then((response) => {
    console.log("Success:", response);
    if(response.success){
    localStorage.setItem("loggedin", true);
    localStorage.setItem("token", response.token);
    localStorage.setItem("name", response.name);
    return(<Home />);
  }
    else if(response.emailnotfound){
      alert("Email doesn't exist");
    }
   else if(response.passwordincorrect){
      alert('Password incorrect');
}
  });
}
Load(){
  return <Loader />;
}
 handleChange(event){
  this.setState({ [event.target.name] : event.target.value}) 
  }   
      render(){
        return (
          <div>
          <Nav />
        <div id="loginform">
         <FormHeader title="Login" />
         <div className="row">
        <input name="email" type="text" placeholder="email id" value={this.state.email} onChange={this.handleChange}/>
      </div> 
      <div className="row">
        <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange}/>
      </div>
              <div className="row">
         <button className="button-login button-1" onClick={this.handleSubmit}>LOGIN</button>
         </div>
         <div id="alternativeLogin">
        <div>New user? Then, Register </div>
      </div>
         <div className="row">
           <Link to="/register">
         <button className="button-login button-1"  >SignUp</button>
         </Link>
         </div>
          </div>
          </div>
        );
        }        
      }
    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );

    export default(Login);