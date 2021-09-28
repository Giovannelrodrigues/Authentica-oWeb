import UserRepository from "../repositories/User.repository.js"
import GenerateToken from '../helpers/generateToken.js'

async function showAllUsers(){
    const usersDB = await UserRepository.find()
    usersDB.map(user => user.password = undefined)
    return usersDB
}


async function CreateUser(user){
    const userDB = await UserRepository.insertUser(user)
    const token = await GenerateToken(userDB._id)
    userDB.password = undefined
    return {user: userDB, token: token}
    
}

async function showUser(id){
    const userDB = await UserRepository.findOne(id)
    userDB.password = undefined
    return userDB
}

async function update(user, id){
    const userDB = await UserRepository.update(user, id)
    userDB.password = undefined
    return userDB
}

async function destroy(id){
    return await UserRepository.deleteOne(id)
}


export default {
    CreateUser,
    showAllUsers,
    showUser,
    update,
    destroy
}