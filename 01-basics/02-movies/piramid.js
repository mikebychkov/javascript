'use strict';

piramid1();
piramid2();
piramid3(6);
piramid3(8);
piramid3(9);

function piramid1() {

    let num = 1;
    for (let pos = 6; pos > 0; pos--) {
    
        let str = '';
    
        while (str.length < pos - 1) {
            str += ' ';
        }
    
        let starNum = 0;
        while (starNum < num) {
            str += '*';
            starNum++;
        }
    
        console.log(str);
    
        num += 2;
    }
}

function piramid2() {

    const emptyStr = '                                                            ';
    let starStr = '*';

    for (let i = 6; i < 12; i++) {
        let str = emptyStr + starStr;
        str = str.substring(str.length - i);
        console.log(str);
        starStr = `*${starStr}*`;
    }
}

function piramid3(topPosition) {

    let emptyStr = ' ';
    for (let i = 0; i < topPosition * 2; i++) {
        emptyStr += ' ';
    }

    let starStr = '*';
    for (let i = topPosition; i < topPosition * 2; i++) {
        let str = emptyStr + starStr;
        str = str.substring(str.length - i);
        console.log(str);
        starStr = `*${starStr}*`;
    }
}