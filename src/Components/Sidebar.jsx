import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div>
      <nav className="m-2">


          <ul className="space-y-[10px] text-xl">


            <li className="px-4 py-2 hover:bg-gray-200 flex items-center cursor-pointer text-[18px] text-[#2D60FF] gap-2">
            <Link to={'/dashboard'}>Dashboard </Link>
            </li>


            <li className="px-4 py-2 hover:bg-gray-200 flex items-center cursor-pointer text-[18px] gap-2">
                 <Link to={'/'}>Expense</Link>
            </li>


               <li className="px-4 py-2 hover:bg-gray-200 flex items-center cursor-pointer text-[18px] text-[#2D60FF] gap-2">
            <Link to={'/wallets'}>Wallets </Link>
            </li>


               <li className="px-4 py-2 hover:bg-gray-200 flex items-center cursor-pointer text-[18px] text-[#2D60FF] gap-2">
            <Link to={'/summary'}>Summary </Link>
            </li>


             <li className="px-4 py-2 hover:bg-gray-200 flex items-center cursor-pointer text-[18px] text-[#2D60FF] gap-2">
            <Link to={'/accounts'}>Accounts </Link>
            </li>


                <li className="px-4 py-2 hover:bg-gray-200 flex items-center cursor-pointer text-[18px] text-[#2D60FF] gap-2">
            <Link to={'/setting'}>Setting </Link>
            </li>

           
          </ul>
        </nav>
    </div>
  )
}

export default Sidebar
