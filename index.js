const btnLike1 = document.getElementById("btnLike1")
const countLike1 = document.getElementById("btnLike2")

function clickLike1(){
     let totalLikes = parseInt(countLike1.value) + 1
     countLike.textContent = totalLikes.toString()
}
btnLike1.addEventListener("click",clickLike1)
