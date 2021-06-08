const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, required: true },
    userId:{type:String},
    createdDate: { type: Date, default: Date.now },
    role:{ type: String,default:'user', required: true },
    createTimeStamp:{type:Number},
    clientIp:{type:String}
});

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('UserAudit', schema);