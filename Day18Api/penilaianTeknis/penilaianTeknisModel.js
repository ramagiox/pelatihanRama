let mong = require('mongoose');

let penilaianTeknis = mong.Schema({
    KdPegawai: String,
	KdPeserta:String,
	Hari:String,
	Materi:String,
	Nilai:Number,
	CreatedBy:String,
    CreatedDate:Date,
    ModifiedBy:String,
    ModifiedDate:Date
});

let PenilaianTeknis = module.exports = mong.model("PenilaianTeknis", penilaianTeknis, "PenilaianTeknis");