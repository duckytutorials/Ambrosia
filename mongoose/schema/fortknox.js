const mongoose = require('mongoose');

const fortknox = new mongoose.Schema(
      [
        {
         secret: String
        },
      ]
);

const fortknoxs = mongoose.model('fortknox', fortknox);

module.exports = fortknoxs