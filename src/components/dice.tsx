import { useSelector } from "react-redux";
import DiceFace from "./diceFace";
import type { RootState } from "../state-mgmt/store";
import { StyleAction } from "../interfaces/dice";


const Dice = () => {
    const diceState = useSelector((state: RootState) => state.dice);
    console.log(diceState, StyleAction[diceState.rollState]);
    return (
        <div className={`dice ${StyleAction[diceState.rollState]}`}>
            <DiceFace />
        </div>
    );
}

export default Dice;