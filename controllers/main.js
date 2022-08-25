const stockDb = require('../modules/stockSchema')

module.exports = {
    showHistory: async (req, res) => {
        const allHistory = await stockDb.find({})
        res.send({success: true, allHistory})
    },
    addSearch: async (req, res) => {
        const {data, info} = req.body
        console.log({data, info})

        const stock = new stockDb()

        stock.companyName = data.name
        stock.companyCountry = data.country
        stock.companyCurrency = data.currency
        stock.companyWeb = data.weburl
        stock.ticker = data.ticker
        stock.openPrice = info.o
        stock.highestPrice = info.h
        stock.lowestPrice = info.l
        stock.closingPrice = info.c
        stock.time = info.t

        stock.save().then(stock => {
            res.send({success: true, stock})
            console.log("result saved")
        })
    },
    clearHistory: async (req, res) => {
        await stockDb.deleteMany({})
        return res.send({success: true})
    }
}
