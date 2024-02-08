const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
     username: {
          type: String,
          required: [true, "Please add the user name"]
     },
     email: {
          type: String,
          required: [true, "Please add the user email address"],
          unique: [true, "Email address already taken"]
     },
     password: {
          type: String,
          required: [true, "Please add the user password"],
     }
}, {
     timestamps: true
})
// set toJSON method to not to return hashed password
userSchema.set('toJSON', {
     transform: (document, returnedDocument) => {
          returnedDocument.id = document._id.toString()
          delete returnedDocument._id
          delete returnedDocument.password
          delete returnedDocument.__v
     }
})


module.exports = mongoose.model('users', userSchema)