import * as React from "react";

export default class TodoItemsComponent extends React.Component {
    constructor(props) {
        super(props);
    }

render() {
        return (
            <ul className="list-group">
                {
                    this.props.items.map((item) => {
                        return (
                            <li key={item.id} className={"list-group-item" + (item.isComplete ? ' list-group-item-success' : '')}>
                                {item.todo}
                                <div className="pull-right">
                                    <button
                                        id={"btn-success" + (item.id)}
                                        type="button"
                                        className="btn btn-xs btn-success"
                                        onClick={() => { this.props.updateStatus(item)}}
                                        >&#x2713;
                                    </button> <button
                                        type="button"
                                        className="btn btn-xs btn-danger"
                                        onClick={() => {this.props.selectedTask(item)}}
                                        >&#xff38;
                                    </button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        )
    }
}