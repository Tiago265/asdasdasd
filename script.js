function cad(){
    let cadUserInput = document.getElementById('Username').value;
    let cadSenhaInput = document.getElementById('senha').value;
    const bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || []
    const cadUser = {cadUserInput, cadSenhaInput}
    bancodeDados.push(cadUser)
    localStorage.setItem("bancodeDados",JSON.stringify(bancodeDados))
    alert('usuario cadastrado com sucesso!')
    window.location.href = "login.html"
}
function login(){
    let userInput = document.getElementById('loginUser').value;
    let senhaInput = document.getElementById('loginSenha').value;
    const bancodeDados = JSON.parse(localStorage.getItem("bancodeDados")) || []
    for(let usuario of bancodeDados){
        if(usuario.cadUserInput === userInput && usuario.cadSenhaInput === senhaInput){
            localStorage.setItem("bancodeDados", JSON.stringify(bancodeDados))
            alert("parabéns você logou!!!")
            break;
        }
        else{
            alert("usuario ou senha incorretos!")
            break
        }

    }
}