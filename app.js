const express = require("express");
const schema = require("./schemas/index");
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose");
const app = express();

// app.use("/", (req, res) => {
//   res.send("welcome to the first GraphQL hands on");
// });
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const port = process.env.PORT || 3000;
const db = process.env.DATABASE;

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
