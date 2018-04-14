var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var userModel=new mongoose.Schema({
    name:String,
    password:String
});
userModel.plugin(mongoosePaginate);
module.exports=mongoose.model('User',userModel);