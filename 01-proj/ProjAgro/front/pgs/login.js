function abrirmsg() {
    let card = document.querySelector("#card2")
    card.style = "display:flex"
}

function fecharmsg() {
    let card = document.querySelector("#card2")
    card.style = "display:none"
}
const login = () => {
    let usuario = {
        "email": nome.value,
        "senha": psw.value
    }

    fetch(uriLogin, {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.json() })
    .then(info => {
        if(info[0] =! undefined) {
            console.log(info);
            localStorage.setItem('usuario',JSON.stringify({"nome":info.nome_user,"nascimento":info.data_nasci,"id":info.id, "userName":info.nickname, "email":info.email,"rola":info.role_stats, "img":info.avatar}));
            window.location.href = "../index.html"
        } else {
            alert(' ❌ Erro no Login, usuário ou  senha incorreta!');
        }
    })
}

