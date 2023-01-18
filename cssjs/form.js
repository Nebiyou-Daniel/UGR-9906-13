

const form = document.querySelector("#form");
const message = document.getElementById("message")
const errElement = document.getElementById("err_message");


form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log(message.value);
    errElement.innerText = "";
    if (message.value  == "") {
        errElement.innerText = "Message Field is required";
    } else {
        message.value = "";
        errElement.innerText = "Sent Successfully   ";
    }
})
