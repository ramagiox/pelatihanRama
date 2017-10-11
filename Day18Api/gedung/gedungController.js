Gedung = require('./gedungModel.js');

module.exports.getGedung=function (callback,limit){
    Gedung.find(callback).limit(limit);
}

module.exports.getGedungById=function(id,callback){
    Gedung.findById(id,callback);
}

module.exports.createGedung=function(gdg, callback){
    Gedung.create(gdg,callback);
}
module.exports.delGedung=function(id,callback){
    Gedung.findByIdAndRemove(id,callback);
}

module.exports.updateGedung=function(id,gdg,callback){
    Gedung.findByIdAndUpdate(id, gdg,callback);
}
