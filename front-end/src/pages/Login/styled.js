import styled from 'styled-components'

export const ContainerLogin = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 120px;
    img {
        width: 72px;
        height: 72px;
    }
    h1{
        color: #223263;
        margin-top: 1.3rem;
        font-size: 1.3rem;
        text-align: center;
    }
    span {
        font-size: 0.9rem;
        color: #9098B1;
        margin-top: 0.7rem;
        margin-bottom: 1rem;
    }
    a {
        margin-top: 1rem;
        text-decoration: none;
        color: #40BFFF;
    }
    a:hover{
        text-decoration: underline;
    }
`


export const FormLoginStyled = styled.div`
    max-width: 450px;
    width: 100%;
    form div{
        display: flex;
        align-items: center;
        position: relative;
    }

    form div.error__message {
        color: red;
        display: flex;
        justify-content: center;
    }


    form div img{
        width: 30px;
        height: auto;
        position: absolute;
        border-radius: 2px;
        margin: 20px 20px 20px 25px;
    }

    form div input {
        height: 30px;
        width: 100%;
        outline: none;
        margin: 10px 20px;
        border: 2px transparent solid;
        border-radius: 4px;
        padding-left: 40px;
        color: #40BFFF;
        font-size: 1rem;
        transition: all .2s;
    }

    form div input:focus{
        border: 2px solid #40BFFF;
    }

    form div input:focus::placeholder{
        color: #40BFFF;
    }

    form div input::placeholder{
        color: #9098B1;
        font-size: 1rem;
    }
    button{
        background-color: #40BFFF;
        color: #fff;
        font-size: 1.3rem;
        outline: none;
        border: none;
        border-radius: 6px;
        width: 100%;
        margin-top: 1rem;
        padding: 15px 0px;
    }

    form div.erro input{
        border: red 2px solid;
        color:  red;
    }

    .erro__text{
        color: red;
        font-size: 0.8rem;
        margin-left: 20px;
    }
    
`