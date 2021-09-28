import User from '../models/User.model.js'

async function find(){
    return User.find()
}

async function findOne(id){
    const user = await User.findOne({_id: id})
    if(!user){
        throw new Error('User not found')
    }else{
        return user
    }
}
async function insertUser(user){
    if(!await User.findOne({email: user.email})){
        const newUser ={
            email: user.email,
            password: user.password,
            role: 'user'
        }

        return await User.create(newUser)
    }else{
        throw new Error('Email already exists')
    }
}

async function update(user, id){
    let userDB = await User.findById(id)
    if(!userDB){
        throw new Error('User not found')
    }else{
        if(user.email !== userDB.email){
            if(!await User.findOne({email: user.email})){
                userDB.email = user.email
            }else{
                throw new Error('Email already exists')
            }
        }
        await userDB.save()
        return userDB
    }
}

async function deleteOne(id){
    await User.findByIdAndDelete(id)
}

export default {
    insertUser,
    find,
    findOne,
    update,
    deleteOne
}