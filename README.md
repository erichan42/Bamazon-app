# HW - Bamazon-app

## Getting Started
- Run the command 'node bamazonCustomer.js' into git bash or any other applicable command prompt
- Follow the prompted instructions

## Instructions
1. Create a MySQL Database called bamazon.
2. Then create a Table inside of that database called products.
3. The products table should have each of the following columns:
    - item_id (unique id for each product)
    - product_name (Name of product)
    - department_name
    - price (cost to customer)
    - stock_quantity (how much of the product is available in stores)
4. Populate this database with around 10 different products. (i.e. Insert "mock" data rows into this database and table).
5. Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
6. The app should then prompt users with two messages.
7. The first should ask them the ID of the product they would like to buy.
8 .The second message should ask how many units of the product they would like to buy.
9. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
    - If not, the app should log a phrase like Insufficient quantity!, and then prevent the order from going through.
10. However, if your store does have enough of the product, you should fulfill the customer's order.
    - This means updating the SQL database to reflect the remaining quantity.
    - Once the update goes through, show the customer the total cost of their purchase.
## Technologies Used
- Javascript
- Node.js
- NPM (Prompt, MySql)

## Code Preview

[Running the MySql schema file 'bamazon.sql'](https://imgur.com/XspCcwL)

[The schema yields this table](https://imgur.com/e4T6AsO)

[Running 'node bamazonCustomer.js' and picking 100 of item_id 4 gives us a transaction total of $99](https://imgur.com/zHtoUcz)

[The stock quantity of the item fell by the amount we defined](https://imgur.com/3EudUIs)

[However, if we choose more than available, it will not run](https://imgur.com/z6dEow7)
