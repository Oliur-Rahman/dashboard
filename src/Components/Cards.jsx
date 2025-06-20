import { Home } from 'lucide-react'
import React from 'react'
 
//import BarChartD from './BarChartD';
function Cards() {
  return (
    <div className=''>

        <div className=" grid grid-cols-12 gap-y-6 gap-x-4 items-center p-8 bg-white shadow-md rounded-tr-md rounded-br-md">
 
  {/* Expense Open */}
 <div className="col-span-8 flex flex-col gap-2">

 
         
         <h1 className='text-3xl font-semibold opacity-90'>
            Expense 
         </h1>
     
         <p>
             01 - 25 March, 2020
         </p>
 </div>


 <div className="col-span-4 text-end mr-4">
  users
 </div>


      {/* Expense End */}

     {/* Barchart  Start */}


 <div className="col-span-8 flex   gap-2">

 
{/* <BarChartD /> */}


<img  src='/src/assets/WhatsApp Image 2025-06-20 at 15.22.21_e18d9225.jpg' alt='barchart' className='w-fit'/>

 </div>
        

     {/* Barchart  End */}
        {/* Today Open */}     
<div className="col-span-12 border-b border-gray-500 opacity-75 my-4">
  <p className='my-2'>Today </p>
</div>
  {/* Today End */}


  {/* grocery Open */}
          <div className="col-span-1 ">
            <img src="/src/assets/oLIUR rAHMAN.jpg" alt='grocery' className='w-full rounded-full'/>
          </div>
          <div className="col-span-9 flex flex-col">
            <p className='font-semibold'>Transportation</p>
                <p className='flex flex-row items-center opacity-70'>
                    5:12 PM   <span className='text-2xl font-semibold '> . </span>   Naik bus umum
                </p>
          </div>
          <div className="col-span-2">
            <p className='text-end font-semibold'>$ -326.800 </p>
          </div>

    {/* grocery Close  */}

        {/* Transportaion Open */}



     <div className="col-span-1 bg-gray-300 rounded-full">
           
            <Home className='w-8 h-8 text-blue-400' />
          </div>
          <div className="col-span-9 flex flex-col">
            <p className='font-semibold'>Transportation</p>
                <p className='flex items-center opacity-70'>
                    5:12 PM   <span className='text-2xl font-semibold '> . </span>    Naik bus umum
                </p>
          </div>
          <div className="col-span-2">
            <p className='text-end font-semibold'>$ -15.000 </p>
          </div>


            {/* Transportaion Open */}





            
        {/* Housing Open */}


     <div className="col-span-1">
            <img src="/src/assets/oLIUR rAHMAN.jpg" alt='grocery' className='w-full rounded-full'/>
          </div>
          <div className="col-span-9 flex flex-col">
            <p className='font-semibold'>Housing</p>
                <p className='flex items-center opacity-70'>
                    5:12 PM   <span className='text-2xl font-semibold '> . </span>   Bayar Listrik
                </p>
          </div>
          <div className="col-span-2">
            <p className='text-end font-semibold'>$ -185.750</p>
          </div>


            {/* Transportaion Opern */}



       {/* Monday Open */}     
<div className="col-span-12 border-b border-gray-500 opacity-75 my-4">
  <p className='my-2'>Monday, 25 March, 2023 </p>
</div>
  {/* Monday Close */}



    {/*Food and Drink   Open */}


     <div className="col-span-1">
            <img src="/src/assets/oLIUR rAHMAN.jpg" alt='grocery' className='w-full rounded-full'/>
          </div>
          <div className="col-span-9 flex flex-col">
            <p className='font-semibold'>Food and Drink</p>
                <p className='flex items-center opacity-70'>
                    5:12 PM   <span className='text-2xl font-semibold '> . </span>   Makan Steak
                </p>
          </div>
          <div className="col-span-2">
            <p className='text-end font-semibold'>$ -156.000 </p>
          </div>


            {/* Food and Drink  Close */}



    {/*  Entertainment   Open */}


     <div className="col-span-1">
            <img src="/src/assets/oLIUR rAHMAN.jpg" alt='grocery' className='w-full rounded-full'/>
          </div>
          <div className="col-span-9 flex flex-col">
            <p className='font-semibold'>Entertainment</p>
                <p className='flex items-center opacity-70'>
                    5:12 PM   <span className='text-2xl font-semibold '> . </span>    Nonton Bioskop
                </p>
          </div>
          <div className="col-span-2">
            <p className='text-end font-semibold'>$ -35.200</p>
          </div>


            {/* Entertainment  Close */}




        </div>
    </div>
  )
}

export default Cards
