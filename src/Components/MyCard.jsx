import React from 'react';

const MyCard = () => {


    return (
    <div className="bg-white shadow-lg rounded-xl mt-16 p-8 max-w-md  flex flex-col relative">
    <div className="flex justify-between     my-8 ">
       

        <img src='/src/assets/Illustration.png' alt='dddd' className='w-32 rounded-xl absolute top-[-24px] z-20 left-12' />
        <img src='/src/assets/Illustration (1).png' alt='dddd'className='w-16 rounded-xl absolute top-[-24px] z-20 right-16' />
      
    </div>

      <div className='flex flex-col mt-4'>


    <h2 className="text-3xl font-bold text-gray-900 mb-3">
        Save more money
    </h2>

    <p className="text-gray-700 leading-relaxed mb-8">
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
    </p>

    <button className="w-full bg-black text-white px-6 py-3 rounded-lg font-semibold uppercase hover:bg-gray-800 transition duration-300">
        View Tips
    </button>


      </div>
</div>
    );
};

export default MyCard;