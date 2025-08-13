const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const cnt = new Array(b).fill(0)

//기수 변환 방식 집계
while(a > 1){
    const r = Math.floor(a % b)
   cnt[r]++
    a =  Math.floor(a / b)
}

const result = cnt.reduce((s, c) => s + (c * c),0)
console.log(result)