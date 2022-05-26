import './App.css';
import CalculatorContainer from './components/CalculatorContainer/CalculatorContainer';

function App() {
  return (
    <div className='app'>
      <header className='appHeader'>
        <h1>Calculator app</h1>
      </header>
      <CalculatorContainer />
      <footer>
        <p>Developed by Mariam Viera Amado</p>
      </footer>
    </div>
  );
}

export default App;
