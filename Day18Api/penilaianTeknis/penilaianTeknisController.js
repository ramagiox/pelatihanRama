PenilaianTeknis = require('./penilaianTeknisModel.js');

module.exports.getPenilaianTeknis = function(callback,limit){
    PenilaianTeknis.find(callback).limit(limit);
}

module.exports.getPenilaianTeknisById = function(_id,callback){
    PenilaianTeknis.findById(_id,callback);
}

module.exports.createPenilaianTeknis = function(akses,callback){
    PenilaianTeknis.create(akses,callback);
}

module.exports.deletePenilaianTeknis = function(id,callback){
    PenilaianTeknis.findByIdAndRemove(id,callback);
}

module.exports.updatePenilaianTeknis = function(id,akses,callback){
    PenilaianTeknis.findByIdAndUpdate(id,akses,callback);
}