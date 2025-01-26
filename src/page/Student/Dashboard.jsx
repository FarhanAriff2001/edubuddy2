import React from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PromptInput from '../../component/Prompts';

const Dashboard = () => {
  const { selectedModel } = useOutletContext(); // Access the context

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (text) => {
      return fetch(`${import.meta.env.VITE_API_URL}/api/chats`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "user_2rzHVJFMuvGHRd07bO8oT0FzX4o" || undefined,
          text
        }),
      }).then((res) => res.json());
    },
    onSuccess: (id) => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ["userChats"] });
      navigate(`/dashboard/chats/${id}`);
    },
  });

  const handleSubmit = (e, message) => {
    console.log("Message submitted:", message);
    e.preventDefault();
    const text = message;
    if (!text) return;
    console.log("ENTERING MUTATION")
    mutation.mutate(text);
    console.log("EXITING MUTATION")
    // Handle message submission logic here (e.g., send to API, update state, etc.)
  };

  return (
    <div className="flex flex-col h-[50vh]"> {/* Full screen height */}
      <div className="flex-1"> {/* This will take up remaining space */}
        {/* Your other content here */}
      </div>

      {/* <div className="flex justify-center">
        <div className="grid grid-rows-2 grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4">Top Left Box</div>
          <div className="bg-gray-200 p-4">Top Right Box</div>
          <div className="bg-gray-200 p-4">Bottom Left Box</div>
          <div className="bg-gray-200 p-4">Bottom Right Box</div>
        </div>
      </div> */}

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