const fs = require('fs')
let [a, b] = fs.readFileSync(0).toString().trim().split(' ')

const resultMap = new Map

while(a > 1){
    a = a / b
    const remain = Math.floor(a%b)

    if(resultMap.has(remain)){
        let val = resultMap.get(remain)
        resultMap.set(remain, val+1)
    } else{
        resultMap.set(remain, 1)
    }
}

let rs = 0
for (let r of resultMap.values()){
    rs += r * r
}

console.log(rs)
