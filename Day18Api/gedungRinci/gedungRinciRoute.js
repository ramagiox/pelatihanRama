let express = require('express');
let route = express.Router();
let gedungRinciController = require('./gedungRinciController.js');
//let route = ex.router();
//route.use(bodyParser.json());

route.get('/gedungRinci', function (req, res) {
    gedungRinciController.getGedungRinci(function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    }, 1);
});

route.get('/gedungRinci/:id', function(req,res){
    gedungRinciController.getGedungRinciById(req.params.id, function(err,respon){
        if(err){
            throw err;
        };
        res.json(respon);
    });
});

route.post('/gedungRinci', function (req, res) {
    let gdg = req.body;
    gedungRinciController.createGedungRinci(gdg, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.delete('/gedungRinci/:id', function (req, res) {
    gedungRinciController.delGedungRinci(req.params.id, function (err, respon) {
        if (err) {
            throw err;
        }
        res.json(respon);
    });
});

route.put('/gedungRinci/:id', function (req, res) {
    let gdgUpdate = req.body;
    gedungRinciController.upGedungRinci(req.params.id, gdgRinciUpdate, function (err, respon){
if(err) {
        throw err;

    };
    res.json(respon);
});
});

//route.delete()
module.exports = route;