const mongoose = require(`mongoose`)

let adminsSchema = new mongoose.Schema(
   {
        adminId: {type: String, required: true},
        firstName: {type: String, required: true},
        surname: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: Number, required: true}
   },
   {
       collection: `admins`
   })

module.exports = mongoose.model(`admins`, adminsSchema)