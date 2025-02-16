import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://wallpapercave.com/wp/wp8442906.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-6xl font-bold text-purple-400">book shop</h1>
          <p className="py-6 text-2xl font-extrabold text-gray-500">
            The power to be found between the pages of a book is formidable,
            indeed.
          </p>
          <span className="text-gray-800">
            "It is really hard to be lonely very long in a world of words. Even
            if you don't have friends somewhere, you still have language, and it
            will find you and wrap its little syllables around you and suddenly
            there will be a story to live in." - Naomi Shihab Nye, I'll Ask You
            Three Times, Are You OK?: Tales of Driving and Being Driven
          </span>
          <p className="mt-6 text-2xl font-mono font-bold text-cyan-900 mb-6">
            Books to freshen up your bookshelf
          </p>
          <button className="btn btn-outline btn-accent">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
