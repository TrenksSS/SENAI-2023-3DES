drop database if exists lista;
create database lista charset=UTF8 collate utf8_general_ci;
use lista;

create table tarefa(
    id integer auto_increment not null primary key,
    descricao varchar(100) not null,
    hora_comeco time,
    hora_fim time,
    status varchar(30) not null
);

insert into tarefa values (default,"Lavar a calçada conversando com a rosangela", CURDATE(),CURTIME(),Aberta);

select * from tarefa;