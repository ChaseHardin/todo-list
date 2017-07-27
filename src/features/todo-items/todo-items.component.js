import * as React from "react";

export default class TodoItemsComponent extends React.Component {
    render() {
        return (
            <ul className="list-group">
                <li className="list-group-item list-group-item-success">Bethel Concert Friday
                    <div className="pull-right">
                        <button type="button" className="btn btn-xs btn-success">&#x2713;</button> <button type="button" className="btn btn-xs btn-danger">&#xff38;</button>
                    </div>
                </li>
                <li className="list-group-item">Hiking Sunday Afternoon
                    <div className="pull-right">
                        <button type="button" className="btn btn-xs btn-success">&#x2713;</button> <button type="button" className="btn btn-xs btn-danger">&#xff38;</button>
                    </div>
                </li>

            </ul>

        )
    }
}