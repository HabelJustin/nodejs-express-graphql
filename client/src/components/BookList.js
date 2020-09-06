import React from "react";
import { useQuery, useLazyQuery } from "@apollo/client";
import { GET_BOOKS, GET_BOOK } from "../queries/queries";

const BookList = () => {
	const { loading, error, data, refetch } = useQuery(GET_BOOKS);
	const [getBook, status] = useLazyQuery(GET_BOOK);

	console.log("Book response:", status.data || "loading...");

	function showBookDetail(bookData) {
		console.log({ bookData });
		getBook({ variables: { id: bookData.id } });
	}

	return (
		<div>
			{loading ? (
				<>Loading...</>
			) : (
				<ul id="book-list">
					{data.books.map((book) => (
						<li key={book.id} onClick={() => showBookDetail(book)} style={{ cursor: "pointer" }}>
							{book.name} - {book.author.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default BookList;
