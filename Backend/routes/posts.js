const express = require('express');

const { authMiddleware } = require('../middleware');
const { Posts } = require('../db');

const router = express.Router();

router.get('/', (req, res) => {
    console.log("INDEX called");
    
    res.send("INDEX ROUTE");
})




module.exports = router;