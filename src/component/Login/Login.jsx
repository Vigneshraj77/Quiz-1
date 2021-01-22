import React from 'react'
import './Login.css'

class Login extends React.Component {
      render() {
        return (
            <div id="loginform">
            <FormHeader title="Login" />
            <Form />
          </div>
        )
      }
    }
    
    const FormHeader = props => (
        <h2 id="headerTitle">{props.title}</h2>
    );
    
    
    const Form = props => (
       <div >
         <FormInput placeholder="EMAIL"  type="text" />
         <FormInput placeholder="PASSWORD"  type="password"/>
         <FormButton title="LogIn" />
         <OtherMethods />
         <FormButton title="SignUp"/>
       </div>
    );
    
    const FormButton = props => (
      <div  class="row">
        <div class="button-login button-1">
        {props.title}
        </div>
      </div>
    );
    
    const FormInput = props => (
      <div class="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder}/>
      </div>  
    );
    
    const OtherMethods = props => (
      <div id="alternativeLogin">
        <label>New user? Then, Register </label>
      </div>
    );
    export default(Login);