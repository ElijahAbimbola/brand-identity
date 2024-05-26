import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home  from "./pages/Home.jsx"
import SignUp from "./pages/SignUp.jsx"
import Login from './pages/Identity.jsx';
import Identity from './pages/Identity.jsx';


function App() {
  
  return (
   <div>
    <BrowserRouter >
      <Routes>
        <Route  path='/' element= { <Home /> } />
        <Route path='/signup' element = { <SignUp /> } />
        <Route path=' /login' element = { <Login/> } />
        <Route path='/identity' element = { <Identity/> } />
      </Routes>
      </BrowserRouter>
   </div>
  );
}

export default App;
