const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

dotenv.config({ path: "./config/.env" });

const app = express();

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
