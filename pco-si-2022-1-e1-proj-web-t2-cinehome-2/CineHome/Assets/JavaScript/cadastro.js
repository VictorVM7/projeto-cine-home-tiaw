// URL dos dados
URL = 'https://api-cinehome.herokuapp.com/usuarios';

function fazerCadastro() {
    location.href = "http://127.0.0.1:5500/TelaLogin.html";
}

//Constantes que pegam os elementos inseridos no cadastro
const formCadastro = document.getElementById('formCadastro');
const emailUsuario = document.getElementById('usuario-email');
const senhaUsuario = document.getElementById('usuario-senha');
const senhaUsuarioConfirma = document.getElementById('usuario-confirmar-senha');
var cont = 0;

fetch(URL).then(res => res.json()).then(dados => {
    const listaUsuario = dados;
    console.log(listaUsuario);

    // Evento se o apertar o botão cadastrar
    formCadastro.addEventListener('submit', (e) => {
        e.preventDefault()

        // Recupera os dados do cadastro do HTML
        const cadastro = JSON.stringify({
            email: emailUsuario.value,
            senha: senhaUsuario.value,
        })

        let emailChar = emailUsuario.value.split('');

        if (verificador(emailChar, '@') == true){
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

            // Verifica se o email existe no db.json
            let emailExiste = Boolean(verificador(listaEmail, emailUsuario.value));
            console.log(emailExiste)
            if(emailExiste == false){         
                if(senhaUsuario.value == senhaUsuarioConfirma.value){
                    console.log(senhaUsuario.value.length)
                    if(senhaUsuario.value.length > 5 && senhaUsuario.value.length < 12){
                        cadastrar(cadastro);
                    }
                    else{
                        alert("A senha deve conter de 5 a 12 dígitos!")
                    }
                }
                else{
                    alert("Senhas divergentes!");
                }
            }
            else{
                alert("Esse email já está cadastrado!")
            }
        }
        else{
            alert("Formato de email inválido! Por favor, verifique novamente!")
        }
    });
});

// Cadastra o usuário no db.json
function cadastrar(cadastro) {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: cadastro
    })
        .then(res => res.json())
        .then(() => fazerCadastro())
}

// Função que verifica a senha e o email digitado com o que há no db.json
function verificador(lista, valorDigitado){
    for(item in lista) {
        console.log(lista[item])
        if(lista[item] == valorDigitado){
            return true;
        }
    };
}