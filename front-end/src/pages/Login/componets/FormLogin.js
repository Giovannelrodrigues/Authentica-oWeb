import React, {useState} from "react";
import Email from '../../../assets/Auth/email.svg'
import Lock from '../../../assets/Auth/lock.svg'
import { FormLoginStyled } from "../styled";
import EmailColor from '../../../assets/Auth/emailColor.svg'
import EmailError from '../../../assets/Auth/emailError.svg'
import lockError from '../../../assets/Auth/lockErro.svg'
import lockColor from '../../../assets/Auth/lockColor.svg'
import api from '../../../service/api'

export default function FormLogin({props}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState([])
    function ChangeIconColorEmail(e){
        const img = document.querySelector('.imgEmail')
        img.setAttribute('src', `${EmailColor}`)
    }
    function ChangeIconEmail(e){
        const img = document.querySelector('.imgEmail')
        img.setAttribute('src', `${Email}`)
    }
    function ChangeIconColorPassword(e){
        const img = document.querySelector('.imgPassword')
        img.setAttribute('src', `${lockColor}`)
    }
    function ChangeIconPassword(e){
        const img = document.querySelector('.imgPassword')
        img.setAttribute('src', `${Lock}`)
    }
    async function handleSubtmit(e){
        e.preventDefault()
            setErr('')
        const response = await api.post('/auth/login', {email, password})

        if(response.data.error){
            setErr(response.data.error)
        }else{
            const AUTH_TOKEN = 'Bearer ' + response.data.token
            api.defaults.headers.common['authorization'] = AUTH_TOKEN
            props.history.push('/')
        }

    }

    return (
        <div>
            <FormLoginStyled>
                <form action="" onSubmit={handleSubtmit}>
                    <div className={err === 'User not found' || (err === 'Email and Password is required' && email === '') ? 'erro': ''}>
                        {err === 'User not found' || (err === 'Email and Password is required' && email === '') ? <img src={EmailError} alt="" className="imgEmail"/> : <img src={Email} alt="" className="imgEmail"/>}
                        <input
                        type="email"
                        placeholder="Your Email"
                        onFocus={ChangeIconColorEmail}
                        onBlur={ChangeIconEmail}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        />
                    </div>
                    <div className="erro__text">
                            {err === 'User not found'? err: ''}
                            {err === 'Email and Password is required' && email === ''? 'Email is required': '' }
                    </div>
                    
                    <div className={err === 'Password Invalid' || (err === 'Email and Password is required' && password === '')? 'erro': ''}>
                        {err === 'Password Invalid' || (err === 'Email and Password is required' && password === '')? <img src={lockError} alt="" className="imgPassword"/>: <img src={Lock} alt="" className="imgPassword"/>}
                        
                        <input
                        type="password"
                        placeholder="Your Password"
                        onFocus={ChangeIconColorPassword}
                        onBlur={ChangeIconPassword}
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        />
                    </div>
                    <div className="erro__text">
                        {err === 'Password Invalid'? err : ''}
                        {err === 'Email and Password is required' && password === '' ? 'Password is required': '' }
                    </div>

                    <button type="submit">Sing in</button>
                </form>
            </FormLoginStyled>
        </div>
    )
}