var express = require('express');
var router = express.Router();

let activities = [
    {
      "id": 1,
      "type": "Run",
      "date": "2019-05-30T17:30:31.098Z",
      "important": true
    },
    {
      "id": 2,
      "type": "Bike",
      "date": "2019-05-30T18:39:34.091Z",
      "important": false
    },
    {
      "id": 3,
      "type": "Kayak",
      "date": "2019-05-30T19:20:14.298Z",
      "important": true
    }
  ]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(JSON.stringify(activities));
});

module.exports = router;
