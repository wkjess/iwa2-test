const express = require('express'),
router = express.Router();

router.get('/hello/:foo/:bar', (req, res) => {
    res.json({message: "Hello!!", data: [
        req.params.foo,
        res.params.bar
    ]});
});

router.post('/hello', (req, res) => {
    res.json({result: 'Post was sent', data: req.body});
});

module.exports = router;