import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { CardWithForm } from './jjs';
import { StartMigration } from './layouts/start-migration';
import { ProtocolSelection } from './layouts/protocol-selection';
import { InterfaceMappings } from './layouts/interface-mappings';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <Style/>     */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<StartMigration/>} />
        {/* {/* <Route path="/blogs" element={<></>} /> */}
        <Route path="/protocolselection" element={<ProtocolSelection/>} />
        <Route path="/interface-mappings" element={<InterfaceMappings/>} />
        {/* <Route path="/lll" element={<ComboboxForm/>} /> */}
        
        {/* <Route path="*" element={<></>} /> */}
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
