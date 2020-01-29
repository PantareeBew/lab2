import { myInterface } from './interface';

class Todo implements myInterface {

    myTaskArray: Array<string> = [];

    addTask(task: string): number {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array ");
        return this.myTaskArray.length;
    }

    listAllTasks(): void {    
        console.log("List of items in the array is: ");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    }

    deleteTask(task: string): number {
        let index: number;
        index = this.myTaskArray.indexOf(task);
        if (index > -1) {
            this.myTaskArray.splice(index, 1);
            console.log("Item " + task + " has been removed from the Array ");
        }
        else{
            console.log("Item " + task + " is not in array. ");
        }
        return this.myTaskArray.length;
    }
}
let todo1 = new Todo();
todo1.addTask(" part a");
todo1.listAllTasks();
todo1.deleteTask(" part z ");