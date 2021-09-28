import React from "react";
import Logo from '../../assets/Auth/logo.svg'
import FormLogin from "./components/FormLogin";
import { ContainerLogin } from './styled.js'

export default function Login(props){
    return ( 
        <ContainerLogin>
            <img src={Logo} alt="" />
            <h1>Welcome to MyEcommerce</h1>
            <span>Resgister to Continue</span>
            <FormLogin props={props}/>
            <p>Does have a accouts? <a href="/login">Sing in</a></p>
        </ContainerLogin>
    )
}