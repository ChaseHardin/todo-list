import * as React from "react";

export default class AddTodoItemComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form className="todoForm form-horizontal">
                <div className="form-group">
                    <label htmlFor="task" className="col-md-2 control-label">Task</label>
                    <div className="col-md-10">
                        <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-2 text-right">
                        <input type="button" value="Add Item" className="btn btn-primary" onClick={() => {
                            this.setState({value: ''});
                            this.props.addTodoTask(this.state.value)}}/>
                    </div>
                </div>
            </form>
        )
    }
}