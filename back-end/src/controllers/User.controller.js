import UserService from '../services/User.service.js'


async function index(req, res, next){
    try{
        const users = await UserService.showAllUsers()
        res.status(200).send(users)
    }catch(err){
        next(err)
    }
}

async function Store(req, res, next){
    try{
        let user = req.body

        if(!user.email || !user.password){
            throw new Error('Email and Password is required')
        }

        const response = await UserService.CreateUser(user)
        res.status(200).send(response)
    }catch(err){
        next(err)
    }
}

async function show(req, res, next){
    try{
        let id = req.id

        if(id.length !== 24){
            throw new Error('ID malformated')
        }

        const user = await UserService.showUser(id)
        res.status(200).send(user)
    }catch(err){
        next(err)
    }
}

async function update(req, res, next){
    try{
        let user = req.body
        let id = req.id
        user = await UserService.update(user, id)
        res.status(200).send(user)
    }catch(err){
        next(err)
    }
}

async function destroy(req, res, next){
    try{
        let id = req.id
        await UserService.destroy(id)
        res.status(200).send({user: 'Deleted'})
    }catch(err){
        next(err)
    }
}

export default {
    Store,
    index,
    show,
    update,
    destroy
}