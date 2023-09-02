// primeiro selecionso todos os elementos

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const jobSelect = document.querySelector ("#job");
const messageTextarea = document.querySelector("#message");

// para a funcao validacao vou usar o formulario dando um evento a ele

form.addEventListener("submit", (event) => {
    event.preventDefault();              // preventDefault pq quero que ele valid antes d enviar
    // aqui ja come;co a validar
    // se o nome estiver vazio
    if(nameInput.value === ""){
        alert("Preencha o campo Nome");
        return;
    }
    // verifica email se está preenchido e se é valido
    if(emailInput.value === "" || !isEmailValid(emailInput.value)){
        alert("Preencha o campo E-mail");
        return;
    }
    // verifica se ta preenchido
    if(!validatePassword(passwordInput.value, 8)){
        alert("A senha precisa de no minimo 8 Dígitos");
        return;

    }
    // verifica se fui selecionado
    if(jobSelect.value === ""){
        alert("Prencha selecione a sua situação");
        return;

    }
    //verifique a msg esta preenchida
    if(messageTextarea.value === ""){
        alert("Escreva sua Mensagem");
        return;
    }
    // se todos os campos forem preenchidos corretamente envie..

    form.submit();
});

    // funcao que valida email 
function isEmailValid(email){
    // criar uma regex
    
        // usuario@host.com
        const emailRegex = new RegExp ( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/);
    
    if(emailRegex.test(email)){
        return true;
    }
    return false;
}

    // funcao que valida a senha
    function validatePassword(password, minDigits){
        if(password.length >= minDigits){
            return true;
        } 
        return false;
    }
