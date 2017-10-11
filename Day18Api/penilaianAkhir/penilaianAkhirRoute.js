let ex = require('express');
let route = ex.Router();
let penilaianAkhirController = require('./penilaianAkhirController.js')

route.get('/penilaianakhir', function (req, res) {
    penilaianAkhirController.getPenilaianAkhir(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penilaianakhir/:_id', function (req, res) {
    let id = req.params._id;
    penilaianAkhirController.getPenilaianAkhirById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/penilaianakhir', function (req, res) {
    let akses = req.body;
    penilaianAkhirController.createPenilaianAkhir(akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penilaianakhir/:_id', function (req, res) {

    penilaianAkhirController.deletePenilaianAkhir(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penilaianakhir/:_id', function (req, res) {
    let penilaianakhir = req.body;
    penilaianAkhirController.updatePenilaianAkhir(req.params._id,penilaianakhir, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;