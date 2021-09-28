import jwt from "jsonwebtoken"

export default async (req, res, next) => {
    const AuthHeader = req.headers.authorization

    if(!AuthHeader){
        return res.status(403).send({error: 'No token provide'})
    }

    const parts = AuthHeader.split(' ')
    if(!parts.length === 2){
        return res.status(403).send({error: 'Token malformated'})
    }

    const [schema, token] = parts

    if(schema !== 'Bearer'){
        return res.status(403).send({error: 'Token malformated'})
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
        if(err){
            return res.status(403).send({error: 'Token invalid'})
        }
        req.id = decode.id
        return next()
    })
}