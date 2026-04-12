import React, { useContext } from 'react';
import { BookContext } from '../../context/BookProvider';

const Books = () => {

      const { readBooks} = useContext(BookContext);
  console.log(readBooks, "BookContext");

    return (
        <div>
           books 
        </div>
    );
};

export default Books;