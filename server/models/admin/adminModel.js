const mongoose = require('mongoose')

const Schema = mongoose.Schema

const adminSchema = new Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
adminSchema.statics.signup = async function(username, password){
    if(!username || !password){
        throw Error('All fields must be filled')
    }

    const admin = await this.create({
        username, password
    })

    return admin
}
adminSchema.statics.login = async function(username, password){
    if(!username || !password){
        throw Error('All fields must be filled')
    }

    const admin = await this.findOne({username})


    return admin
    
}
module.exports = mongoose.model('Admin', adminSchema)