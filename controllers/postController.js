const connection = require(`../data/db`);

function index(req, res) {
  // const filtredTags = req.query.tags;
  // let filtredPosts = [...posts];
  // if (filtredTags) {
  //   filtredPosts = filtredPosts.filter((post) =>
  //     post.tags.includes(filtredTags)
  //   );
  // }
  // res.json({
  //   description: "Lista dei posts",
  //   data: filtredPosts,
  //   status: 200,
  // });
  const sql = `SELECT * FROM posts`;
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: `Database query failed` });
    res.json(results);
  });
}

function show(req, res) {
  // const id = parseInt(req.params.id);
  // const post = posts.find((currentPost) => currentPost.id === id);
  // if (!post) {
  //   return res.status(404).json({ error: "Post not found" });
  // }
  // res.json({
  //   description: "Dettagli dei posts " + id,
  //   data: post,
  // });
  const { id } = req.params;
  connection.query(`SELECT * FROM posts WHERE id=?`, [id], (err, results) => {
    if (err) return res.status(404).json({ error: `Post not found` });
    res.json(results);
  });
}

function create(req, res) {
  // // creo l'id per il nuovo post
  //   let newPostId = 0;
  //   for (post of posts) {
  //     if (post.id > newPostId) newPostId = post.id + 1;
  //   }
  // // creo il nuovo post
  //   const newPost = {
  //     id: newPostId,
  //     title: req.body.title,
  //     content: req.body.content,
  //     image: req.body.image,
  //     tags: req.body.tags,
  //   };
  //   posts.push(newPost); // lo aggiungo al mio array posts esistente
  //   console.log(posts);
  //   res.status(201).json(newPost);
}

function update(req, res) {
  // //   res.send("Modifica integrale(sostituzione) del post " + req.params.id);
  //   const id = parseInt(req.params.id);
  //   const post = posts.find((post) => post.id === id);
  // // errore nel caso in cui il post richiesto non esistesse
  //   if (!post) {
  //     return res.status(404).json({
  //       error: "Not Found",
  //       message: "Post non trovato",
  //     });
  //   };
  // // aggiorno il post con i nuovi parametri
  //   post.title = req.body.title;
  //   post.content = req.body.content;
  //   post.image = req.body.image;
  //   post.tags = req.body.tags;
}

function destroy(req, res) {
  // const id = parseInt(req.params.id);
  // const post = posts.find((currentPost) => currentPost.id === id);
  // const postIndex = posts.indexOf(post);
  // if (postIndex === -1) {
  //   return res.status(404).json({ error: "Post not found" });
  // }
  // posts.splice(postIndex, 1);
  // console.log(posts);
  // res.sendStatus(204);
  const { id } = req.params;
  connection.query(`DELETE FROM posts WHERE id=?`, [id], (err) => {
    if (err) return res.status(500).json({ error: `Failed to delete post` });
    res.sendStatus(204);
  });
}

module.exports = { index, show, create, update, destroy };
