async function runUltra(){

const res=await fetch("data/results.json")

const data=await res.json()

const numbers=data.results

const predictions=predict(numbers)

let list=document.getElementById("prediction")

list.innerHTML=""

predictions.forEach(p=>{

let li=document.createElement("li")

li.innerText=p.num+" score:"+p.score

list.appendChild(li)

})

}
