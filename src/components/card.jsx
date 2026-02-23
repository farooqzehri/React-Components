import React from "react";

function Card(props) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden
                    hover:shadow-xl hover:-translate-y-2 
                    transition duration-300 flex flex-col">

      {/* Image */}
      <img
        src={props.image}
        alt={props.title}
        className="w-full h-72 object-cover"
      />

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-grow">

        <h2 className="text-lg font-bold text-gray-800">
          {props.title}
        </h2>

        <h3 className="text-blue-600 text-xl font-semibold">
          ${props.price}
        </h3>

        <p className="text-gray-500 text-sm">
          📍 {props.address}
        </p>

        <button className="mt-auto bg-black text-white py-2 rounded-lg
                           hover:bg-gray-800 transition">
          Buy Now
        </button>

      </div>

    </div>
  );
}

export default Card;