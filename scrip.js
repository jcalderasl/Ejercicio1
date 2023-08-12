let add = document.querySelector("#add");//cury selector busque un objejto llamdo add y se lo ponga en la variables add
let substract = document.querySelector("#substract");

add.addEventListener("click", function(){
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) + 1;

    if (result <= 10) {
        output.innerText = result;
    } else {
        alert("¡Ya llegó a 10!");
    }
});

substract.addEventListener("click", function(){
    let output = document.querySelector("#output");
    let result = parseInt(output.innerText) - 1;

    if (result >= 0) {
        output.innerText = result;
    } else {
        alert("¡Ya llegó a cero!");
    }
});
