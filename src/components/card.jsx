import React from "react";

function Card({ image, title }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden 
                    hover:shadow-2xl hover:-translate-y-2 
                    transition duration-300 w-75">

      {/* Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full  object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-gray-800 mb-3">
          {title}
        </h2>

        <button className="w-full bg-blue-600 text-white py-2 rounded-lg 
                           hover:bg-blue-700 transition duration-300">
          View Details
        </button>
      </div>

    </div>
  );
}

export default Card;