const fs = require ('fs')
const inputArr = fs.readFileSync(0).toString().trim().split('\n')

const rArr = []
inputArr.forEach((w, i)=>{
    if(w === '0'){
        return
    }
    rArr.push(w)
})

console.log(rArr.length)
rArr.forEach((r, i) => { if((i+1) % 2 !== 0) console.log(r)})
