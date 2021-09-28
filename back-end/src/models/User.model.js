import mongoose from "../database/db.js";
import bcrypt from 'bcrypt'

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    } 
})

UserSchema.pre('save', async function(){
    this.password = await bcrypt.hash(this.password, 10)
})


export default mongoose.model('User', UserSchema)