import React, { useEffect } from "react";
import { useAuth } from "../../context/JWTContext";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const LoginPage = () => {

  const { login } = useAuth(); // Use the login function from context
  const navigate = useNavigate();

  useEffect(() => {
    // Parse tokens from URL
    const urlParams = new URLSearchParams(window.location.search);
    const accessToken = urlParams.get("accessToken");

    if (accessToken) {
      // Store token in the context
      login(accessToken);

      // Clear query params from the URL
      window.history.replaceState({}, document.title, "/");

      // Navigate to a different page
      navigate("/dashboard"); // Redirect to your dashboard or another page
    }
  }, [login, navigate]);

  const handleLogin = () => {
    window.location.href = "http://localhost:5000/api/auth/google";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-radial from-white via-slate-100 to-slate-200">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <button
            className="flex items-center justify-center w-full border bg-slate-100 border-slate-200 text-black font-medium py-2 px-4 rounded hover:border-blue-200 transition duration-300"
            onClick={handleLogin}
          >
            <span className="w-5 h-5 mr-2">
              <FcGoogle />
            </span>
            Sign In With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
