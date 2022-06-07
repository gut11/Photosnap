let button = document.querySelectorAll("#button-div > button");
let button_selector = document.querySelectorAll("#button-div > button div");
let labels = document.querySelectorAll("#button-div > label");
let price = document.querySelectorAll(".plan div p");
let counter = 0;
button_selector = button_selector[0];
button = button[0];
price = Array.from(price);
button.addEventListener("click",move_button_selector);
button.addEventListener("mouseleave",remove_transition);


function move_button_selector(){
    if(counter == 0){
        labels[0].className = "";
        labels[1].className = "choosed";
        price.forEach((i) => {
            i.innerHTML = "$" + (Number(i.innerHTML.split("$")[1]) * 10) + ".00";
        })
        button_selector.style = "background-color: var(--sgray)";
        button_selector.className = "right";
        button.style = "background-color: black";
        counter++;
    }else{
        labels[0].className = "choosed";
        button_selector.className = "left";
        labels[1].className = "";
        price.forEach((i) => {
            i.innerHTML = "$" + (Number(i.innerHTML.split("$")[1]) / 10) + ".00";
        })
        button_selector.style = "background-color: black";
        button.style = "background-color: var(--sgray)";
        counter = 0;
    }
}

function remove_transition(){
    setTimeout(() => button_selector.style.transition = "0ms",100);
}