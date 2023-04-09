'use strict';


// https://jsonplaceholder.typicode.com



fetch('https://jsonplaceholder.typicode.com/todos/10')   // RETURNS 'PROMICE'
    .then(response => response.json())                   // response IS A 'PROMICE'
    .then(json => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
      

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
      

fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
    });
