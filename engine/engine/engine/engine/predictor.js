import {digitFrequency} from "./analyzer.js"
import {scoreCombination} from "./scoring.js"

export function predict(numbers){

let freq=digitFrequency(numbers)

let digits=Object.keys(freq)

let combos=[]

for(let a of digits)
for(let b of digits)
for(let c of digits)
for(let d of digits){

let num=a+b+c+d

let score=scoreCombination(num,freq)

combos.push({num,score})

}

combos.sort((a,b)=>b.score-a.score)

return combos.slice(0,50)

}
