const postModel = require('../models/companyModel')
const adsModel = require('../models/adsModel')
const postData = async (req, res) => {
    try {
        const data = req.body;
        const newData = await postModel.create(data)
        res.status(201).json(newData)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const postAds = async (req, res) => {
    try {
        const data = req.body;
        const newData = await adsModel.create(data)
        res.status(201).json(newData)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const getAds = async (req, res) => {
    try {
        const { query } = req.params;
        const ads = await adsModel.aggregate([
            {
                $lookup: {
                    from: "companies",
                    localField: "companyId",
                    foreignField: "_id",
                    as: "company"
                }
            },
            { $unwind: "$company" },
            {
                $match: {
                    $or: [
                        { primaryText: { $regex: query, $options: "i" } },
                        { headline: { $regex: query, $options: "i" } },
                        { description: { $regex: query, $options: "i" } },
                        { "company.name": { $regex: query, $options: "i" } },
                    ]
                }
            },
            { $project: { _id: 1, primaryText: 1, headline: 1, description: 1, "company.name": 1, "company.url": 1 , imageUrl : 1 , CTA : 1} }
        ])
        res.status(200).send(ads)
    } catch (err) {
        res.status(409).json({ message: err.message })
    }
}
module.exports = { postData, postAds, getAds };