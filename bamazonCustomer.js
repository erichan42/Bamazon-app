var mysql = require("mysql");
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "erichan",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    displayItems();
});

function displayItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for(var i = 0; i < res.length; i++) {
            if(res[i].stock_quantity > 0) {
                console.log("\nItem ID: " + res[i].item_id + " | Product Name: " + res[i].product_name + " | Price: $" + res[i].price)
            }
        }
        promptBuy(res);
    });
}

function promptBuy(data) {
    inquirer.prompt([
        {
            type:"input",
            name:"product",
            message:"What is the ID of the product you would like to buy?"
        },
        {
            type:"input",
            name:"quantity",
            message:"How many?"
        }
    ]).then(answers => {
        for(let i = 0; i < data.length; i++) {
            if(data[i].item_id === parseInt(answers.product)) {
                if(data[i].stock_quantity >= parseInt(answers.quantity)) {
                    var setQuantity = data[i].stock_quantity - parseInt(answers.quantity);
                    connection.query("UPDATE products SET ? WHERE ?",
                    [
                      {
                        stock_quantity: setQuantity
                      },
                      {
                        item_id: data[i].item_id
                      }
                    ],
                    function(err, res) {
                        if(err) throw err;
                        console.log("The total cost of the transaction is: $" + Math.round(data[i].price * parseInt(answers.quantity) * 100) / 100);
                        connection.end();
                    });
                } else {
                    console.log("Insufficient quantity!");
                    connection.end();
                }
            }
        }
    });
}