let mong = require('mongoose');

let penilaianNonTeknis = mong.Schema({
    KdPegawai: String,
	KdPeserta:String,
	Minggu:String,
	TipePenilaian:String,
	Nilai:Number,
	CreatedBy:String,
    CreatedDate:Date,
    ModifiedBy:String,
    ModifiedDate:Date
});

let PenilaianNonTeknis = module.exports = mong.model("PenilaianNonTeknis", penilaianNonTeknis, "PenilaianNonTeknis");