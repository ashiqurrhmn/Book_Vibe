import { useContext} from "react";
import { SiIlovepdf } from "react-icons/si";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../context/BookProvider";
// const booksPromise = fetch("/booksData.json").then((res) => res.json());

const BookDetails = () => {
  const { bookId } = useParams();
  
  const {handleMarkAsRead, handleWishlist} = useContext(BookContext);


  // const books = use(booksPromise);
  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId == bookId);

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-9/12 mx-auto my-20 ">
      <figure className="flex items-center justify-center py-10 bg-gray-100 rounded-xl">
        <img
          src={expectedBook.image}
          alt={expectedBook.bookName}
          className="h-50 md:h-90 lg:h-120"
        />
      </figure>
      <div className="">
        <h2 className="card-title text-3xl font-bold">
          {expectedBook.bookName}
        </h2>
        <p className="font-semibold py-4">By: {expectedBook.author}</p>
        <p className="border-y border-gray-200 py-1">{expectedBook.category}</p>
        <p className="font-bold text-justify my-5">
          Review: <span className="font-normal">{expectedBook.review}</span>
        </p>
        <div className="flex gap-2 items-center">
          {expectedBook.tags.map((tag, ind) => (
            <div key={ind} className="badge bg-green-50 text-green-500">
              {tag}
            </div>
          ))}
        </div>
        <div className="border-t border-gray-200 my-5">
            <div className="flex items-center justify-between md:w-2/3">
                <p className="text-gray-500 py-4">Number of Pages:</p>
                <p className="font-bold"> {expectedBook.totalPages}</p>
            </div>
            <div className="flex items-center justify-between md:w-2/3">
                <p className="text-gray-500 py-4">Publisher:</p>
                <p className="font-bold"> {expectedBook.publisher}</p>
            </div>
            <div className="flex items-center justify-between md:w-2/3">
                <p className="text-gray-500 py-4">Year of Publishing:</p>
                <p className="font-bold"> {expectedBook.yearOfPublishing}</p>
            </div>
            <div className="flex items-center justify-between md:w-2/3">
                <p className="text-gray-500 py-4">Rating:</p>
                <p className="font-bold"> {expectedBook.rating}</p>
            </div>
        </div>
        <div className="card-actions justify-end">
          <button className="btn " onClick={() => handleMarkAsRead(expectedBook)}>Mark as Read</button>
          <button className="btn bg-green-500 text-white flex items-center justify-center" onClick={() => handleWishlist(expectedBook)}><span><SiIlovepdf /></span>Add to Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
