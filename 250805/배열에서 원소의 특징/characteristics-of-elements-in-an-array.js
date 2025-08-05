// 10개 정수 3배 수 이전 원소

const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split(' ')

console.log(arr[arr.findIndex((n)=>n%3===0)-1])

