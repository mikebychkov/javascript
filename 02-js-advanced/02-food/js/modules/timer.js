function timer() {

    // TIMER ------------------------------------------------------------------

    const deadline = '2023-05-16';

    function dateDiff(deadline) {

        const diffMS = new Date(deadline) - new Date();

        if (diffMS < 0) return {
            totalMS: diffMS,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        // let msLeft = diffMS;

        // const days = parseInt(msLeft / (1000 * 3600 * 24)); 
        // msLeft -= days * (1000 * 3600 * 24);                
        // const hours = parseInt(msLeft / (1000 * 3600));
        // msLeft -= hours * (1000 * 3600);
        // const minutes = parseInt(msLeft / (1000 * 60));
        // msLeft -= minutes * (1000 * 60);
        // const seconds = parseInt(msLeft / 1000);

        // VER WITH %
        const days = Math.floor(diffMS / (1000 * 3600 * 24));
        const hours = Math.floor(diffMS / (1000 * 3600)) % 24;
        const minutes = Math.floor(diffMS / (1000 * 60)) % 60;
        const seconds = Math.floor(diffMS / 1000) % 60;

        return {
            totalMS: diffMS,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        };
    }

    function timeStr(n) {
        const str = `0${n}`;
        return str.slice(-2);
    }

    function initTimer() {

        const timerElem = document.querySelector('.timer');
        const daysElem = timerElem.querySelector('#days');
        const hoursElem = timerElem.querySelector('#hours');
        const minutesElem = timerElem.querySelector('#minutes');
        const secondsElem = timerElem.querySelector('#seconds');
    
        const timerId = setInterval(setTimer, 1000);

        function setTimer() {
    
            const diff = dateDiff(deadline);
    
            if (diff.totalMS < 0) {
                clearInterval(timerId);
            }
    
            daysElem.textContent = timeStr(diff.days);
            hoursElem.textContent = timeStr(diff.hours);
            minutesElem.textContent = timeStr(diff.minutes);
            secondsElem.textContent = timeStr(diff.seconds);
        }
        setTimer(); // INITIAL CALL TO NOT TO WAIT 1 SECOND BEFORE TIMER KICKIN
    }
    initTimer();    
}

// module.exports = timer;
export default timer;