const express = require('express');
const router = express.Router();
const request = require('request');
const dotenv = require('dotenv');
const http = require('http');



dotenv.config();

const username = process.env.ZD_USER_NAME;
const token = process.env.ZD_TOKEN;
const url = process.env.ZD_URL;


/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/organizations', function (req, res) {
  request.get(url, {
    'auth': {
      'user': username + '/token',
      'pass': token,
      'sendImmediately': false
    }
  }, function (error, response, body) {
    if (response.statusCode != 200) {
      console.log('Error: ' + response.statusCode);
      res.send('Error: ' + response.statusCode);
    } else {
      res.setHeader('Content-Type', 'application/json');
      var centres = JSON.parse(body);
      console.log(centres);
      
      res.send(centres);
      
      
      // var org_list = [];
      // for (var i = 0; i < data['organizations'].length; i++) {
      //   var org = data['organizations'][i];
      //   org_list.push(org.name);
      // }
      // console.log(org_list);

      // res.send('First org name: ' + data['organizations'][0]['name']);
    }
  });
})

module.exports = router;