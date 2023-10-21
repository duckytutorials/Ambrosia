const mongoose = require('mongoose');

const uptime_array = new mongoose.Schema(
      [
        {
          name: String,
          timestamp: Number,
          status: String,
          ping: Number
        },
      ]
);

module.exports = uptime_array