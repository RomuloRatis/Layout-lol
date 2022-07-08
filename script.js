const [login, password] = document.querySelectorAll("input")
const botao = document.querySelector("button")

function btn(){
    if(login.value && password.value.length >= 8){
        botao.removeAttribute("disabled")
        botao.style.backgroundColor = "#FF002E"
        botao.style.cursor = "pointer"
    }else{
        botao.setAttribute("disabled", "disabled")
        botao.style.backgroundColor = "#FFC9D3"
        botao.style.cursor = "initial"
    }
}

login.addEventListener("input", btn)
password.addEventListener("input", btn)
