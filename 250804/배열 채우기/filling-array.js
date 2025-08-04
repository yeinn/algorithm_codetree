/**
 * 10개 배열
 * 0 만나면 종료
 * 리버스 출력
 */

const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number)
const r_arr = []

arr.forEach((n)=>{
    if(n === 0) return
    r_arr.push(n)
})

console.log(r_arr.reverse().join(' '))