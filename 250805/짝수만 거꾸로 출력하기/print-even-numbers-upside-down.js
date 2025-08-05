//짝수 출력, 역순

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const nums = input[1].split(' ').map(Number)

const result = []
for(let i = (n-1); i >= 0; i-- ){
    if((nums[i] % 2) === 0){
        result.push(nums[i])
    }
}

console.log(result.join(' '))