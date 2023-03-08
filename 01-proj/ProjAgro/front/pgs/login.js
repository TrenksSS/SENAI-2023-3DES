


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
        "email": document.querySelector("#emailu").value,
        "senha": document.querySelector("#senhau").value
    }

    fetch("http://localhost:3000/login", {
        'method':'POST',
        'headers': {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(usuario)
    }).then(response => { return response.status })
    .then(info => {
        if(info != null ) {
            console.log(info)
            if(info == 201){
                alert('❌ Erro no Login: SENHA INVÁLIDA!')
            } else if(info == 404){
                alert('❌ Erro no Login: Usuario não ENCONTRADO!')
            }else if(info == 200){
                window.location.href = "../index.html"
            }
        } else {
            alert(' ❌ Erro no Login:' + info);
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