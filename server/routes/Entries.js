const express = require('express');
const router = express.Router();
const { Entries } = require('../models');

const { validateToken } = require("../middlewares/AuthMiddleware");

router.get('/', async (req,res) => {
  const entries = await Entries.findAll()
  res.json(entries)
})

router.post('/entries', async (req,res) => {
  const entry = req.body;
  post.username = req.user.username;
  post.UserId = req.user.id;
  await Entries.create(entry);
  res.json(entry);
})

router.put("/title", async (req, res) => {
  const { newTitle, id } = req.body;
  await Posts.update({ title: newTitle }, { where: { id: id } });
  res.json(newTitle);
});

router.put("/postText", async (req, res) => {
  const { newText, id } = req.body;
  await Posts.update({ postText: newText }, { where: { id: id } });
  res.json(newText);
});

router.delete("/:postId", async (req, res) => {
  const postId = req.params.postId;
  await Posts.destroy({
    where: {
      id: postId,
    },
  });

  res.json("DELETED SUCCESSFULLY");
});



module.exports = router;
