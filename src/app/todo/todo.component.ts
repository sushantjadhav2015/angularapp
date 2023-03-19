import { Component, OnInit } from "@angular/core";
import { TodoService } from "../services/todo.service";

@Component({
  selector: "app-todo",
  templateUrl: "./todo.component.html",
  styleUrls: ["./todo.component.css"],
})
export class TodoComponent implements OnInit {
  todoList: any = [];
  newData: any;
  courseName: any;

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    // when list is update
    this.listTodos();
  }

  // send data to json server
  createTodo() {
    let todo = {
      id: new Date().getTime(),
      course: this.courseName,
      studentName: this.newData,
    };
    return this.todoService.create(todo).subscribe(
      (res) => {
        console.log("todo created", res);
        // when todo is created or updated automatically update on web so due to that we sre use todoList method here not in ngOnit
        this.listTodos();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // read data from json server
  listTodos() {
    this.todoService.list().subscribe(
      (res) => {
        console.log(res);

        this.todoList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // edit or update data
  editTodo(todo: any) {
    let editData = {
      id: new Date().getTime(),
      course: "Edited title",
    };

    this.todoService.update(todo.id, editData).subscribe((res) => {
      this.listTodos();
    });
  }

  // delete data
  deleteTodo(id: any) {
    this.todoService.delete(id).subscribe((res) => {
      console.log("Record has been deleted");
      this.listTodos();
    });
  }
}
