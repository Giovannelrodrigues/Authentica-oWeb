import UserRouter from './routes/User.router.js'
import AuthRouter from './routes/Auth.router.js'
import bodyParser from 'body-parser'
import express from 'express'
import env from 'dotenv'
import cors from 'cors'
const app = express()
env.config()

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())


app.use('/auth', AuthRouter)
app.use('/users', UserRouter)

app.use((err, req, res, next) => {
    if(err){
        res.status(200).send({error: `${err.message}`})
    }
    next()
})

app.listen(process.env.PORT, () => {
    console.log('Server Running on port: ' + process.env.PORT)
})