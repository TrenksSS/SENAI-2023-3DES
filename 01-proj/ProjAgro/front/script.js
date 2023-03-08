var list = document.querySelector("#b1")

function abrirmodal1() {
    let card = document.querySelector("#card1")
    card.style = "display:flex"
}
function fecharmodal1() {
    let card = document.querySelector("#card1")
    card.style = "display:none"
}

function abrirmodal2() {
    let card = document.querySelector("#card2")
    card.style = "display:flex"
}
function fecharmodal2() {
    let card = document.querySelector("#card2")
    card.style = "display:none"
}


fetch("http://localhost:3000/veiculos")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        data.forEach(todo => {
            let novoItem = document.querySelector(".vt").cloneNode(true);

            novoItem.classList.remove("model");

            novoItem.querySelector("#modvt").append(todo.modelo);
            novoItem.querySelector("#sta").append(todo.status);
            novoItem.querySelector("#est").append(todo.estado);
            

            list.appendChild(novoItem);
        });
    });

    function cadcar(){
        let data = {}
    
        let body = {
            "modelo": document.querySelector("#modvei").value,
            "tipo": document.querySelector("#tipovei").value,
            "status": document.querySelector("#stavei").value,
            "estado": document.querySelector("#estvei").value,
            "ultimaManutencao": document.querySelector("#ultvei").value,
        }
        const options = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };
        options.body = JSON.stringify(body)
        if (body.modelo.length > 0 && body.tipo.length > 0 && body.status.length > 0 && body.estado.length > 0
            && body.ultimaManutencao.length > 0) {
            fetch("http://localhost:3000/veiculo", options)
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