import './App.css';
import Calculator from './Calculator';
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./store/counter";


// import { Provider } from 'react-redux';

// With redux, we require a store - created to pass in to top level component to provide every component below access to it
// 

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;
