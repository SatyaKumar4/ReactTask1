// import logo from './logo.svg';
import './App.css';
import Card1 from './card1';
import Card2 from './card2';
import Card3 from './card3';

function App() {
    return (
      <div className="App">
          <div className="container d-flex justify-content-center flex-row flex-wrap gap-3 mt-3 p-3">
            <Card1 />
            <Card2 />
            <Card3 />
          </div>
      </div>
    );
}

export default App;
