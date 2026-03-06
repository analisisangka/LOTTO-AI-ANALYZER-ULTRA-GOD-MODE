let predictionLocked = null

function analyzeUltra(){

if(predictionLocked){
return predictionLocked
}

let freq = Array(10).fill(0)

lottoData.forEach(n=>{
n.toString().split("").forEach(d=>{
freq[d]++
})
})

// urutkan digit paling sering
let ranking = freq
.map((v,i)=>({digit:i,val:v}))
.sort((a,b)=>b.val-a.val)

let top4 = ranking.slice(0,4).map(x=>x.digit)

predictionLocked = top4.join("")

return predictionLocked

}
