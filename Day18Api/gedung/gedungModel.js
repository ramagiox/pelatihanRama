let mong = require ('mongoose');

let gedung=mong.Schema(
{
    KdGedung: {
        type: String,
        unique: true,
        require: true
    },
    NamaGedung: String,
    NomorGedung: Number,
    KdProvinsi: String,
    KdKota: String,
    KdKec: String,
    StatusGedung:String,
    CreatedBy:String,
    CreatedDate:Date,
    ModdedBy:String,
    ModdedDate:Date
},
{
    collection:'Gedung'
}
);

let Gedung= module.exports=mong.model("Gedung", gedung);
