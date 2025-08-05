// a[n] = a[n-1] + a[n-2] = 피보나치 수열

const fs = require('fs')
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number)

let rs = new Array(10)
rs[0] = n
rs[1] = m

for(let i = 2; i < 10; i++){
    rs[i] = rs[i-1] + (2*rs[i-2])
}

console.log(rs.join(' '))