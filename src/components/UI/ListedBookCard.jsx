import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import { MdLibraryBooks } from "react-icons/md";
import { Link } from "react-router";

const ListedBookCard = ({ book }) => {
  return (
    <div
      className="card bg-base-100 shadow-sm border border-gray-200 flex flex-col md:flex-row gap-5 mb-10 mt-5"
    >
      <figure className="p-6 bg-gray-100 m-5 rounded-lg">
        <img src={book.image} className="h-50" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{book.bookName}</h2>
        <p className="mb-2">By: {book.author}</p>
        <div className="flex">
          <div className="flex gap-5 items-center mb-2 flex-wrap">
            {book.tags.map((tag, ind) => (
              <div key={ind} className="badge bg-green-50 text-green-500">
                {tag}
              </div>
            ))}
            <p className="flex gap-1 items-center justify-center">
              <span>
                <CiLocationOn />
              </span>
              Year of Publishing: {book.yearOfPublishing}
            </p>
          </div>
        </div>
        <div className="text-gray-400 mb-2">
          <div className="flex gap-1 items-center">
            
            <span>
              <IoMdPeople />
            </span>
            Publisher: {book.publisher}
          </div>
          <div className="flex gap-1 items-center">
            
            <span>
              <MdLibraryBooks />
            </span>
            Pages: {book.totalPages}
          </div>
        </div>
        <div className="card-actions  border-t border-dashed border-gray-400 py-5 gap-5">
          <div className="bg-blue-100 px-2 py-1 rounded-lg text-blue-400">{book.category}</div>
          <div className= "flex gap-2 items-center bg-orange-100 px-2 py-1 rounded-lg text-orange-400">
            {book.rating} <FaRegStar />
          </div>
          <Link to={`/bookDetails/${book.bookId}`} className= "flex gap-2 items-center bg-green-400 px-2 py-1 rounded-lg text-white">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ListedBookCard;
