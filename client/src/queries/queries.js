import { gql } from "@apollo/client";

// @GetBook
const GET_BOOKS = gql`
	query GetBooks {
		books {
			id
			name
			genre
			author {
				name
			}
		}
	}
`;

// @GetAuthors
const GET_AUTHORS = gql`
	query GetAuthors {
		authors {
			name
			id
		}
	}
`;

// @AddBook
const ADD_BOOK = gql`
	mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
		addBook(name: $name, genre: $genre, authorId: $authorId) {
			id
			name
		}
	}
`;

export { GET_BOOKS, GET_AUTHORS, ADD_BOOK };
