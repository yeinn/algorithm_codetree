const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split(" ")
let sum = 0

arr.forEach((s)=> sum += Number(s))

console.log(sum)