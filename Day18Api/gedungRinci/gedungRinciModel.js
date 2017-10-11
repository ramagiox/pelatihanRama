let mong = require ('mongoose');

let gedungRinci=mong.Schema(
{
    KdGedung: {
        type: String,
        unique: true,
        require: true
    },
    KdKelas: String,
    NamaKelas: String,
    KapasitasKelas: Number,
    CreatedBy:String,
    CreatedDate:Date,
    ModdedBy:String,
    ModdedDate:Date
},
{
    collection:'GedungRinci'
}
);

let Gedung= module.exports=mong.model("GedungRinci", gedungRinci);
