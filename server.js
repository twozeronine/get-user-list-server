const express = require("express");
const app = express();
const api = require("./routes/index");
const cors = require("cors");
const bodyParser = require("body-parser");
const schema = require("./Schema/index");
const { graphqlHTTP } = require("express-graphql");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", api);

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

// process.env.NODE_ENV === "development"

app.listen(port, () => {
  console.log(`express is running on ${port}`);
});
