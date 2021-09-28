import GenerateToken from '../helpers/generateToken.js'
import AuthRepository from '../repositories/Auth.repository.js'
import bcrypt from 'bcrypt'

async function login(user){
    const userDB = await  AuthRepository.login(user)
    if(userDB){
        if(!await bcrypt.compare(user.password, userDB.password)){
            throw new Error('Password Invalid')
        }
        const token = await GenerateToken(userDB._id)
        return token
    }else{
        throw new Error('User not found')
    }
}


export default {
    login
}