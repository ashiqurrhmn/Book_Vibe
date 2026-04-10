import React, { use } from "react";

import Card from "../UI/Card";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-[40px] font-bold mb-5">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10 gap-10">
        {books.map((book, ind) => {
          return (
            <Card book={book} key={ind}/>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
