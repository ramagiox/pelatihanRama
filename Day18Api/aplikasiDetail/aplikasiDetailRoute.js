let express = require('express');
let route = express.Router();
let aplikasiDetailController = require('./aplikasiDetailController.js');
//let route = ex.router();
//route.use(bodyParser.json());

route.get('/aplikasiDetail', function (req, res) {
    aplikasiDetailController.getAplikasiDetail(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    }, 1);
});

route.get('/aplikasiDetail/:id', function(req,res){
    aplikasiDetailController.getAplikasiDetailById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.post('/aplikasiDetail', function (req, res) {
    let gdg = req.body;
    aplikasiDetailController.createAplikasiDetail(gdg, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/aplikasiDetail/:id', function (req, res) {
    aplikasiDetailController.delAplikasiDetail(req.params.id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/aplikasiDetail/:id', function (req, res) {
    let gdgUpdate = req.body;
    aplikasiDetailController.upAplikasiDetail(req.params.id, gdgRinciUpdate, function (err, respon){
if(err) {
        throw err;

    };
    res.json(respon);
});
});

//route.delete()
module.exports = route;