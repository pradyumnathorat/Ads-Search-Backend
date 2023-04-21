const express = require('express');
const router = express.Router();

const APIs = require('../controllers/post')

router.post("/company", APIs.postData)
router.post("/ads", APIs.postAds)
router.get("/ads/:query", APIs.getAds)

module.exports = router