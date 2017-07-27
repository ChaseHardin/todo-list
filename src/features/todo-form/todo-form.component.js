import * as React from "react";
import TodoItemsComponent from "../todo-items/todo-items.component";
import AddTodoItemComponent from "../add-todo-item/add-todo-item.component";

export default class TodoFormComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            todoItems: [
                { id: '1', todo: 'Attend Bethel Music Friday' },
                { id: '2', todo: 'Go Hiking Sunday at 2pm' },
                { id: '3', todo: 'Longboard at Simpson' }
            ],
            selected: {}
        };

        this.updateItem = this.updateItem.bind(this);
    }

    updateItem (item) {
        console.log('Selected Value:: ', item);
    }

    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="well col-xs-6 col-xs-offset-3">
                        <h1>To do: </h1>
                        <div name="todo-items">
                            <TodoItemsComponent items={this.state.todoItems} selectedTask={this.updateItem}/>
                        </div>
                        <div name="add-todo-item">
                            <AddTodoItemComponent/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}