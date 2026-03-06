export function digitFrequency(numbers){

let freq={}

numbers.forEach(n=>{

let num=n.toString().padStart(4,"0")

num.split("").forEach(d=>{

freq[d]=(freq[d]||0)+1

})

})

return freq

}
