PenilaianAkhir = require('./penilaianAkhirModel.js');

module.exports.getPenilaianAkhir = function(callback,limit){
    PenilaianAkhir.find(callback).limit(limit);
}

module.exports.getPenilaianAkhirById = function(_id,callback){
    PenilaianAkhir.findById(_id,callback);
}

module.exports.createPenilaianAkhir = function(akses,callback){
    PenilaianAkhir.create(akses,callback);
}

module.exports.deletePenilaianAkhir = function(id,callback){
    PenilaianAkhir.findByIdAndRemove(id,callback);
}

module.exports.updatePenilaianAkhir = function(id,akses,callback){
    PenilaianAkhir.findByIdAndUpdate(id,akses,callback);
}