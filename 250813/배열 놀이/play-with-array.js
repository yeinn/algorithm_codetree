const fs = require('fs')
const arr = fs.readFileSync(0).toString().trim().split('\n')

const nArr = arr[1].split(' ')
const qArr = arr.slice(2)

qArr.forEach((q)=>{
    const[c, n, m] = q.split(' ').map(Number)

    switch(c){
        case 1:
            console.log(nArr[n-1])
            break
        case 2:
            const index = nArr.findIndex(s=>Number(s)===n)
            console.log(index+1|| 0)
            break
        case 3:
            const splice = nArr.slice(Number(n-1), Number(m))
            console.log(splice.join(' '))
            break
    }
})
