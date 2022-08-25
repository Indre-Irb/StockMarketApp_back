const mongoose = require('mongoose')

const Schema = mongoose.Schema

const stockSchema = new Schema({
    companyName: {
        type: String,
        required: true
    },
    companyCountry: {
        type: String,
        required: true
    },
    companyCurrency: {
        type: String,
        required: true
    },
    companyWeb: {
        type: String,
        required: true
    },
    ticker: {
        type: String,
        required: true
    },
    openPrice: {
        type: Array,
        required: true
    },
    highestPrice: {
        type: Array,
        required: true
    },
    lowestPrice: {
        type: Array,
        required: true
    },
    closingPrice: {
        type: Array,
        required: true
    },
    time: {
        type: Array,
        rewuired: true
    }
})

module.exports = mongoose.model('stockDb', stockSchema)