import React from 'react';
import { useOutletContext, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PromptInput from '../../component/Prompts';
import shuffle from 'lodash/shuffle';


const suggestions = [
  { name: "Help me study.", content: "vocabulary for a college entrace exam" },
  { name: "Show me a code snippet", content: "of a website's sticky header" },
  { name: "Give me ideas", content: "for what to do this evening" },
  { name: "Give me recipe", content: "for dinner" },
  { name: "Explain to me", content: "the proper way to present my project" },
  { name: "Teach me", content: "the moral conduct of using AI" },
]



const Dashboard = () => {
  const selectedModel = useOutletContext(); // Access the context

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const randomSuggestion = shuffle(suggestions).slice(0, 3);
  console.log(randomSuggestion);

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
      navigate(`/chats/${id}`);
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

      <div className="flex justify-center mt-10">
        <ul className="flex-1 mt-4">
          <div className='font-bold text-md'>Suggested</div>
          {randomSuggestion.map((suggestion, index) => (
            <li key={index} className="mb-4 p-4 border rounded-lg shadow-sm">
              <h3 className="font-semibold">{suggestion.name}</h3>
              <p className="text-gray-600">{suggestion.content}</p>
            </li>
          ))}
        </ul>
      </div>


    </div>
  )
}

export default Dashboard;