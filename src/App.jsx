import React from 'react'
import MasterLayout from './Layout/MasterLayout'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Pages/Dashboard';
import Expense from './Pages/Expense';
import Wallets from './Pages/Wallets';
import Accounts from './Pages/Accounts';
import Summary from './Pages/Summary';
import Setting from './Pages/Setting';
import NotFound from './Pages/NotFound';
function App() {


  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path='dashboard' element={<Dashboard />} />
          <Route index element={<Expense />} />
          <Route path="wallets" element={<Wallets />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="summary" element={<Summary />} />
          <Route path="setting" element={<Setting />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
