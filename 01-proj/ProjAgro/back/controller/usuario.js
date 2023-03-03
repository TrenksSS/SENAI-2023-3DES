const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let usuario = await prisma.usuario.create({
        data: req.body
    });

    res.status(200).json(usuario).end();
}

const read = async (req, res) => {
    let usuario = await prisma.usuario.findMany();

    res.status(200).json(usuario).end();
}

const login = async(req, res) => {
    const usuario = await prisma.usuario.findFirstOrThrow({
      where: {
        email: req.body.email    }
    }).then((value) => {return(value)})
    .catch((err) => {return {"erro": "Usuário não encontrado", "validation": false}})
    if (usuario.erro == null) {
      bcrypt.compare(req.body.senha, usuario.senha).then((value) => {
        if (value) {
          let data = {"uid": usuario.id, "role": usuario.nivel}
            if(err2 =! null){
                res.status(200).json({token,"uid": usuario.id, "name": usuario.nome, "nivel": usuario.nivel, "validation": true}).end()
            } else {
                res.status(500).json().end()
            }
        } else {
          res.status(201).json({"erro": "Senha inválida", "validation": false}).end()
        }
      })
    } else {
      res.status(404).json(usuario).end()
    } 
  }


module.exports = {
    create,
    read
 }