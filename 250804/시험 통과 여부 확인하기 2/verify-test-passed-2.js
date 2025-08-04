/** 
 * 조건)
 * 10개 미만 줄
 * 4개 시험 평균 60 이상 통과
 * 
 * 결과)
 * 차례로 pass / fail 출력
 * 통과 수 출력
 */

const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const students = input.slice(1).map((arr)=>arr.split(' ').map(Number))

let passCnt = 0
const checkFn = (scores) => {
    const isPass = ((scores.reduce((arr,curr)=>arr+curr,0))/4) > 60
    if(isPass) passCnt++
    console.log(isPass ? 'pass' : 'fail') 
}

students.forEach((s)=>checkFn(s))
console.log(passCnt)