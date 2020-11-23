const mongoClient = require("../mongodbClient");
module.exports = async (req, res) => {
  const { email, movie_id } = req.body;
  
  const client = await mongoClient();
  await client.connect();
  const db = client.db("movies");
  console.log("connected!");
  let response = await db.collection("library").remove({
      user:email,
      movie:movie_id,
  })

  client.close();
  res.status(200).json(response);
};
