const mongoClient = require("../mongodbClient");
module.exports = async (req, res) => {
  const { email } = req.params;
  const client = await mongoClient();
  await client.connect();
  const db = client.db("movies");
  console.log("connected!");
  let users = await db.collection("library").find({ user:email }).toArray();

  client.close();
  res.status(200).json(users);
};
