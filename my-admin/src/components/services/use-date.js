import { useState } from "react";

const useDate = stringDate => {
    
    let d = new Date();
    try {
        d = Date.parse(stringDate)
    } catch {}

    const [myDate, setMyDate] = useState(d); 

    const format2DigitNumber = num => {
        return `0${num}`.slice(-2);
    }

    const formatDate = date => {
        const MM = format2DigitNumber(date.getMonth()+1);
        const DD = format2DigitNumber(date.getDate());
        return `${date.getFullYear()}-${MM}-${DD}`;
    }
    
    return { myDate, setMyDate, formatDate };
}

export default useDate;