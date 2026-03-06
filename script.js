function analyze(){

let input=document.getElementById("data").value.trim().split("\n")

let freq=Array(10).fill(0)
let lastSeen=Array(10).fill(null)

input.forEach((n,index)=>{

n=n.trim()

if(n.length==4){

for(let d of n){

d=parseInt(d)

freq[d]++

lastSeen[d]=index

}

}

})

let stats=""

for(let i=0;i<10;i++){

stats+="Digit "+i+" : "+freq[i]+"<br>"

}

document.getElementById("stats").innerHTML=stats

let sorted=[...freq].map((v,i)=>({digit:i,val:v}))
.sort((a,b)=>b.val-a.val)

let hot=sorted.slice(0,4).map(x=>x.digit)
let cold=sorted.slice(-4).map(x=>x.digit)

document.getElementById("hot").innerHTML=hot.join(" ")
document.getElementById("cold").innerHTML=cold.join(" ")

let predictions=[]

for(let i=0;i<100;i++){

let a=hot[Math.floor(Math.random()*hot.length)]
let b=Math.floor(Math.random()*10)
let c=Math.floor(Math.random()*10)
let d=cold[Math.floor(Math.random()*cold.length)]

predictions.push(""+a+b+c+d)

}

document.getElementById("predictions").innerHTML=predictions.join("<br>")

document.getElementById("top").innerHTML=predictions.slice(0,10).join("<br>")

drawChart(freq)

}

function drawChart(freq){

new Chart(document.getElementById("chart"),{

type:"bar",

data:{
labels:["0","1","2","3","4","5","6","7","8","9"],
datasets:[{
label:"Digit Frequency",
data:freq
}]
}

})

}
