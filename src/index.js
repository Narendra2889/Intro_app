var React = require('react');
var ReactDOM = require('react-dom');
var Show = require('./Show');
var shows = require('./shows');


ReactDOM.render(
   <Show show={shows} />,
    document.getElementById('root')
);
/*
// ?Function Constructor
var Employee = function(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Employee.prototype.getFullName = function() {
return this.firstName+ '' + this.lastName;    
};

var Engineer = function(firstName, lastName, field) {
    Employee.call(this, firstName, lastName);
    this.field = field;
}

//var nari = new Employee("narendrasai", "challa");
var test = new Engineer("Narendra sai","Challa","Engineer");

console.log("the values are", test);
*/