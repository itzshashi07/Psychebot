import './App.css';
import Footer from './Component/Footer/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Routes } from './Routes';
const router = createBrowserRouter(Routes);
function App() {
  return (
    <div className='relative'>
    
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
