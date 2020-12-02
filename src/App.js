import './App.css';
import Learn from './Learn.js';

function App() {
  const carInfo={
    name:'wow',
    model:'mustang'
  }
  return (
    
    <div className="App">
      hello
      <Learn brand={carInfo}/>
    </div>
  );
}

export default App;
