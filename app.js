const express = require("express");
const dotenv = require("dotenv");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

dotenv.config({ path: "./config/.env" });

const app = express();

// connect to mlab database
mongoose.connect(`mongodb://${process.env.mLabUser}:${process.env.mLabPassword}@ds141766.mlab.com:41766/gql-ninja`, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
mongoose.connection.once("open", () => console.log("connected to database!"));

app.use(
	"/graphql",
	graphqlHTTP({
		schema,
		graphiql: true,
	})
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
