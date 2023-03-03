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

function postar(){
    let data = {}

    let body = {
        "mensagem": document.querySelector("#admvl").value,
        "email": document.querySelector("#emailmsg").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    if (body.mensagem.length > 0 && body.email.length > 0) {
        fetch("http://localhost:3000/mensagem", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Mensagem enviada ✔")
                    window.location.reload()
                } else {
                    alert("Erro ao enviar Post ❗")
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}