const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // render คือ การเปิดไฟล์ View
    res.render('index');
});

router.get('/history', (req, res) => {
    res.render('history');
});

router.get('/page2', (req, res) => {
    res.render('page2');
});

module.exports = router;
