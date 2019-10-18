const mongoose = require('mongoose');


const object = require('../controllers/authors');


module.exports = function (app) {

    app.get('/api', function (req, res){
        object.all(req, res);
    });

    app.get('/api/:id', function (req, res){
        object.one(req, res);
    });

    app.post('/api', function (req, res){
        object.create(req, res);
    });

    // app.put('/api/:id', function (req, res){
    //     object.add(req, res);
    // });

    app.put('/api/edit/:id', function (req, res){
        object.update(req, res);
    });

    app.delete('/api/:id', function (req, res){
        object.delete(req, res);
    })

}