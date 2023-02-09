drop database if exists deliveri;
create database deliveri charset = UTF8 collate = utf8_general_ci;
use deliveri;

create table entregador(
    id primary key not null,
    nome varchar(50) not null,
    email varchar(50) not null,
    senha varchar(30)
    veiculo varchar(15) not null
);

create table pedidos(

);