import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoreReadList, addToStoreWishList } from "../../utility/addToDB";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookId: currentBookId,
    image,
    bookName,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoreReadList(id);
  };

  const handleAddToWishList = (id) => {
    addToStoreWishList(id);
  };

  return (
    <div>
      <div className="card lg:flex-row flex-col bg-base-100 shadow-xl">
        {/* Image Container */}
        <figure className="w-full lg:w-1/3 flex justify-center items-center p-4">
          <img
            src={image}
            alt="Album"
            className="w-full h-9/10 object-cover rounded-lg"
          />
        </figure>

        {/* Content */}
        <div className="card-body lg:w-2/3 p-6">
          <h2 className="font-semibold text-4xl">{bookName}</h2>
          <h2 className="font-light text-2xl">
            By: <span className="mr-2.5"></span>
            {author}
          </h2>
          <hr className="text-gray-500 mt-2" />
          <h2 className="text-gray-500 font-bold text-lg">{category}</h2>
          <hr className="text-gray-500 mt-2" />

          {/* Review Section */}
          <div className="mt-4">
            <h2 className="font-light text-sm leading-relaxed">
              <span className="font-bold">Review:</span>
              {review}
            </h2>
          </div>
          {/* tags section */}
          <div className="flex gap-2">
            <span className="font-semibold text-lg">Tags:</span>
            {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-purple-200 text-gray-800 px-6 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="divider"></div>
          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-y-2 text-medium">
            <h1 className="font-semibold text-gray-600">Number of Pages:</h1>
            <h1 className="font-semibold text-black">{totalPages}</h1>

            <h1 className="font-semibold text-gray-600">Publisher:</h1>
            <h1 className="font-semibold text-black">{publisher}</h1>

            <h1 className="font-semibold text-gray-600">Year of Publishing:</h1>
            <h1 className="font-semibold text-black">{yearOfPublishing}</h1>

            <h1 className="font-semibold text-gray-600">Rating:</h1>
            <h1 className="font-semibold text-black">{rating}</h1>
          </div>
          {/* button */}
          <div className="mt-1.5">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline mr-3"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleAddToWishList(bookId)}
              className="btn btn-info text-white"
            >
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
