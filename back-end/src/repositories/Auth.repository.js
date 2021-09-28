import User from '../models/User.model.js'

async function login(user){
    const userDB = await User.findOne({email: user.email})
    if(userDB){
        return userDB
    }else{
        throw new Error('User not found')
    }
}

export default {
    login
}