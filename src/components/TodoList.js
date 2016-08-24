import React, { Component } from 'react'
import Item from './Item'
import TodoStore from '../stores/TodoStore'
import TodoActions from '../actions/TodoActions'

export default class TodoList extends Component {
	constructor() {
		super();

		this.state = {
			todos: TodoStore.getAll()
		}

		this._onChange = this._onChange.bind(this);
	}

	componentDidMount() {
		TodoActions.getAllTodos();
		TodoStore.startListening(this._onChange);
	}
	componentWillUnmount() {
		TodoStore.stopListening(this._onChange);
	}

	_onChange() {
		this.setState({
			todos: TodoStore.getAll()
		});
	}

	render() {
		const Items = this.state.todos.map(todo => {
			return (
				<Item key={todo._id} {...todo}/>
			)
		})

		return (
			<table className="table">
				<thead>
					<tr>
						<th>Task</th>
						<th>Created At</th>
						<th>Completed</th>
					</tr>
				</thead>
				<tbody>
					{Items}
				</tbody>
			</table>
		)
	}
}