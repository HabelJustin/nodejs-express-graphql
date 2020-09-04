import React from "react";
import { gql, useQuery } from "@apollo/client";

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

const BookList = () => {
	const { loading, error, data } = useQuery(GET_BOOKS);

	console.log({ loading }, { error }, { data });

	return (
		<div>
			{loading ? (
				<>Loading...</>
			) : (
				<ul id="book-list">
					{data.books.map((book) => (
						<li key={book.id}>
							{book.name} - {book.author.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default BookList;
