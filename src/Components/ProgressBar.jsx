// src/App.js
import React, { useState } from "react";

const App = () => {
    const [progress, setProgress] = useState(0);

    const increaseProgress = () => {
        setProgress((prev) => Math.min(prev + 10, 100));
        // Increase progress by 10%
    };


        const decreaseProgress = () => {
        setProgress((prev) => Math.min(prev + 10, 100));
        // Increase progress by 10%
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold mb-4">Progress Bar</h1>
            <div className="relative w-full max-w-md h-6 bg-gray-300
            rounded-full overflow-hidden">
                <div
                    className="absolute h-full bg-blue-600 transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
            <p className="mt-2 text-lg font-semibold">{progress}%</p>
            <button
                onClick={increaseProgress}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg 
                hover:bg-blue-600 transition-colors"
            >
                Increase Progress
            </button>


                 <button
                onClick={decreaseProgress}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg 
                hover:bg-blue-600 transition-colors"
            >
                Increase Progress
            </button>
        </div>
    );
};

export default App;