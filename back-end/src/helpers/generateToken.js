import jwt from 'jsonwebtoken'

export default async function generateToken(id){
    const token = jwt.sign({id: id}, process.env.JWT_SECRET, {
        expiresIn: 864000
    })
    return token
}