import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const Card = ({book}) => {
    return (
        <Link to={`/bookDetails/${book.bookId}`} className="card bg-base-100 shadow-sm border border-gray-200">
              <figure className="p-6 bg-gray-100 m-5 rounded-lg">
                <img
                  src={book.image} className="h-50"
                />
              </figure>
              <div className="card-body">
                  <div className="flex gap-2 items-center">
                {book.tags.map((tag, ind) =>(
                    
                    <div key={ind} className="badge bg-green-50 text-green-500">{tag}</div>
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
            </Link>
    );
};

export default Card;