import PostModel from "../models/Post"


export const create = async (req, res) => {
    try {
        const doc = new PostModel({
            title: req.body.title,
            text: req.body.text,
            imageUrl: req.body.imageUrl,
            tags: req.body.imageUrl,
            user: req.userId,
        });

        const post = await doc.save();
        res.json(post)


    } catch (err) {
        console.log(err);
        res.statsu(500).json({
            message: `Can't create article`,
        })
    }
}