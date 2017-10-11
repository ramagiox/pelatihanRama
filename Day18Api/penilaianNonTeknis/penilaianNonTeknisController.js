PenilaianNonTeknis = require('./penilaianNonTeknisModel.js');

module.exports.getPenilaianNonTeknis = function(callback,limit){
    PenilaianNonTeknis.find(callback).limit(limit);
}

module.exports.getPenilaianNonTeknisById = function(_id,callback){
    PenilaianNonTeknis.findById(_id,callback);
}

module.exports.createPenilaianNonTeknis = function(akses,callback){
    PenilaianNonTeknis.create(akses,callback);
}

module.exports.deletePenilaianNonTeknis = function(id,callback){
    PenilaianNonTeknis.findByIdAndRemove(id,callback);
}

module.exports.updatePenilaianNonTeknis = function(id,akses,callback){
    PenilaianNonTeknis.findByIdAndUpdate(id,akses,callback);
}