const textBox = document.getElementById("text-box");
let divElement;
let spanElement;
let buttonDelElement;
let buttonDoneElement;
document.addEventListener("keypress", function (e) {
    if (e.key == "Enter") {
        if(textBox.value != ""){
            toDo(textBox.value);
            textBox.value = "";
        }
    }
}
)
function toDo(text) {
    divElement = document.createElement("div");
    spanElement = document.createElement("span");
    buttonDoneElement = document.createElement("button");
    buttonDelElement = document.createElement("button");
    document.querySelector(".to-do").appendChild(divElement).classList.add("things-to-do");
    divElement.appendChild(spanElement).innerHTML = text;
    divElement.appendChild(buttonDoneElement).innerHTML = "✓";
    buttonDoneElement.classList.add("done");
    divElement.appendChild(buttonDelElement).innerHTML = "X";
    buttonDelElement.classList.add("delete");
}
setInterval(function(){
    for(var i = 0;i < document.querySelectorAll(".done").length;i++){
        document.querySelectorAll(".done")[i].addEventListener("click", function(){
            this.parentElement.children[0].classList.add("done-click");
            this.style.display = "none";
        })
        document.querySelectorAll(".delete")[i].addEventListener("click", function(){
            this.parentElement.remove();
        })
    }
},100);
