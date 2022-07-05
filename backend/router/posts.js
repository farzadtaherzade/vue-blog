const router = require("express").Router();
const Post = require("../models/Post");
const auth = require("../middleware/auth");

router.post("/" ,auth ,async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id",auth , async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.author) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("you updated only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (req.body.username === post.author) {
      try {
        await post.delete()
        res.json({
          status: 200,
          message : 'post has been deleted'
        })
      }catch (err) {
        res.status(500).json(err);
      }
    }else {
      res.status(401).json("you updated only your post");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res)=> {
  try {
    const post = await Post.findById(req.params.id)
    res.json({
      status: 200,
      message: post
    })
  } catch (error) {
    res.status(500).json(err);
  }
})

router.get('/',auth, async (req, res)=> {
  try {
    const post = await Post.find()
    res.json({
      status: 200,
      message: post
    })
  } catch (error) {
    res.status(500).json(err);
  }
})

module.exports = router;
