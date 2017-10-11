GedungRinci = require('./gedungRinciModel.js');

module.exports.getGedungRinci=function (callback,limit){
    GedungRinci.find(callback).limit(limit);
}

module.exports.getGedungRinciById=function(id,callback){
    GedungRinci.findById(id,callback);
}

module.exports.createGedungRinci=function(gdg, callback){
    GedungRinci.create(gdg,callback);
}
module.exports.delGedungRinci=function(id,callback){
    GedungRinci.findByIdAndRemove(id,callback);
}

module.exports.updateGedungRinci=function(id,gdg,callback){
    GedungRinci.findByIdAndUpdate(id, gdg,callback);
}
