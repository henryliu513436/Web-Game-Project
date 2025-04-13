var express = require('express'),
    router = express.Router();

router.post('/add', function(req, res) {
	var result = Number(req.body.x) + Number(req.body.y);
	res.json({result: result + '<+>'});
});

router.post('/sub', function(req, res) {
	var result = req.body.x - req.body.y;
	res.json({result: result + '<->'});
});

router.post('/mul', function(req, res) {
	var result = req.body.x * req.body.y;
	res.json({result: result + '<*>'});
});

router.post('/div', function(req, res) {
	var result = req.body.x / req.body.y;
	res.json({result: result.toFixed(2) + '</> by AppsXX'});
});

router.post('/getscore', function(req, res) {
	var result = req.body.z;
	res.json({result: result+ '<score>'});
});

module.exports = router;