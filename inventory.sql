-- CREATING DATABASE
CREATE DATABASE inventory_management;
USE inventory_management;

-- CREATING INVENTORY TABLES
-- users table
CREATE TABLE users (
  id int,
  username varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
  PRIMARY KEY (id)
);

-- admnins table
CREATE TABLE admins (
  id int,
  full_name varchar(255) NOT NULL,
  email varchar(255) NOT NULL,
  home_address varchar(255),
  permissions varchar(255) NOT NULL,
  FOREIGN KEY (id) REFERENCES users(id),
  PRIMARY KEY (id)
);

-- clients table
CREATE TABLE clients (
  id int,
  first_name varchar(255) NOT NULL,
  last_name varchar(255) NOT NULL,
  email_address varchar(255) NOT NULL,
  home_address varchar(255),
  postal_code varchar(10),
  phone_no varchar(20),
  city varchar(255),
  FOREIGN KEY (id) REFERENCES users(id),
  PRIMARY KEY (id)
);

-- categories
CREATE TABLE categories (
  id int,
  name varchar(255) NOT NULL,
  description varchar(255),
  PRIMARY KEY (id)
);

-- products
CREATE TABLE products (
  id int,
  name varchar(255) NOT NULL,
  price varchar(10) NOT NULL,
  size varchar(50),
  unit varchar(20),
  description varchar(255),
  FOREIGN KEY (id) REFERENCES categories (id),
  FOREIGN KEY (id) REFERENCES clients(id),
  PRIMARY KEY (id)
);

-- orders
CREATE TABLE orders (
  id int,
  order_date date NOT NULL,
  order_number varchar(255) NOT NULL,
  delivery_fee varchar(10),
  payment_status varchar(20) NOT NULL,
  shipping_city varchar(255),
  postal_code varchar(10),
  FOREIGN KEY (id) REFERENCES products (id),
  PRIMARY KEY (id)
);


-- INSERTING INTO TABLES && CRUD OPERATIONS

-- inserting into users table
insert into users 
(id, username, password) 
values (1, 'nsray', '12458')

-- insert into users
insert into users 
(id, username, password) 
values (2, 'edoz', '5486')

-- insert into users
insert into users
(id, username, password) 
values (3, 'kens', '9875')


-- select all users
select * from users

-- update a user
update users 
set username = 'dozi' 
where id = 2

-- delete a user
delete from users
where id = 3

-- select all users based on column name
select id, username, password from users
where username = 'ebuka' or id = 2


-- inserting into admins table
insert into admins 
(id, full_name, email, home_address, permissions) 
values (1, 'nsray nsiegbunam', 'han@gmail.com', 'lekki lagos', 'CRUD')

insert into admins 
(id, full_name, email, home_address, permissions) 
values (2, 'Ossy nsiegbunam', 'osyn@gmail.com', 'enugu', 'CRUD')

-- select all admins
select * from admins

-- update an admin
update admins
set full_name= 'ebuka eze' 
where id = 2

-- delete an admin
delete from admins
where id = 3

-- select all admins based on column name
select full_name, email, home_address, permissions from admins
where full_name = 'ebuka eze' or id = 2


-- inserting into clients table
insert into clients 
(id, first_name, last_name, email_address, home_address, postal_code, phone_no, city) 
values (1, 'ray', 'john', 'rj@gmail.com', 'lekki lagos', '55446', '+234897456', 'lagos')

insert into clients 
(id, first_name, last_name, email_address, home_address, postal_code, phone_no, city) 
values (2, 'kene', 'eric', 'ke@gmail.com', 'lekki lagos', '55446', '+2347695156', 'lagos')

-- select all clients
select * from clients

-- update a client
update clients
set first_name = 'ebuka' 
where id = 2

-- delete a client
delete from clients
where id = 3

-- select all clients based on column name
select id, first_name, last_name, email_address, home_address, postal_code, phone_no, city from clients
where first_name = 'ebuka' or id = 2


-- inserting into categories table
insert into categories
(id, name, description) 
values (1, 'drugs', 'for treatments of cold')

insert into categories
(id, name, description) 
values (2, 'food', 'for your special delicacies')

insert into categories
(id, name, description) 
values (3, 'drinks', 'for exercises')

-- select all categories
select * from categories

-- update a category
update categories 
set name = 'cosmetics' 
where id = 2

-- delete a category
delete from categories
where id = 3

-- select all categories based on column name
select id, name, description from categories
where name = 'drugs' or id = 1

-- inserting into products table
insert into products 
(id, name, price, size, unit, description) 
values (1, 'theraflu', '1200', 'small', '2', 'excellent for cold treatment')

-- inserting into products table
insert into products 
(id, name, price, size, unit, description) 
values (2, 'strepsils', '1000', 'medium', '1', 'excellent for cold treatment')

-- select all products
select * from products

-- update a product
update products 
set name = 'sinex' 
where id = 2

-- delete a product
delete from products
where id = 2

-- select all products based on column name
select id, name, price, size, unit, description from products
where price = '1200' or id = 1


-- inserting into orders table
insert into orders
(id, order_date, order_number, delivery_fee, payment_status, shipping_city, postal_code) 
values (1, '2023-09-08', '225', '$41', 'paid', 'lagos', '55544')

-- select all orders
select * from orders

-- update an orders
update orders
set payment_status = 'paid' 
where id = 1

-- delete a orders
delete from orders
where id = 1

-- select all orders based on column name
select (id, order_date, order_number, delivery_fee, payment_status, shipping_city, postal_code) from orders
where delivery_fee = '$41' or id = 1
