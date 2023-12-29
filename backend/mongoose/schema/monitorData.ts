const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
  ping: Number,
  status: Boolean,
  date: Date
});


const MonitorSchema = new mongoose.Schema({
  name: String,
  node: String,
  belongs: String,
  status: [StatusSchema]
}); 

export default mongoose.model('Monitor', MonitorSchema);