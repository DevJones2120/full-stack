-- 	BANCO DE DADOS
create database copa_mundo;

use copa_mundo; 

-- Cria tabela "seleções" com 3 colunas
create table selecoes (
	id int auto_increment primary key,	-- ID único que aumenta automaticamente
    selecao varchar(80) not null,	-- Nome da seleção,  texto até 100 caracteres
    grupo char(1) not null	-- Grupo da seleção, apenas 1 letra (A, B, C...)
);

insert into selecoes (selecao, grupo) values
	("Alemanha", "A" ),
    ("Espanha", "B" ),
    ("Argentina", "C" ),
    ("Brasil", "D" ),
    ("Belgica", "E" ),
    ("França", "F" );
    
select * from selecoes;

delete from selecoes where id = 3;