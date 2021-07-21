let x = Math.floor(Math.random() * 100 + 1) 
let audio1 = new Audio("ferdi-tayfur-baba.mp3");
let guess = 0;

let guessBtn = document.querySelector("#check");

guessBtn.addEventListener("click", () => {
    let y = Number(document.querySelector("#number").value);
   
    const isNumber = (n) => {
        return Number(n) === n;
    }
    if (isNumber(y)) {
        if (x == y) {
            document.querySelector("body").classList.add("cong");
            audio1.play();
            document.querySelector("#container").style.display = "none";
           
        } else if (x > y) {
            guess += 1
            alert("Try greater number!")
        } else if (x < y) {
            guess += 1
            alert("Try smaller number!")
        }
        let attempt = document.querySelector("span");
        attempt.innerHTML = guess.toString();
    } else {
        alert("Enter A Number Please!")
    }
})