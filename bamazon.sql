DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INTEGER(11) AUTO_INCREMENT NOT NULL,

    product_name VARCHAR(30) NOT NULL,

    department_name VARCHAR(30) NOT NULL,

    price DECIMAL(10,2) NOT NULL,

    stock_quantity INTEGER(10) NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("bananas","produce",0.59,500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("water bottles 36pk","water",3.00,100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("orange juice","juice",2.49,200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("magic bubble wand","trash",0.99,2500);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("graham crackers","dry goods",19.99,3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gif peanut butter","gifts",4.99,15000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("mustard","food",4.99,200);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("duct tape","hardware",9.99,1);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("apple","doctor repellant",59.99,365);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("fly swatter","fly repellant",27.36,103);