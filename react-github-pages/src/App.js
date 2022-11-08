import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Cocktails
       <p>Choose your favourite cocktails.</p>
       <div className="input-group mb-3">
       <input type="text" className="form-control" placeholder="Search Cocktail" aria-label="Search Cocktail" aria-describedby="basic-addon2"/><span><button type="button" className="btn btn-primary">Primary</button></span>
       
       
      
      </div>
      </header>
    </div>
  );
}

export default App;
