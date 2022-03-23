import './App.css';
import data from './Data/data.js'
import react from "react";

function App() {
  return (
    <div className="App">
      <div className="Cover">
        <img src={data.album.images[0].url} width="300" height="300" className="rotate" />
      </div>
      <div className="Container">
        <h2>{data.name}</h2>
        <h3>{data.album.name}</h3>
        <p>{data.artists[0].name}</p>
	      <button>
          <a href={data.album.artists[0].external_urls.spotify}>Go to The Song</a>
        </button>
      </div>
    </div>
  );
}

export default App;
