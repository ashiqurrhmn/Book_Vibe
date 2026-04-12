import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';
import ListedBookCard from '../UI/ListedBookCard';

const ReadListBooks = () => {
    const { readBooks} = useContext(BookContext);

    if(readBooks.length === 0){
        return (
            <div className="text-center text-gray-400 my-10">       
                <p>Your read list is empty.</p>
            </div>
        );
    }

    return (
         <div>
            {
                readBooks.map(book => 
                   <ListedBookCard key={book.bookId} book={book} />
                )
            }
         </div>
    );
};

export default ReadListBooks;