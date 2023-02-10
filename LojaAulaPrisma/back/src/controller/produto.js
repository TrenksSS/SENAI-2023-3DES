const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let produto = await prisma.produto.create({
        data: req.body
    });

    res.status(200).json(produto).end();
}

const read = async (req, res) => {
    let produto = await prisma.produto.findMany();

    res.status(200).json(produto).end();
}


module.exports = {
   create,
   read
}