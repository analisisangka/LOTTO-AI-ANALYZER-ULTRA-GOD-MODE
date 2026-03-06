export function scoreCombination(combo,freq){

let score=0

combo.split("").forEach(d=>{

score+=freq[d]||0

})

return score

}
