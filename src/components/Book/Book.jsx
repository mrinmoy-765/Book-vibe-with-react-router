import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId,image, bookName, author, category, tags } = book;
  return (
    <Link to={`/books/${bookId}`}>
       <div className="card bg-base-100 w-96 border-zinc-200 border-1 hover:border-zinc-500  rounded-lg p-3">
      <figure className="bg-blue-200 py-8">
        <img
          src={image}
          alt=""
          className="h-[180px] object-cover"
        />
      </figure>
      <div className="ml-3 mt-7 mb-2">
        <div className="flex gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="bg-purple-400 text-white px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex mt-4">
          <h2 className="card-title my-2">{bookName}</h2>
          <div className="badge badge-secondary">New</div>
        </div>
        <p>
          By: <span className="ml-1 font-semibold mb-5">{author}</span>
        </p>
        <div className="divider"></div>
        <div className="flex justify-between">
          <span className="font-semibold text-lg text-blue-600 mt-4">
            {category}
          </span>
          <div className="rating mt-4">
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
              defaultChecked
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
            <input
              type="radio"
              name="rating-2"
              className="mask mask-star-2 bg-orange-400"
            />
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.object,
};
