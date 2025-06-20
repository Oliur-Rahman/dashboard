import React from 'react'

function FindMoney() {




  return (
<div className='grid grid-cols-2 m-4 gap-0.5'>




<div className="col-span-2 p-2">
    <h1 className='text-[30px] font-semibold '>
        Where your money go?

    </h1>
</div>


{/**    Food and Drinks */}
<div className="col-span-2 flex flex-row justify-between items-center p-2">
    <p>
     Food and Drinks
    </p>
    <p>
    872.400
    </p>
</div>
<div className="col-span-2 p-2">
    <progress className='w-full rounded-tr-2xl text-[#31BA96]' value="45" max="100"></progress>
</div>

{/**  Shopping */}

<div className="col-span-2 flex flex-row justify-between items-center p-2">
    <p>
  Shopping
    </p>
    <p>
  1.378.200
    </p>
</div>
<div className="col-span-2 p-2">
    <progress className='w-full rounded-tr-2xl text-[#31BA96]' value="65" max="100"></progress>
</div>


{/**  Housing */}

<div className="col-span-2 flex flex-row justify-between items-center p-2">
    <p>
  Housing
    </p>
    <p>
928.500
    </p>
</div>
<div className="col-span-2 p-2">
    <progress className='w-full rounded-tr-2xl text-[#31BA96]' value="40" max="100"></progress>
</div>

{/**  Transportation */}

<div className="col-span-2 flex flex-row justify-between items-center p-2">
    <p>
  Transportation
    </p>
    <p>
420.700
    </p>
</div>
<div className="col-span-2 p-2">
    <progress className='w-full rounded-tr-2xl text-[#31BA96]' value="60" max="100"></progress>
</div>


{/**  Vehicle */}

<div className="col-span-2 flex flex-row justify-between items-center p-2">
    <p>
  Vehicle
    </p>
    <p>
520.000
    </p>
</div>
<div className="col-span-2 p-2">
    <progress className='w-full rounded-tr-2xl text-[#31BA96]' value="30" max="100"></progress>
</div>


</div>
  )
}

export default FindMoney
