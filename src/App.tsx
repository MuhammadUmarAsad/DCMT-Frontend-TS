import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { CardWithForm } from './jjs';
import { StartMigration } from './layouts/start-migration';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './layouts/header';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartMigration/>} />
        {/* {/* <Route path="/blogs" element={<></>} /> */}
        {/* <Route path="/contact" element={<ComboboxForm/>} /> */}
        {/* <Route path="*" element={<></>} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
