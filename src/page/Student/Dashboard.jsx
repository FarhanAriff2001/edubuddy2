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
        <div className="flex flex-col h-[50vh]"> {/* Full screen height */}
            <div className="flex-1"> {/* This will take up remaining space */}
                {/* Your other content here */}
            </div>

            <div className="flex justify-center"> 
                <div className="grid grid-rows-2 grid-cols-2 gap-4">
                    <div className="bg-gray-200 p-4">Top Left Box</div>
                    <div className="bg-gray-200 p-4">Top Right Box</div>
                    <div className="bg-gray-200 p-4">Bottom Left Box</div>
                    <div className="bg-gray-200 p-4">Bottom Right Box</div>
                </div>
            </div>

            <div className="flex justify-center mt-10"> 
                <h1 className='font-bold text-lg'>What I can help you with?</h1>
            </div>


            {/* Add some margin to the bottom of the PromptInput */}
            <div className="flex justify-center"> 
                <PromptInput onSubmit={handleSubmit} />
            </div>
        </div>
    )
}

export default Dashboard;