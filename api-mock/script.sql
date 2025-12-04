-- Cria o banco de dados onde vamos trabalhar
create database sistema_produtos;

use sistemas_produtos;

-- Cria a tabela "produtos" com algumas colunas básicas
create table produtos (
	id int auto_increment primary key, -- ID ÚNICO
    nome varchar(100) not null, -- Nome produto
    email varchar(120) not null, -- Email (exemplo genérico)
    telefone varchar(20), -- Telefone
    cpf varchar(14), -- Cpf
    endereco varchar(150) -- Endereço simples
);

-- Insere dois registros
insert into produtos (nome, email, telefone, cpf, endereco) values
	("Eduardo Ramos", "edu.ramos@orutos.com", "1245454-7", "454.545.545.55", "Rua Orutos F"),
    ("Juliana Clara", "juliana@orutos.com", "545445454", "454.554.455.44", "Rua Orutos"),
	("Davi Jones", "DevJones@orutos.com", "454542525", "454.454.545.54", "Rua Cotia");


-- Seleciona o registro onde o id = 1
select * from produtos where id = 5;

-- Seleciona a tabela produtos
select * from produtos;

-- Deleta o registro onde o id = 1
delete from produtos where id = 1;

-- Inserir mais um registro
insert into produtos (nome, email, telefone, cpf, endereco) values
	("Zeze", "zeze@gmail.com", "4454347474", "454545445454", "Rua da Crosser");
    
delete from produtos where id = 12;

-- Atualiza o nome onde o id for 13
update produtos
set nome = "Zezé Campos Dev"
where id = 13;

select * from produtos