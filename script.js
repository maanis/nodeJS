const fs = require('fs');

fs.writeFile('hello.txt', 'Hello Kaise Ho Ap', (err) => {
    if (err) console.log(err)
    else console.log('donee')
})