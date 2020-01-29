var myTaskArray = [];
//Adding string to an Array and return length of the Array
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array ");
    return myTaskArray.length;
}
function listAllTasks() {
    /*  for(let i = 0; i < myTaskArray.length; i++)
      {
          console.log();
      }*/
    console.log("List of items in the array is: ");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}
//Removing from an array
function deleteTask(task) {
    var index;
    index = myTaskArray.indexOf(task);
    if (index > -1) {
        myTaskArray.splice(index, 1);
        console.log("Item " + task + " has been removed from the Array ");
    }
    else {
        console.log("Item " + task + " is not in array. ");
    }
    return myTaskArray.length;
}
addTask(" Complete Part A ");
listAllTasks();
var itemInArray = addTask(" Complete PartB ");
console.log("Number of Items in Array is " + itemInArray);
var count = deleteTask(" Complete Part A ");
console.log("Number of Items in Array is " + count);
