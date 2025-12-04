-- Cria o banco de dados onde vamos trabalhar
create database smart_bank;

use smart_bank;

create table dados (
	Id int auto_increment primary key,
	nome varchar(120) not null,
    idade varchar(3),
    email varchar(100) not null,
    telefone varchar(15),
    cpf varchar(20) not null,
    endereco varchar(120)

)