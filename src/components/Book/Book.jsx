import React from "react";
import PropTypes from "prop-types";

const Book = ({ book }) => {
  const { image, bookName, author, category, tags } = book;
  return (
    <div className="card bg-base-100 w-96 border-zinc-200 border-1 rounded-lg p-3">
      <figure className="w-full h-64 overflow-hidden rounded-lg">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover  rounded-lg"
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

        <h2 className="card-title my-2">{bookName}</h2>
        <p>
          By: <span className="ml-1 font-semibold mb-5">{author}</span>
        </p>
        <p>
          <span className="font-semibold text-lg text-blue-600 mt-4">
            {category}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.object,
};
