import React, { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import SearchBar from "@/Components/Chats/SearchBar";
import MainContent from "@/Components/Chats/MainContent";

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [storedValues, setStoredValues] = useState([]);
  const [active, setActive] = useState(1);
  console.log("res....", storedValues);

  const configuration = new Configuration({
    apiKey: process.env.API_KEY,
  });
  delete configuration.baseOptions.headers["User-Agent"];
  const openai = new OpenAIApi(configuration);

  const handleGenerateAnswer = async () => {
    // console.log("generating.....");
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
      <SearchBar
        prompt={prompt}
        setPrompt={setPrompt}
        handleGenerateAnswer={handleGenerateAnswer}
      />
      <MainContent />
    </div>
  );
};

export default ChatPage;
