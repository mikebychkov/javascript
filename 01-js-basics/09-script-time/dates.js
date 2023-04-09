'use strict';


// DATE INIT

const now = new Date();
console.log(now);

const someDate = new Date('2023-03-31');
console.log(someDate);

const someDate1 = new Date(2023,0,26); // MONTH START FROM ZERO
console.log(someDate1);

const someDate2 = new Date(2023,3,26,11,54,37);
console.log(someDate2);

const someDate3 = new Date(2023,0,90); // 2023-01-01 + 90 DAYS
console.log(someDate3);

const someDate4 = new Date(2023,0,1,10000); // 2023-01-01 + 10000 HOURS
console.log(someDate4);

const someDate5 = new Date(0); // MILISECONDS
console.log(someDate5); // 1970-01-01T00:00:00.000Z

const someDate6 = new Date(-999999); // MILISECONDS
console.log(someDate6); // 1969-12-31T23:43:20.001Z


// DATE PARTS

const now2 = new Date();
console.log(now2.getFullYear());
console.log(now2.getMonth());
console.log(now2.getDate()); // DAY OF MONTH
console.log(now2.getDay()); // DAY OF WEEK
console.log(now2.getHours());
console.log(now2.getUTCHours()); // UTC+0
console.log(now2.getTimezoneOffset()); // OFFSET ALWAYS IN MINUTES
console.log(now2.getTime()); // MILISECONDS FROM 1970

now2.setHours(18);
console.log(now2);


// INTERVALS

const intStart = new Date(2023,0,1);
const intEnd = new Date();
console.log(intEnd - intStart);

