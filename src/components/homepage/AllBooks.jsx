import React, { use } from "react";
import { FaRegStar } from "react-icons/fa";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div className="w-9/12 mx-auto">
      <h2 className="text-[40px] font-bold mb-5">Books</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center mt-10 gap-10">
        {books.map((book) => {
          return (
            <div className="card bg-base-100 shadow-sm border border-gray-200">
              <figure className="p-6 bg-gray-100 m-5 rounded-lg">
                <img
                  src={book.image} className="h-50"
                />
              </figure>
              <div className="card-body">
                  <div className="flex gap-2 items-center">
                {book.tags.map((tag) =>(
                    
                    <div className="badge bg-green-50 text-green-500">{tag}</div>
                ))}
                  </div>
                <h2 className="card-title">
                  {book.bookName}
                </h2>
                <p className="mb-2">
                  By: {book.author}
                </p>
                <div className="card-actions justify-between  border-t border-dashed border-gray-400 py-5">
                  <div>{book.category}</div>
                  <div className="flex gap-2 items-center">{book.rating} <FaRegStar/></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
