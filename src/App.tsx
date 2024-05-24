
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (
    <div className="App">
      
To change the background color to black and the text color to aqua for your heading, you can modify the TailwindCSS classes applied to the h1 element. Here’s the updated code:

jsx
Copy code
<h1 className="z-50 w-full fixed shadow-sm shadow-slate-700 top-0 text-2xl text-white bg-black font-bold p-4 font-serif italic">
        {
          currentRoute === "/" ? 'Contact Management App' : 
          currentRoute === "/dashboard" ? "Charts and Maps" : 
          'Contact Management App'
        }
      </h1>
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
