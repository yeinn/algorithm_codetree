const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split(' ').map((s)=>parseInt(s))

let cnt = 0
let sum = 0

for(const n of arr){
    if(n >=250) {
        break 
    }
    sum += n
    cnt++
}

if (cnt === 0){
    sum = arr.reduce((acc,curr)=>acc+curr,0)
    cnt = 10
}

console.log(sum, sum/cnt)