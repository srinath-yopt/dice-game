import { useSelector } from "react-redux";
import type { RootState } from '../state-mgmt/store.ts';
import { DiceRollState } from "../interfaces/dice.ts";


const DiceFace = () => {
    const diceState = useSelector((state: RootState) => state.dice);
    const isStatic = [
        DiceRollState.AT_LEFT,
        DiceRollState.AT_RIGHT
    ].includes(diceState.rollState);

    return (
        <div className='dice-face'>
            <p>{isStatic ? diceState.value : '?'}</p>
        </div>
    );
}

export default DiceFace;