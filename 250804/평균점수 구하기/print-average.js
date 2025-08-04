const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split(' ').map((s)=>parseFloat(s))

const avg = (arr.reduce((acc,curr)=>acc+curr,0)/8).toFixed(1)

console.log(avg)