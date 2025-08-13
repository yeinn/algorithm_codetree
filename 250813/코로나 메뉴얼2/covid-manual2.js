const fs = require('fs')

const arr = fs.readFileSync(0).toString().trim().split('\n')

const clinic = {
    A:0,
    B:0,
    C:0,
    D:0
} 

function chkCold(status){
    const [flag, feverStr] = status.split(' ')

    const fever = Number(feverStr)

    const key = flag === 'Y' ? (fever >= 27 ? 'A': 'C'):(fever >= 37 ? 'B' : 'D')
    clinic[key]++
}

arr.forEach((s)=>chkCold(s))

const result = Object.values(clinic)
if(clinic.A >= 2){
    result.push('E')
}

console.log(result.join(' '))
