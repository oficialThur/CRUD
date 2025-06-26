create database CrudDb;

use CrudDb;

create table Users(
	id int auto_increment primary key,
    Nome varchar(200),
    Email varchar(200)	
);