import './App.css';
import Explorer from './components/explorer';
import CardsWidget from './components/cards';
import { files } from './data';

function App() {
  return (
    <div className="App" style={{display : 'flex', justifyContent : 'space-evenly'}}>
      <div>
        <h2 style={{marginLeft : 10}}>File Explorer</h2>
        <Explorer data = {files}/>
      </div>
      <div style={{height : '100vh', width: '2px', background: 'black'}}></div>
      <div>
        <CardsWidget />
      </div>
    </div>
  );
}

export default App;