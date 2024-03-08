import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { CardWithForm } from './jjs';
import { startMigration } from './layouts/start-migration';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Style/>     */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<startMigration/>} />
        {/* {/* <Route path="/blogs" element={<></>} /> */}
        {/* <Route path="/contact" element={<ComboboxForm/>} /> */}
        {/* <Route path="*" element={<></>} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
