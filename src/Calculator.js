import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {useState} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './redux/counter';

const Calculator = () => {

const [savings, setSavings] = useState(0);
const [num,setNum] = useState(0);

  const calcSum = (event) => {

    event.preventDefault()
    console.log(event);

    if(savings===0)
      {
        alert("please enter your savings")
      }
      
      else
      {
        let savings = parseInt(num);
        setSavings(savings);
        // console.log(typeof(Add));
        // setSavings(parseInt(Add))
      }

  }

  const handleWithdraw = (event) => {
    // grab amount in savings

    let total = savings - num;

    setSavings(total);

    // window.location.reload();
  }

  const handleDeposit = (event) => {

    let total = parseInt(savings) + parseInt(num);

    setSavings(total);

    // window.location.reload();
  }

  const handleInterest = (event) => {

    let interest = (( savings / 100 ) * 5 );

    let total = savings + interest;

    setSavings(total);
    
    // window.location.reload();
  }

  const handleCharges = (event) => {

    let charges = (( savings / 100 ) * 85);

    setSavings(charges);
    
    // window.location.reload();
  }

  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);



  return (

    <>
    <div className="app">
      
      <div className='container'>
        <div className='heading_text'>
          <h1 className='heading_one'>Savings Calculator</h1>
          {/* <p className='heading_two'>Calculate your simple interest Easily</p> */}
        </div>
        <div className='total_amount_card'>
          <div className='card_text '>
          <h3 className='total_amount_heading'>{value}</h3>
          <p className='total_amount_para'>Total savings</p>
          </div>
        </div>
        <form onSubmit={calcSum}>

            {/* 
            - 1 INPUT BOX to enter amount you want to Withdraw / Deposit
            - Add interest = Adds 5%
            - Charges = Decrease by 15%
            - 4 BUTTONS = Withdraw, Deposit, Add interest, Charges
            
            */}

        <div className='input_area'>
            <div className='input_field'>
            <TextField type="number" value={num || ""} onChange={(event) => setNum(event.target.value)} id="outlined-basic" label="Enter amount" variant="outlined" />
            </div>
        </div>
        <div className='button_collection'>
          <Stack spacing={2} direction="row">       
          <Button className='btn_one' onClick={() => dispatch(increment())} style={{backgroundColor: 'black'}} variant="contained">Withdraw</Button>
          <Button className='btn_one' onClick={() => dispatch(decrement())}  style={{backgroundColor: 'black'}} variant="contained">Deposit</Button>
          <Button className='btn_one'  onClick={handleInterest}  variant="outlined">Add Interest: 5%</Button>
          <Button className='btn_one'  onClick={handleCharges}  variant="outlined">Charges: 15%</Button>
          </Stack>
        </div>
        </form>

      </div>      
    </div>
    </>
  );
}

export default Calculator;