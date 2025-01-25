import { useState, useEffect } from "react";
import LoginPage from "./layout/AuthLayout";
import { RouterProvider } from "react-router-dom";
import router from "./routes/index.jsx";

function App() {

  const [subdomain, setSubdomain] = useState(null);

  useEffect(() => {
    const host = window.location.host;
    const arr = host.split(".").slice(0, host.includes("localhost") ? -1 : -2);
    if (arr.length > 0) {
      setSubdomain(arr[0]);
    } 
  }, []);

  return (
    // <div>
    //   <h1>Subdomain: {subdomain || "No Subdomain Detected"}</h1>
    //   <LoginPage />
      
    // </div>
    <RouterProvider router={router} />
  );
}

export default App
