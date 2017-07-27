import * as React from "react";

export default class TodoItemsComponent extends React.Component {
    render() {
        return (
            <ul>
                <li>{this.props.items}</li>
            </ul>
        )
    }
}