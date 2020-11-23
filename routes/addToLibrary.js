const mongoClient = require("../mongodbClient");
module.exports = async (req, res) => {
  const { email, movie_id,title,picture } = req.body;
  console.log(req.body);
  const client = await mongoClient();
  await client.connect();
  const db = client.db("movies");
  console.log("connected!");
  let response = await db.collection("library").insertMany([
    {
      user: email,
      movie: movie_id,
      title:title,
      picture:picture,
    },
  ]);

  client.close();
  res.status(200).json(response);
};
