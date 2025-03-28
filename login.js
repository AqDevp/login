console.log("its connected");

let email = document.querySelector('.ab');
let passw = document.querySelector('.cd');
const submit = document.querySelector('.sub');
const input = document.getElementsByTagName("input");
const label = document.querySelector(".la");

submit.addEventListener("click", () => {
if (email.value === "abc@gmail.com"|| passw.value == "1234") {
    document.querySelector(".res").classList.add("resop");
} else {
    document.querySelector(".wr").classList.add("wrop");
}
})

document.querySelector(".res").addEventListener("click", () => {
    document.querySelector(".res").classList.remove("resop");
});

document.querySelector(".wr").addEventListener("click", () => {
    document.querySelector(".wr").classList.remove("wrop");
});


input.addEventListener("click", () =>{
    if(input.innerHTML != null) {
        label.classList.add("lab");
    }
})