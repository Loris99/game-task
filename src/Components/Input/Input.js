import { useState } from "react";
import "./Input.css"
const Input = (props) => {
    //const maxLength = 1;
    const [enteredValue, setEnteredValue] = useState('');
    const [enteredTouched, setEnteredIsTouched] = useState('')

    //if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength)

    let enteredValueIsValid = true;

    if ((enteredValue.length > 1) && enteredValue !== '') {
        enteredValueIsValid = true;
    }

    //check if secret code contains any of the inputs, then compar positions

    const valueInputBlurHandler = event => {
        setEnteredIsTouched(true)
    }
    const enteredValueInvalid = !enteredValueIsValid && enteredTouched;

    return (<div className="box">
        < input
            type="number"
            id="fillers"
            onChange={valueInputChangeHandler}
            onBlur={valueInputBlurHandler}
            value={enteredValue}
        />
        {enteredValueInvalid && (<p className="error-text"> please enter a number </p>)}
    </div>
    )
}
export default Input;