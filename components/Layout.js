import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

export function Layout({ children }) {
  return (
    <div className="bg-gray-100 h-full ">
      <Navbar />


      <div>
        
        <div className="container mx-auto h-full mt-10">{children}
        </div>
        <ToastContainer />
     
        </div>




   
    </div>
  );
}
