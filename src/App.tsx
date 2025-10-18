
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import DiceContainer from './components/diceContainer'
import type { RootState } from './state-mgmt/store'
import { useState } from 'react';
import { DiceRollState } from './interfaces/dice';
import { rollToLeft, rollToRight, setAtLeftEnd, setAtRightEnd } from './state-mgmt/slices';

function App() {

  const diceState = useSelector((state: RootState) => state.dice);
  const dispatch = useDispatch();
  const [buttonEnabled, setButtonEnabled] = useState(true);

  const handleClick = () => {
    if(diceState.rollState === DiceRollState.AT_LEFT) {
      dispatch(rollToRight());
      setButtonEnabled(false);
      setTimeout(
        () => {
          dispatch(setAtRightEnd());
          setButtonEnabled(true);
        },
        4000
      );
    } 
    
    else if (diceState.rollState === DiceRollState.AT_RIGHT){
      dispatch(rollToLeft());
      setButtonEnabled(false);
      setTimeout(
        () => {
          dispatch(setAtLeftEnd());
          setButtonEnabled(true);
        },
        4000
      );
    }
  }

  return (
    <>
      <div className='app'>
        <DiceContainer/>

        <div className='spacer'></div>
        <div className='btn-container'>
          {
            <button disabled={!buttonEnabled} onClick={handleClick}>
              ROLL !!!
            </button>
          }
        </div>
      </div>
    </>
  )
}

export default App;
