import React from 'react'
import './Signup.css'
import Nav from '../nav';
import { Container } from 'react-grid-system';
import { Link } from 'react-router-dom';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name:"",email:"", password:"" }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
   
  
  async handleSubmit(event) {
    event.preventDefault()
    const email = this.state.email
    const password = this.state.password
    const name = this.state.name
   fetch('https://aqueous-waters-26248.herokuapp.com/api/users/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        name
      })
    }).then((res) => res.json())
    .catch((error) =>
      console.error("Show me error that cannot be specify", error)
    )
    .then((response) => {
      console.log("Success:", response);
      if(response.success){
      alert("Logged in")
      localStorage.setItem("loggedin", true);
      localStorage.setItem("token", response.token);
      alert(response.name)
      localStorage.setItem("name", response.name);
    }
      else if(response.emailnotfound){
        alert("Email doesn't exist");
      }
     else if(response.passwordincorrect){
        alert('Password incorrect');
  }  
    });
  }
   handleChange(event){
    this.setState({ [event.target.name] : event.target.value}) 
    }   
        render(){
          return (
            <div>
            <Nav />
            <Container>
          <div id="loginform">
           <FormHeader title="SignUp" />
           <div className="row">
          <input name="name" type="text" placeholder="user name" value={this.state.name} onChange={this.handleChange} required/>
        </div>
           <div className="row">
          <input name="email" type="text" placeholder="email id" value={this.state.email} onChange={this.handleChange} required/>
        </div> 
        <div className="row">
          <input name="password" type="password" placeholder="password" value={this.state.password} onChange={this.handleChange} required/>
        </div>
        
                <div className="row">
           <button className="button-login button-1" onClick={this.handleSubmit}>register</button>
           </div>
           <div class="col-md-2">
           <div id="alternativeLogin">
          <div>Already an user? Then, Login </div>
        </div>
           <div className="row">
             <Link to="/login">
           <button className="button-login button-1" >Login</button>
           </Link>
           </div>
           </div>
            </div>
            </Container>
            </div>
          );
          }        
        }

      const FormHeader = props => (
          <h2 id="headerTitle">{props.title}</h2>
      );

    export default(Signup);