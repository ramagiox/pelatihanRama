AplikasiDetail = require('./aplikasiDetailModel.js');

module.exports.getAplikasiDetail=function (callback,limit){
    AplikasiDetail.find(callback).limit(limit);
}

module.exports.getAplikasiDetailById=function(id,callback){
    AplikasiDetail.findById(id,callback);
}

module.exports.createAplikasiDetail=function(adet, callback){
    AplikasiDetail.create(adet,callback);
}
module.exports.delAplikasiDetail=function(id,callback){
    AplikasiDetail.findByIdAndRemove(id,callback);
}

module.exports.updateAplikasiDetail=function(id,adet,callback){
    AplikasiDetail.findByIdAndUpdate(id, adet,callback);
}
