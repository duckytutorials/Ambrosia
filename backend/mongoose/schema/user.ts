const mongoose = require('mongoose');


const InboxSchema = new mongoose.Schema({
  whom: String,
  message: String,
  NotifID: String,
  date: Date
});


const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  inbox: [InboxSchema]
});

export default mongoose.model('User', UserSchema);