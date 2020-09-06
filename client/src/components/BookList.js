import React from "react";
import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries/queries";

const BookList = () => {
	const { loading, error, data } = useQuery(GET_BOOKS);

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
