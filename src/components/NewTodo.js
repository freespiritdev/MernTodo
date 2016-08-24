import React, { Component } from 'react'
import TodoActions from '../actions/TodoActions'

export default class NewTodo extends Component {
	constructor() {
		super();

		this.state = {
			task: ''
		}
		this.changeTask = this.changeTask.bind(this);
		this.submit = this.submit.bind(this);
	}

	changeTask(event) {
		let task = event.target.value;
		this.setState({ task })
	}

	submit(event) {
		event.preventDefault();
		let { task } = this.state;

		TodoActions.createTodo({ task });
		this.setState({ task: '' });
	}

	render() {
		let { task } = this.state;

		return (
			<div>
				<form onSubmit={this.submit}>
					<div className="form-group">
						<label>Enter your task:</label>
						<input type="text" 
						className="form-control"
						placeholder="Pay Visa"
						value={task}
						onChange={this.changeTask}/>
					</div>
					<button type="submit" className="btn btn-info">Save</button>
				</form>
			</div>
		)
	}
}