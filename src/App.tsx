import React, { useState } from "react";

const InteractiveCard: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-sm mx-auto mt-10">
      <div className="flex justify-center items-center mb-4">
        <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 flex justify-center items-center">
          <span className="text-gray-500 font-bold text-xl">{count}</span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={decrementCount}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          -
        </button>
        <button
          onClick={incrementCount}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default InteractiveCard;