var mongoose = require('mongoose');
var materializedPlugin = require('mongoose-materialized');
var cateModel=new mongoose.Schema({
    text:String,
    type:Number
});
cateModel.plugin(materializedPlugin);
module.exports=mongoose.model('Cate',cateModel);