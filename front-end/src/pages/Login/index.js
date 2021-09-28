import React from "react";
import Logo from '../../assets/Auth/logo.svg'
import FormLogin from "./componets/FormLogin";
import { ContainerLogin } from './styled.js'

export default function Login(props){
    return ( 
        <ContainerLogin>
            <img src={Logo} alt="" />
            <h1>Welcome to MyEcommerce</h1>
            <span>Sign to Continue</span>
            <FormLogin props={props}/>
            <a href="/">forgot password?</a>
            <p>Don't have a accouts ? <a href="/register">Register</a></p>
        </ContainerLogin>
    )
}