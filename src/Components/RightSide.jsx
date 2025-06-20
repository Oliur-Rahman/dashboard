import React from 'react'

function RightSide() {
  return (
    <div className='flex flex-col mx-4'>

        {/* Where your money go? */}

    <div className=''>
        <p className='text-2xl font-semibold'>
            Where your money go?
        </p>
    </div>

     {/* Food and Drinks */}

<div className=" flex flex-row justify-between items-center p-2">
    <p>
     Food and Drinks
    </p>
    <p>
    872.400
    </p>
</div>

{/* progress */}
    <div className="col-span-2 p-2">

    <progress className='w-full rounded-2xl  bg-[#31BA96]'  value="45" max="100"></progress>

</div>


     {/* Shopping */}

<div className=" flex flex-row justify-between items-center p-2">
    <p>
        Shopping
    </p>
    <p>
1.378.200
    </p>
</div>

{/* progress */}
    <div className="col-span-2 p-2">

    <progress className='w-full rounded-2xl  bg-[#31BA96]'  value="75" max="100"></progress>

</div>




     {/* Housing*/}

<div className=" flex flex-row justify-between items-center p-2">
    <p>
   Housing
    </p>
    <p>
 928.500
    </p>
</div>

{/* progress */}
    <div className="col-span-2 p-2">

    <progress className='w-full rounded-2xl  bg-[#31BA96]'  value="55" max="100"></progress>

</div>


     {/* Transportation*/}

<div className=" flex flex-row justify-between items-center p-2">
    <p>
Transportation
    </p>
    <p>
420.700
    </p>
</div>

{/* progress */}
    <div className="col-span-2 p-2">

    <progress className='w-full rounded-2xl  bg-[#31BA96]'  value="36" max="100"></progress>

</div>



     {/* Vehicle*/}

<div className=" flex flex-row justify-between items-center p-2">
    <p>
Vehicle
    </p>
    <p>
520.000
    </p>
</div>

{/* progress */}
    <div className="col-span-2 p-2">

    <progress className='w-full rounded-2xl  bg-[#31BA96]'  value="32" max="100"></progress>

</div>


</div>


    
  )
}

export default RightSide
