let mong = require ('mongoose');

let aplikasiDetail=mong.Schema(
{
    KdAplikasi: {
        type: String,
        unique: true,
        require: true
    },
    NamaAplikasi: String,
    TabelAplikasi: String,
    CreatedBy:String,
    CreatedDate:Date,
    ModdedBy:String,
    ModdedDate:Date
},
{
    collection:'AplikasiDetail'
}
);

let AplikasiDetail= module.exports=mong.model("AplikasiDetail", aplikasiDetail);
