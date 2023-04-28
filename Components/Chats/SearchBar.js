import React from "react";
import { useSpeechRecognition } from "react-speech-kit";

const SearchBar = ({ prompt, setPrompt }) => {
  const { listen, stop } = useSpeechRecognition({
    onResult: (result) => {
      setPrompt(result);
    },
  });

  return (
    <div className="searchbar">
      <div className="searchbar-main">
        <input
          className="searchbar-input"
          type="text"
          placeholder="Send a Message..."
          name="search"
          value={prompt}
          onChange={(event) => setPrompt(event.target.value)}
        />
        <button className="searchbar-btn">
          <i class="fa fa-paper-plane"></i>
        </button>
        <button
          style={{ marginLeft: "1rem" }}
          className="searchbar-btn"
          onMouseDown={listen}
          onMouseUp={stop}
        >
          <i class="fa fa-microphone"></i>
        </button>
      </div>
      <div>
        <p>
          Free Research Preview. ChatGPT may produce inaccurate information
          about people, places, or facts.
        </p>
      </div>
    </div>
  );
};

export default SearchBar;
