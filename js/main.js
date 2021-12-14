"use strict"



// $(".accordion .accordion-item button").click(function(){






//     $(this).next().stop().toggle(500);








window.onload = function () {
    setInterval(function () {

        document.querySelector(".loading").classList.add("d-none")
        document.body.style.overflowY = "scroll"

    }, 500);


    // document.querySelector(".loading").classList.add("active")
}











var chat = document.getElementById("chat")
var minichat = document.querySelector("#mini-chat")
var inpmessage = document.getElementById("myMessage")
var mainchat = document.querySelector("#chat main")
var icon = document.querySelector("#chat .top i")
minichat.onclick = function () {
    chat.classList.toggle("active")
    // console.log(minichat);
}

icon.onclick = function () {
    chat.classList.toggle("active")
}

inpmessage.addEventListener("keyup", function (a) {
    if (a.keyCode == 13) {
        var myinpval = this.value

        if (myinpval.trim() != "") {
            if (myinpval[0].toUpperCase() == myinpval[0]) {
                var messagediv = document.createElement("div")
                messagediv.className = "message admin"
                var ptag = document.createElement("p")
                ptag.innerText = myinpval;
                messagediv.appendChild(ptag)
                mainchat.appendChild(messagediv)
                var ptagdate = document.createElement("p")
                myDate = new Date()
                ptagdate.className = "time"
                ptagdate.innerText = myDate.getHours() + ":" + myDate.getMinutes()
                messagediv.appendChild(ptagdate)
                inpmessage.value = ""


            } else {
                var messagediv = document.createElement("div")
                messagediv.className = "message user"
                messagediv.style = "background-color:grey;"
                var ptag = document.createElement("p")
                ptag.innerText = myinpval;
                messagediv.appendChild(ptag)
                mainchat.appendChild(messagediv)
                var myDate = new Date()
                var ptagdate = document.createElement("p")
                ptagdate.className = "time"
                ptagdate.innerText = myDate.getHours() + ":" + myDate.getMinutes()
                messagediv.appendChild(ptagdate)
                inpmessage.value = ""
            }
            mainchat.scrollTop = mainchat.scrollHeight

        }

        // else{
        //     alert("Nagarsan aga ")
        // }
    }

})
var icons = document.querySelectorAll(".contact i")
var header = document.querySelector("#header")
window.onscroll = function () {
    if (this.scrollY > 150) {
        header.classList.add("active")
    //    icons.style.color="green"

    } else {
        header.classList.remove("active")
    }
}


var btn = document.querySelectorAll(".accordion button")
var p = document.querySelectorAll(".accordion ul")

for (let i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        // for (let j = 0; j < p.length; j++) {
        //     p[j].classList.remove("active")
        // }
        this.nextElementSibling.classList.toggle("active")
    }

}