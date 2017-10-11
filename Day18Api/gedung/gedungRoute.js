let express = require('express');
let route = express.Router();
let gedungController = require('./gedungController.js');
//let route = ex.router();
//route.use(bodyParser.json());

route.get('/gedung', function (req, res) {
    gedungController.getGedung(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    }, 1);
});

route.get('/gedung/:id', function(req,res){
    gedungController.getGedungById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.post('/gedung', function (req, res) {
    let gdg = req.body;
    gedungController.createGedung(gdg, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/gedung/:id', function (req, res) {
    gedungController.delGedung(req.params.id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/gedung/:id', function (req, res) {
    let gdgUpdate = req.body;
    gedungController.upGedung(req.params.id, gdgUpdate, function (err, respon){
if(err) {
        throw err;

    };
    res.json(respon);
});
});

//route.delete()
module.exports = route;