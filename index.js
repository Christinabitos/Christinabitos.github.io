const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("btnLike1")

function clickLike1(){
     let totalLikes = parseInt(countLike1.value) + 1
     countLike.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)

const btnLike2 =document.getElementaryById("btnLike2")
const countLike2 =document.getElementById("btnLike2)

function clickLike(){
     let totalLikes = parseInt(countLike2.value) + 1
     countLike.textContent =totalLikes.toString()
}
btnLike2.addEventListener("click",clickLike2)
