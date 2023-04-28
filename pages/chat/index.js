import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";
import Sidebar from "@/Components/Chats/Sidebar";
import SearchBar from "@/Components/Chats/SearchBar";
import MainContent from "@/Components/Chats/MainContent";

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [storedValues, setStoredValues] = useState([]);
  const [active, setActive] = useState(1);

  const configuration = new Configuration({
    apiKey: process.env.API_KEY,
  });
  delete configuration.baseOptions.headers["User-Agent"];
  const openai = new OpenAIApi(configuration);

  const handleGenerateResponse = async () => {
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      // stop: ["/"],
    };

    let completeOptions = {
      ...options,
      prompt: prompt,
    };

    const response = await openai.createCompletion(completeOptions);

    if (response.data.choices) {
      setStoredValues([
        {
          question: prompt,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ]);
      setPrompt("");
    }
  };

  return (
    <div className="container">
      <Sidebar active={active} setActive={setActive} />
      <SearchBar prompt={prompt} setPrompt={setPrompt} />
      <MainContent />
    </div>
  );
};

export default ChatPage;
