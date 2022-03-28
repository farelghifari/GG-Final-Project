import './App.css';
import data from './Data/data.js'
import Card from './components/Card/index'

function App() {
  return (
    <div className="App">
      {data.map(card => 
        <Card key={card}
        imageUrl={card.album.images[0].url}
        title={card.album.name}
        artist={card.artists[0].name}
        externalUrl={card.album.external_urls.spotify}
        />
      )}
    </div>
  );
}

export default App;
