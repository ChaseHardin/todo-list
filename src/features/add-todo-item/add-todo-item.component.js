import * as React from "react";

export default class AddTodoItemComponent extends React.Component {
    render() {
        return (
            <form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
                <div className="form-group">
                    <label htmlFor="task" className="col-md-2 control-label">Task</label>
                    <div className="col-md-10">
                        <input type="text" id="task" ref="task" className="form-control" placeholder="Add a new item to your list..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-2 text-right">
                        <input type="submit" value="Save Item" className="btn btn-primary" />
                    </div>
                </div>
            </form>
        )
    }
}