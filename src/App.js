import './App.css';
import data from './Data/data.js'
import Card from './components/Card/index'

function App() {
  return (
    <div className="App">
      <Card
       imageUrl={data.album.images[0].url}
       title={data.album.name}
       artist={data.artists[0].name}
       externalUrl={data.album.artists[0].external_urls.spotify}
      />
    </div>
  );
}

export default App;
