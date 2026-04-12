import React, { Children, createContext, useState } from "react";
import { toast } from "react-toastify";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [readBooks, setReadBooks] = useState([]);
  const [wishListBooks, setWishListBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
 

    const isExist = readBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      toast.error("You have already marked this book as read.");
      return;
    } else {
      setReadBooks([...readBooks, currentBook]);
      toast.success(`You have marked "${currentBook.bookName}" as read.`);
    }
  };
  const handleWishlist = (currentBook) => {
 

    const isExitInReadBooks = readBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExitInReadBooks) {
      toast.error("You have already marked this book as read. You can't add it to wishlist.");
      return;
    }

    const isExist = wishListBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExist) {
      toast.error("This book is already in your wishlist.");
      return;
    } else {
      setWishListBooks([...wishListBooks, currentBook]);
      toast.success(`You have added "${currentBook.bookName}" to your wishlist.`);
    }
  };

  const data = {
    readBooks,
    setReadBooks,
    handleMarkAsRead,
    wishListBooks,
    setWishListBooks,
    handleWishlist,
  };

  return <BookContext value={data}>{children}</BookContext>;
};

export default BookProvider;
