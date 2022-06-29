// URL dos dados
URL = 'https://api-cinehome.herokuapp.com/usuarios';


function fazerLogin() {
    location.href = "http://127.0.0.1:5500/TelaPrincipal.html";
}

//Constantes que pegam os elementos inseridos no cadastro
const formLogin = document.getElementById('formLogin');
const emailUsuario = document.getElementById('usuario-email');
const senhaUsuario = document.getElementById('usuario-senha');
var cont = 0;

fetch(URL).then(res => res.json()).then(dados => {
    const listaUsuario = dados
    console.log(listaUsuario);
    
    
    // Evento se o apertar o botão cadastrar
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault()
       
        const login = JSON.stringify({
            email: emailUsuario.value,
            senha: senhaUsuario.value,
        })

        // Coloca email no vetor listaEmail
        var listaEmail = [];
        listaUsuario.forEach(i => {
            listaEmail.push(listaUsuario[cont]["email"])
            cont++;
            if(cont == listaUsuario.length){
                cont = 0;
            }
        });

        // Coloca a senha no vetor listaSenha
        var listaSenha = [];
        listaUsuario.forEach(i => {
            listaSenha.push(listaUsuario[cont]["senha"])
            cont++;
            if(cont == listaUsuario.length){
                cont = 0;
            }
        });

        // Verifica o email
        let emailVerificado = Boolean(verificador(listaEmail, emailUsuario.value));
        console.log(emailVerificado)
        if(emailVerificado == true){

            // Pega o índice da senha correspondente ao email do usuário
            let indiceSenha = listaEmail.indexOf(emailUsuario.value);

            // Verifica a senha
            let senhaVerificado = Boolean(verificador(listaSenha, senhaUsuario.value));
            console.log(senhaVerificado)
            if(senhaVerificado == true && senhaUsuario.value == listaSenha[indiceSenha]){
                fazerLogin();
            }
            else{
                alert("Senha incorreta!")
                insertErrorSenha();
            }
        }

        else{
            alert("Email incorreto!");
            insertErrorEmail();
        }
    });
});

// Box padrão
window.oninput = (e) => {
    e.preventDefault()
    let inputBoxEmail = document.getElementById("usuario-email");
    inputBoxEmail.style.cssText = 'color:';
    let inputBoxSenha = document.getElementById("usuario-senha");
    inputBoxSenha.style.cssText = 'color:';
}

// Erro no email
function insertErrorEmail() {
    let inputBoxEmail = document.getElementById("usuario-email");
    inputBoxEmail.style.cssText = 'color: red';
}

// Erro na senha
function insertErrorSenha() {
    let inputBoxSenha = document.getElementById("usuario-senha");
    inputBoxSenha.style.cssText = 'color: red';
}

// Função que verifica a senha e o email digitado com o que há no db.json
function verificador(lista, valorDigitado){
    console.log(lista);
    for(item in lista) {
        console.log(lista[item])
        if(lista[item] == valorDigitado){
            return true;
        }
    };
}