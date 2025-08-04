const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const n = Number(input[0])
const arr = input[1].split(' ').map((s)=>parseFloat(s))

const avgDegree = (arr.reduce((acc,curr)=>acc+curr,0)/n).toFixed(1)

console.log(avgDegree)

if(avgDegree > 4.0) console.log('Perfect')
else if(avgDegree > 3.0) console.log('Good')
else if(avgDegree < 3.0) console.log('Poor')

