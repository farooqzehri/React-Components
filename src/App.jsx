import React from "react";
import Card from "./components/card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <h1 className="text-3xl font-bold text-center mb-10">
        Apna Store!
      </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        <Card 
          image="https://i.pinimg.com/236x/62/9c/c7/629cc724344431095326fb0de49a3d82.jpg" 
          title="iPhone 17 Pro Max"
          price="1400"
          address="shalimaar gali , quetta"
        />

        <Card 
          image="https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg" 
          title="HP Laptop ThinkPad"
          price="2400"
          address="jinnah town , lahor"
        />

        <Card 
          image="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg" 
          title="iPhone 15 Pro Max"
          price="1600" address="quetta , balochistan"
        />

        <Card 
          image="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg" 
          title="Apple iPad 25" price="1820" address="karachi , pakistan"
        />

      </div>
    </div>
  );
}

export default App;