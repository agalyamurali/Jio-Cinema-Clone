
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css'

function App() {
 
  return (
    <>

     
      <BrowserRouter>
          <Routes>

            <Route path='/' element={<Home/>}></Route>

          </Routes>
      </BrowserRouter>
    </>   
)}

      

export default App;

// to run use npm run dev
