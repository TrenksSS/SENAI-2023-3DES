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

module.exports = {
    create,
    read
 }