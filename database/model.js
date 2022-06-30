const mongoose = require('mongoose');

const Users = mongoose.Schema({
    username: { type: String },
    password: { type: String},
    apikey: { type: String },
    defaultKey: { type: String },
}, { versionKey: false });
module.exports.User = mongoose.model('osis-data', Users);