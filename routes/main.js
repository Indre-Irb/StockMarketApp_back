const express = require('express')
const router = express.Router()

const {
    showHistory,
    addSearch,
    clearHistory
} = require('../controllers/main')

router.get('/showHistory', showHistory)
router.post('/addSearch', addSearch)
router.get('/clearHistory', clearHistory)

module.exports = router