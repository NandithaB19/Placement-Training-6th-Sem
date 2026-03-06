import { useState } from "react";
import axios from "axios";
import "./App.css"

function App() {
  
  const [text, setText] = useState("");
  const [video, setvideos] = useState([]);

// const login = async ()=>{
//   try{
    
//   }
// }

  const getVideos = async () => {
    const res = await axios.post("http://localhost:1000/mood", {
      text: text,
    });

    setvideos(res.data);
  };

  return (
    <div className="app">
      <h1>Mood Based Recommender</h1>

      <input
        placeholder="How is your mood?"
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={getVideos}>Predict</button>

      <div className="videos">
        {video.map((v) => (
          <iframe
            width="640"
            height="360"
            key={v.id.videoId}
            src={`https://www.youtube.com/embed/${v.id.videoId}`}
            title="video"
          ></iframe>
        ))}
      </div>
    </div>
  );
}

export default App;