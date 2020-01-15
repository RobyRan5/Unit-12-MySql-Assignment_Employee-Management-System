var inquirer = require("inquirer");
var express = require("express");
var mysql = require("mysql");

var app = express();

var port = process.env.PORT || 3306;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs( { defualtLayout: "main" }));
app.set("view engine", "handlebars");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "5127617188",
    database: "employeedata_db"
});

connection.connect(function(err) {
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id" + connection.threadId);
});

function runSearch() {
    inquirer 
    .prompt({
        first_name: "Employee First Name",
        last_name: "Employee Last Name",
        title: "Employee Title",
        department_id: "Emplpyee Deparment ID",
        manager_id: "Employee Manager ID",
        salary: "Employee salary"
    })
    .then(function(answer) {
        switch (answer.action) {
            case "Find Employee Data"
            runSearch();
            break;
        }
    });
}

app.get("/Employee-Schema/:sql", function (req, res) {
    for (var i = 0; i < employeeSearch.length; i++) {
        if (employeeSearch[i].name === req.params.name) {
            return res.render("emloyeeData", employeeSearch[i]);
        }
    }
});

app.listen(PORT, function() {
    console.log("Server Listening on: https://localhost:" + PORT);
})
