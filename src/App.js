import './App.css';
import Calculator from './Calculator';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter";


// import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <Calculator />
      
    </div>
  );
}

export default App;
