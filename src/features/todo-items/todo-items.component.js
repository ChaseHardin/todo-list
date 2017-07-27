import * as React from "react";

export default class TodoItemsComponent extends React.Component {
    render() {
        return (
            <ul className="list-group">
                {
                    this.props.items.map((item) => {
                        return (
                            <li className="list-group-item">
                                {item.todo}
                                <div className="pull-right">
                                    <button type="button" className="btn btn-xs btn-success">&#x2713;</button> <button type="button" className="btn btn-xs btn-danger">&#xff38;</button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}