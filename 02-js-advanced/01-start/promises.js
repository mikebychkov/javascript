'use strict';

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Preparation...');
        const product = {
            name: 'TV',
            price: 2000
        };
        resolve(product);
    }, 2000);
});

req.then(product => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);       // PROPAGATES DATA THROUGH CALL 'RESOLVE' FUNC
            //reject(product);
        });
    });
}).then(data => {
    data.modify = true;
    return data;                    // SIMPLE THEN BLOCKS PROPAGATES DATA THROUGH RETURNING
}).then(data => {
    console.log(data);
}).catch((d) => {
    console.error('Error1...', d);  // YOU CAN MAKE SEVERAL CATCH BLOCKS, BUT LAUNCHES ONLY FIRST ONE
}).catch((d) => {
    console.error('Error2...', d);
}).finally(() => {                  // FINALLY BLOCK CAN BE MULTIPLE
    console.error('Finally1');
}).finally(() => {
    console.error('Finally2');
});

// 

const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(time), time);
    });
};

test(1000)
.then(() => console.log('1000 ms'))
.then(() => console.log('1001 ms'))
.then(() => console.log('1002 ms'));

const some = test(2000).then(() => {        // CHAIN OF CALLS CAN BE ASSIGN TO A VARIABLE
    console.log('2000 ms');
    return 2000;
}).then(ms => {
    console.log(ms);
    return ++ms;
}).then(ms => {
    console.log(ms);
    return ++ms;
});

some.then(data => {                         // AND THEN CONTINUE TO CALL 'THEN' METHODS, WHICH WILL 
    console.log(`Additional call ${data}`)  // BE CALLED IN DECLARED ORDER
});

//  ALL vs RACE

Promise.all([test(1000), test(2000)]).then((some) => {
    console.log('ALL COMPLETED', some);                 // GETS ARRAY OF RESPONSES
});

Promise.race([test(1000), test(2000)]).then((some) => {
    console.log('THE FASTEST COMPLETED', some);         // GETS RESULT OF FIRST COMPLETED
});
