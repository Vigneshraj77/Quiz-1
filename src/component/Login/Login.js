import React from 'react'
import './Login.css'

class Login extends React.Component {
   constructor(props) {
   super(props);  
  this.state = { email:"", password:"" }
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleChange = this.handleChange.bind(this);
}
 

async handleSubmit(event) {
  event.preventDefault()
  const email = this.state.email
  const password = this.state.password
alert(password);
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
alert("Logged in")
    localStorage.setItem("loggedin", true);
    localStorage.setItem("token", response.token);
    localStorage.setItem("compname", response.name);
  });
}
 handleChange(event){
  this.setState({ [event.target.name] : event.target.value}) 
  }   
      render(){
        return (
        <div id="loginform">
         <FormHeader title="Login" />
         <div className="row">
        <input name="email" type="text" placeholder="EMAIL ID" value={this.state.email} onChange={this.handleChange}/>
      </div> 
      <div className="row">
        <input name="password" type="password" placeholder="PASSWORD" value={this.state.password} onChange={this.handleChange}/>
      </div>
              <div className="row">
         <button className="button-login button-1" onClick={this.handleSubmit}>LOGIN</button>
         </div>
         <OtherMethods />
         <FormButton title="SignUp" />
          </div>
        );
        }        
      }


     
    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );

    const FormButton = props => (
      <div  className="row">
        <div className="button-login button-1" >
        {props.title}
        </div>
      </div>
    );

    
    const OtherMethods = props => (
      <div id="alternativeLogin">
        <label>New user? Then, Register </label>
      </div>
    );
    export default(Login);