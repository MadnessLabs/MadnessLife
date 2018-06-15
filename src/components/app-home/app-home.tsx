import { Component, Element, Prop, State } from "@stencil/core";
import { DatabaseService } from "../../services/database";
import { APIService } from "../../services/api";

@Component({
  tag: "app-home",
  styleUrl: "app-home.scss"
})
export class AppHome {
  @Element() appHomeEl: HTMLAppHomeElement;

  @Prop() api: APIService;
  @Prop() db: DatabaseService;

  @State() todos: { task: string }[];

  /**
   * Adds a todo list item with the API
   */
  addTodo(event: UIEvent) {
    event.preventDefault();
    const taskInputEl: HTMLInputElement = this.appHomeEl.querySelector(
      "#task-input input"
    );

    this.api
      .post("todoAdd", {
        task: taskInputEl.value
      })
      .then(() => {
        this.getTodos();
      })
      .catch(error => {
        console.log(error);
      });
  }

  getTodos() {
    this.db
      .list("todos")
      .then(todos => {
        console.log("test");
        this.todos = todos;
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidLoad() {
    this.getTodos();
  }

  render() {
    return (
      <div>
        <ion-card>
          <ion-list>
            {this.todos
              ? this.todos.map(todo => <ion-item>{todo.task}</ion-item>)
              : null}
          </ion-list>
        </ion-card>
        <ion-card>
          <form onSubmit={(event: UIEvent) => this.addTodo(event)}>
            <ion-input id="task-input" placeholder="Add Todo Here!" />
            <ion-button type="submit">Add</ion-button>
          </form>
        </ion-card>
      </div>
    );
  }
}
