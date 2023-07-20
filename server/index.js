const express = require("express");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema.js");
const connectDB = require("./config/db.js");
const cors = require("cors");

const port = process.env.PORT || 5000;

const app = express();
app.use(cors());
connectDB();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,   //If schema file name is something is else then write  -> schema: <filename>
    graphiql: process.env.NODE_ENV == 'DEVELOPMENT',
  })
);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
