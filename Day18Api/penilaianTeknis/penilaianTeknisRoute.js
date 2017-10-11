let ex = require('express');
let route = ex.Router();
let penilaianTeknisController = require('./penilaianTeknisController.js')

route.get('/penilaianteknis', function (req, res) {
    penilaianTeknisController.getPenilaianTeknis(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.get('/penilaianteknis/:_id', function (req, res) {
    let id = req.params._id;
    penilaianTeknisController.getPenilaianTeknisById(id,function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.post('/penilaianteknis', function (req, res) {
    let akses = req.body;
    penilaianTeknisController.createPenilaianTeknis(akses, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/penilaianteknis/:_id', function (req, res) {

    penilaianTeknisController.deletePenilaianTeknis(req.params._id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/penilaianteknis/:_id', function (req, res) {
    let penilaianteknis = req.body;
    penilaianTeknisController.updatePenilaianTeknis(req.params._id,penilaianteknis, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

module.exports = route;