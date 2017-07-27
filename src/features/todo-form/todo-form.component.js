import * as React from "react";
import TodoItemsComponent from "../todo-items/todo-items.component";
import AddTodoItemComponent from "../add-todo-item/add-todo-item.component";

export default class TodoFormComponent extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="well col-xs-6 col-xs-offset-3">
                        <h1>To do: </h1>
                        <div name="todo-items">
                            <TodoItemsComponent />
                        </div>
                        <div name="add-todo-item">
                            <AddTodoItemComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}