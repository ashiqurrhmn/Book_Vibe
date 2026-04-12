import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCard from "../UI/ListedBookCard";

const ReadListBooks = ({ sortType }) => {
  const { readBooks } = useContext(BookContext);

  let filteredReadList = [...readBooks];

  if (sortType === "pages") {
    filteredReadList.sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortType === "rating") {
    filteredReadList.sort((a, b) => a.rating - b.rating);
  }

  if (filteredReadList.length === 0) {
    return (
      <div className="text-center text-gray-400 my-10">
        <p>Your read list is empty.</p>
      </div>
    );
  }

  return (
    <div>
      {filteredReadList.map((book) => (
        <ListedBookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default ReadListBooks;
