"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.myTaskArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array ");
        return this.myTaskArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        console.log("List of items in the array is: ");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index;
        index = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("Item " + task + " has been removed from the Array ");
        }
        else {
            console.log("Item " + task + " is not in array. ");
        }
        return this.myTaskArray.length;
    };
    return Todo;
}());
var todo1 = new Todo();
todo1.addTask(" part a");
todo1.listAllTasks();
todo1.deleteTask(" part z ");
