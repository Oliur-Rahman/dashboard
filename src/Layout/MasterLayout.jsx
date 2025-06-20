import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
//import Header from "../Components/Header";
import Sidebar from './../Components/Sidebar';

const MasterLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const myButton=        <button onClick={() => setIsOpen(true)} className="m-4 lg:hidden">
  <Menu className="w-6 h-6 z-50" />
</button>

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-10 bg-black shadow-lg text-[#343C6A] w-64 transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-64"} lg:translate-x-0 lg:relative`}>
        <div className="p-5 flex flex-col items-start gap-2">
        
  
   <div className="relative w-fit">
         <img src="/src/assets/oLIUR rAHMAN.jpg" alt="Admin" className="w-16 h-16 rounded-lg  "/>
        <p className="text-white px-2 py-0.5 bg-red-500 rounded-full  absolute top-[-14px] z-20 right-[-14px]">4</p>
   </div>
  
       <h1 className="text-2xl font-semibold text-white opacity-80">
          Oliur Rahman
        </h1>
        <p className="text-gray-400">
          oliur4917@gmail.com
        </p>

         
          <button onClick={() => setIsOpen(false)} className="absolute top-4 right-4 lg:hidden">
            <X className="w-6 h-6" />
          </button>
        </div>
       

<Sidebar />

      </div>

      {/* Content Area */}
      <div className="flex-1 min-h-screen bg-gray-100">

            <div className="col-span-12 m-4">
      {/* <Header   button={myButton} /> */}
     <p>
       {myButton}
     </p>

 
       <Outlet />
    

            </div>
       </div>
       </div>
        
  
  );
};

export default MasterLayout;
