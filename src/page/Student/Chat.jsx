import React from 'react'
import { useOutletContext } from "react-router-dom";
import PromptInput from '../../component/Prompts';

const Dashboard = () => {
    const { selectedModel } = useOutletContext(); // Access the context
    
    const handleSubmit = (message) => {
        console.log("Message submitted:", message);
        // Handle message submission logic here (e.g., send to API, update state, etc.)
      };

    return(
        <div className="flex flex-col h-[80vh]"> {/* Full screen height */}
            <div className="flex-1"> {/* This will take up remaining space */}
                {/* Your other content here */}
            </div>

            {/* Add some margin to the bottom of the PromptInput */}
            <div className="flex justify-center"> 
                <PromptInput onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Dashboard;