var express = require('express');
var router = express.Router();
const firebase = require('./../database/firebase-service');

router.get('/', function (req, res, next) {
    firebase.getVersions(function(versions){
        res.status(201).json({
        message: 'Success...',
        versions: versions
    });
    });    
});


router.post('/', function (req, res, next) {
    var version = {
        exam: req.body.exam,
        version: req.body.version
    };
    firebase.addVersion(version);
    res.status(201).json({
        message: 'Created new version...',
        obj: version
    });
});


module.exports = router;