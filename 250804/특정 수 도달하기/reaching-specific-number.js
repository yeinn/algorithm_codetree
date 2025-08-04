const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split(' ').map((s)=>parseInt(s))

let cnt = 0
let sum = 0

for(let n of arr){
    if(n >=250) {
        break 
    }
    sum += n
    cnt++
}

console.log(sum, sum/cnt.toFixed(1))