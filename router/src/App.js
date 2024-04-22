import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/login'; // Correcting import with PascalCase
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import User from './components/User';// Proper import order

function App() {
  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <> <Navbar /> <Home /></> 
    },

    {
      path: "/login",
      element: <><Navbar /> <Login /></>  // Make sure this component is imported and used
    },
    
    {
      path: "/about",
      element: <><Navbar /> <About /></> 
    }, 

    {
      path:"/user/:username", 
      element:<><Navbar /> < User /></> 
    }
  ]);

  return (
    <div>
    {/* Ensure Navbar is displayed consistently */}
      <RouterProvider router={router} /> {/* RouterProvider for managing routes */}
    </div>
  );
}

export default App; // Ensure exporting the App component
