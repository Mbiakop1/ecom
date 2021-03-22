import React from 'react';
import {auth, SignInWithGoogle } from "../../firebase/firebase.utils";

import FormInput from '../form-input/form-input.component';

import './sign-in.style.scss';
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password:""

        }
    }


    handleSubmit = async event =>{
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            

            this.setState({ email: "", password: "" });
        } catch (error) {
            console.log(error);
        }

    }
    
    handleChange = event => {
        const  { value, name } = event.target;
        this.setState( { [name]: value })
    }

    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account </h2>
            <span> Sign in with your email and password</span>
               
              <form  onSubmit={this.handleSubmit}>
               <FormInput label='email' name="email" handleChange={this.handleChange} type="email" value={this.state.email} required/>
            

               <FormInput label='password' handleChange={this.handleChange} name="password" type="password" value={this.state.password} required/>
               <div className='buttons'>
                  <CustomButton type='submit'> Sign in</CustomButton>
                  <CustomButton onClick={SignInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
               </div>

              </form>
             
            </div>
        )
    }
}

export default SignIn;