-- Cria o banco de dados onde vamos trabalhar
create database smart_bank;

use smart_bank;

-- TABELA DE DADOS
create table dados (
	Id int auto_increment primary key,
	nome varchar(120) not null,
    idade varchar(3),
    email varchar(100) not null,
    telefone varchar(15),
    cpf varchar(20) not null,
    endereco varchar(120)
);

-- Registros
insert into dados (nome, idade, email, telefone, cpf, endereco) values
	("Eduardo Ramos", "60", "edu.ramos@orutos.com", "1245454-7", "454.545.545.55", "Rua Orutos F"),
    ("Juliana Clara", "85", "juliana@orutos.com", "545445454", "454.554.455.44", "Rua Orutos"),
	("Davi Jones", "21", "DevJones@orutos.com", "454542525", "454.454.545.54", "Rua Cotia");

select * from dados;
    