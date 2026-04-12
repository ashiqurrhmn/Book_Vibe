import React, { useContext } from "react";
import { BookContext } from "../../context/BookProvider";
import ListedBookCard from "../UI/ListedBookCard";


const WishListBooks = () => {
     const { wishListBooks} = useContext(BookContext);

    if(wishListBooks.length === 0){
        return (
            <div className="text-center text-gray-400 my-10">
                <p>Your wish list is empty.</p>
            </div>
        );
    }


    return (
        <div>
            {
                wishListBooks.map(book => 
                   <ListedBookCard key={book.bookId} book={book} />
                )
            }
         </div>
    );
};

export default WishListBooks;