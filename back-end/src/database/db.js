import mongosse from 'mongoose'

mongosse.Promise = global.Promise
mongosse.connect('mongodb+srv://ADMIN:ADMIN@cluster0.db4xx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(() => {
    console.log('Connect with Database')
}).catch((err) => {
    console.error('Connect with Database: ' + err)
})

export default mongosse