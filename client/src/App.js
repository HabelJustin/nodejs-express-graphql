import React, { Fragment } from "react";
import BookList from "./components/BookList";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
	uri: "http://localhost:5000/graphql",
	cache: new InMemoryCache(),
});

const App = () => {
	return (
		<ApolloProvider client={apolloClient}>
			<h1>Hello ReactJs!</h1>
			<BookList />
		</ApolloProvider>
	);
};

export default App;
