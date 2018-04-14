var mongoose = require('mongoose');
var Cate = require('../model/tree.model');

exports.create=function(req,res,next){
  var cate=new Cate(req.body);
  cate.save().then(data=>{
    res.json(data);
  });
};

exports.update=function(req,res,next){
  const id=req.params.id;
  Cate.findByIdAndUpdate(id,{$set:req.body},{new:false}).then(data=>{
    res.json(data);
  });
};

function rTree(data,pid){
  var result=[];
  var temp;
  var data=JSON.parse(JSON.stringify(data));
  for(var i in data){
    if(data[i].parentId===pid){
      result.push(data[i]);
      temp=rTree(data,data[i]._id);
      if(temp.length>0){
        data[i].children=temp;
      }
    }
  }
  return result;
};

exports.list=function(req,res,next){
  var type=req.params.type;
  Cate.find({type:type},function(err,data){
    var rpTree=rTree(data,null);
    res.json(rpTree);
  })
}