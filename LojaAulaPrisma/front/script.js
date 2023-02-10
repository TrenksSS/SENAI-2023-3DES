var cadprod = document.querySelector("#card1")
var cadset = document.querySelector("#card2")
var uri = `http://localhost:3000/produto`

function abreCad() {
    cadprod.style = "display:flex"
}
function fechaCad() {
    cadprod.style = "display:none"
}

function abreCad2() {
    cadset.style = "display:flex"
}
function fechaCad2() {
    cadset.style = "display:none"
}

function postar(){
    let data = {}

    let body = {
        "nome": document.querySelector("#nnprod").value,
        "valor": document.querySelector("#vvprod").value,
        "setor_id": Number(document.querySelector("#ssprod").value)
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    if (body.nome.length > 0 && body.nome.length > 0) {
        fetch(uri, options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Produto cadastrado 😀")
                    window.location.reload()
                } else {
                    alert("Erro ao cadastrar o produto 🙁")
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}


function postar2(){
    let data = {}

    let body = {
        "nome": document.querySelector("#nnset").value,
        "comissao": document.querySelector("#vvset").value,
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    };
    options.body = JSON.stringify(body)
    if (body.nome.length > 0 && body.nome.length > 0) {
        fetch("http://localhost:3000/setor", options)
            .then(resp => resp.status)
            .then(data => {
                if (data == 200) {
                    alert("Setor Adicionado😀")
                    window.location.reload()
                } else {
                    alert("Erro ao criar setor 🙁")
                }
            })
            .catch(err => alert("❌ Erro ao enviar dados. Erro:" + err));
    } else {
        alert("Preencha todos os campos obrigatórios ❗")
    }
}


const corpo = document.querySelector(".cont");
function mostrar(){
    fetch("http://localhost:3000/produtos")
    .then(res => { return res.json() })
    .then(coments => {
        coments.forEach(post => {
    
            let novoPost =  document.querySelector(".list").cloneNode(true)
            novoPost.classList.remove('model')
            novoPost.querySelector("#nome").innerHTML = post.nome;
            novoPost.querySelector("#valor").innerHTML = post.valor;
            novoPost.querySelector("#setor").innerHTML = post.setor_id;
            corpo.appendChild(novoPost)
        })
       
    })
}