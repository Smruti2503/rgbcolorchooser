console.log("Ready")

var getBg = document.getElementById('container')

var color = document.getElementById('colorCode')



var getBtn = document.getElementById('btn')

getBtn.onclick = function(){

    var rand1 = Math.floor(Math.random() * 255)
    var rand2 = Math.floor(Math.random() * 255)
    var rand3 = Math.floor(Math.random() * 255)

    getBg.style.backgroundColor = "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")"
     
    color.innerHTML= "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")"
}