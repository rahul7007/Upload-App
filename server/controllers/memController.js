const postMsglObj = require('../models/postMessage')


getPosts = async (req, res) => {
    await postMsglObj.find({}, (err, posts) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!posts) {
            return res
                .status(404)
                .json({ success: false, error: `Data not found` })
        }
        return res.status(200).json({ success: true, data: posts })
    }).catch(err => console.log(err))
}

createPosts = async (req, res) => {

    const post = req.body

    const newPost = new postMsglObj(post)

    try {
        await newPost.save()
        res.status(200).json({ success: true, data: newPost })
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


module.exports = {
    getPosts,
    createPosts,
}