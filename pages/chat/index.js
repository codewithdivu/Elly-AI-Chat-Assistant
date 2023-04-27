import React, { useState } from "react";
import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

const ChatPage = () => {
  const [prompt, setPrompt] = useState("");
  const [storedValues, setStoredValues] = useState([]);

  const configuration = new Configuration({
    apiKey: "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",
  });
  delete configuration.baseOptions.headers["User-Agent"];
  const openai = new OpenAIApi(configuration);

  // submit method
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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button>Submit</button>
    </div>
  );
};

export default ChatPage;
