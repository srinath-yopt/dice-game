import { useSelector } from "react-redux";
import type { RootState } from '../state-mgmt/store.ts';


const DiceFace = () => {
    const value = useSelector((state: RootState) => state.dice.value);
    console.log('jererere')
    return (
        <div className='dice-face'>
            <p>{value}</p>
        </div>
    );
}

export default DiceFace;