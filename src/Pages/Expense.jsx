import React from 'react'
import Cards from './../Components/Cards';
// import FindMoney from '../Components/FindMoney'
import MyCard from '../Components/MyCard'
import RightSide from './../Components/RightSide';
function Expense() {
  return (
    <div className='grid grid-cols-12 gap-4 mx-4'>


 <div className="col-span-12 md:col-span-7">
       <Cards />
 </div>
 <div className='col-span-12 md:col-span-5'>
        {/* <FindMoney /> /*/}
     
        <RightSide />
           <MyCard/> 
 </div>

    </div>
  )
}

export default Expense
