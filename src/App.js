import Welcome from './components/message'
import Students from './components/enter';
import './App.css';
import Counter from './components/counter';
function App() {
  return (
    <div className="App">
      <h1>he world</h1>
      <Welcome/>
       <Students names="edwin"/>
       <Counter/>
    </div>
  );
}

export default App;
