'use strict';


const app = 'SOME GLOBAL VARIABLE VALUE';
console.log('app:', app);


// ANONYMOUS SELF-CALLING FUNCTION

(function() {
    
    const app = 'SOME VALUE';
    console.log('app:', app);

}());


// OBJECT DECLARATION

const user = (function() {
    
    function privateF1() {
        console.log('F1');
    }

    function privatef2() {
        console.log('F2');
    }

    function privatef3() {
        console.log('F3');
    }

    return {
        publicF1: privateF1,
        publicF2: privatef3
    };
}());

user.publicF1();
user.publicF2();
