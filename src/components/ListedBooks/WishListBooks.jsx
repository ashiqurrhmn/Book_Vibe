import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCard from "../UI/ListedBookCard";

const WishListBooks = ({ sortType }) => {
  const { wishListBooks } = useContext(BookContext);

  let filteredWishList = [...wishListBooks];

  if (sortType === "pages") {
    filteredWishList.sort((a, b) => a.totalPages - b.totalPages);
  } else if (sortType === "rating") {
    filteredWishList.sort((a, b) => a.rating - b.rating);
  }

  if (filteredWishList.length === 0) {
    return (
      <div className="text-center text-gray-400 my-10">
        <p>Your wish list is empty.</p>
      </div>
    );
  }

  return (
    <div>
      {filteredWishList.map((book) => (
        <ListedBookCard key={book.bookId} book={book} />
      ))}
    </div>
  );
};

export default WishListBooks;
