const mongoose = require(`mongoose`);

let usersSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: Number, required: true },
  },
  {
    collection: `users`,
  }
);

module.exports = mongoose.model(`users`, usersSchema);
