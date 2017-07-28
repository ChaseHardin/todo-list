import * as React from "react";
import TodoItemsComponent from "../todo-items/todo-items.component";
import AddTodoItemComponent from "../add-todo-item/add-todo-item.component";

export default class TodoFormComponent extends React.Component {
    constructor(){
        super();
        this.state = {
            todoItems: [
                { id: '1', todo: 'Setup action on Les Paul', isComplete: false },
                { id: '2', todo: 'Longboard at Simpson', isComplete: true },
                { id: '3', todo: 'Learn Over React', isComplete: false }
            ]
        };

        this.deleteTodo = this.deleteTodo.bind(this);
        this.addTodo = this.addTodo.bind(this);
        this.updateTodo = this.updateTodo.bind(this);
    }

    deleteTodo (todo) {
        const index = this.state.todoItems.indexOf(todo);
        this.state.todoItems.splice(index, 1);

        this.setState({
            todoItems: this.state.todoItems
        });
    }

    addTodo(todo) {
        this.state.todoItems.push({ todo: todo, isComplete: false });

        this.setState({
            todoItems: this.state.todoItems
        });
    }

    updateTodo(todo) {
        todo.isComplete ? todo.isComplete = false : todo.isComplete = true;

        this.state.todoItems.filter(x => x.id === todo.id)[0] = todo;
        this.setState({
            todoItems: this.state.todoItems
        });
    }

    render() {
        return (
            <div className="row">
                <div className="container">
                    <div className="well col-xs-6 col-xs-offset-3">
                        <h1>To do: </h1>
                        <div name="todo-items">
                            <TodoItemsComponent
                                items={this.state.todoItems}
                                selectedTask={this.deleteTodo}
                                updateStatus={this.updateTodo}/>
                        </div>
                        <div name="add-todo-item">
                            <AddTodoItemComponent addTodoTask={this.addTodo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}