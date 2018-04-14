var mongoose = require('mongoose');
var User = require('../model/uesr.model');

exports.create=function(req,res,next){
  var uesr=new User(req.body);
  uesr.save().then(data=>{
    res.json(data);
  });
};