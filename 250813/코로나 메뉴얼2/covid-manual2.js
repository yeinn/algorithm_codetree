const fs = require('fs')

const arr = fs.readFileSync(0).toString().trim().split('\n')

const clinic = {
    A:0,
    B:0,
    C:0,
    D:0
} 

function chkCold(status){
    const [flag, fever] = status.split(' ')

    if(flag === 'Y'){
        if(fever >= 37){
            return clinic.A +=1
        } 
        return clinic.C +=1
    } else{
        if(fever >= 37 ){
            return clinic.B +=1
        }
        return clinic.D +=1
    }
}

arr.forEach((s)=>chkCold(s))

const result = Object.values(clinic)

if(clinic.A >= 2){
    result.push('E')
}

console.log(result.join(' '))
