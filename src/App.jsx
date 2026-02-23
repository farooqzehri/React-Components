import React from "react";
import Card from "./components/card";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      
      <h1 className="text-3xl font-bold text-center mb-8">
        Product List
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        <Card 
          image="https://i.pinimg.com/236x/62/9c/c7/629cc724344431095326fb0de49a3d82.jpg" 
          title="iPhone 16 Pro Max"
        />

        <Card 
          image="https://images.pexels.com/photos/3550482/pexels-photo-3550482.jpeg" 
          title="HP Laptop ThinkPad"
        />

        <Card 
          image="https://images.pexels.com/photos/29020349/pexels-photo-29020349.jpeg" 
          title="iPhone 16 Pro Max"
        /> 
         <Card 
          image="https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?_gl=1*15aast8*_ga*Nzc2MzgxNTg0LjE3NjU0ODUxMTE.*_ga_8JE65Q40S6*czE3NzE4Njg2NTMkbzIkZzEkdDE3NzE4NzAxOTgkajU5JGwwJGgw" 
          title="Apple Ipad 25"
        />

      </div>

    </div>
  );
}

export default App;