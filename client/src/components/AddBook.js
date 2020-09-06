import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_AUTHORS, ADD_BOOK } from "../queries/queries";

function displayAuthors({ loading, data }) {
	if (loading) {
		return <option disabled>Loading Authors</option>;
	} else {
		return data.authors.map((author) => (
			<option key={author.id} value={author.id}>
				{author.name}
			</option>
		));
	}
}

function onAddAuthor(e, addBook) {
	e.preventDefault();

	const { book_name, book_genre, book_author } = e.target;
	const newAuthor = { name: book_name.value, genre: book_genre.value, authorId: book_author.value };
	addBook({
		variables: {
			...newAuthor,
		},
	});
}

const AddBok = () => {
	const { loading, error, data } = useQuery(GET_AUTHORS); // first fetch (sequence request after, will use cached version)
	const [addBook, mutationResponse] = useMutation(ADD_BOOK);
	console.log("Mutation Data Response:", mutationResponse);

	return (
		<form id="add-book" onSubmit={(e) => onAddAuthor(e, addBook)}>
			<div className="field">
				<label>Book name:</label>
				<input type="text" name="book_name" />
			</div>
			<div className="field">
				<label>Genre:</label>
				<input type="text" name="book_genre" />
			</div>
			<div className="field">
				<label>Author:</label>
				<select name="book_author">
					<option>Select author</option>
					{displayAuthors({ loading, data })}
				</select>
			</div>
			<button type="submit">+</button>
		</form>
	);
};

export default AddBok;
