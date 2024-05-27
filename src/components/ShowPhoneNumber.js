import { useState } from "react";

function ShowPhoneNumber(phoneNum) {
    const[isClicked, setIsClicked] = useState(false);
    let formatedNumber = (JSON.stringify(phoneNum.phoneNum)).replace(/"/g,'');
    
    function convert(){
        setIsClicked(true);
    }
    return (
        <>
        <button onClick={convert}>Convert</button>
        {isClicked ? <p>{formatedNumber.replace(/(\d{3})(\d{3})(\d+)/g, "($1) $2-$3")}</p> : null}
        </>
    );
}

export default ShowPhoneNumber;