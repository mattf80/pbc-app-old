var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next){
    var version = {
        exam: req.body.exam,
        version: req.body.version
    };
    version.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred.',
                error: err
            });
        }
        res.status(201).json({
            message: 'Created new version...',
            obj: result
        });
    });
});