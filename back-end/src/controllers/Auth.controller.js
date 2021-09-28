import AuthService from '../services/Auth.service.js'

async function login(req, res, next){
    try{
        let user = req.body
        if(!user.email || !user.password){
            throw new Error('Email and Password is required')
        }
        const token = await AuthService.login(user)
        res.status(200).send({token: token})
    }catch(err){
        next(err)
    }
}

export default {
    login
}