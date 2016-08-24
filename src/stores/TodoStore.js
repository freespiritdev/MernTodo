import { EventEmitter } from 'events'
import AppDispatcher from '../AppDispatcher'
import uuid from 'uuid'

let _todos = [];

class TodoStore extends EventEmitter {
	constructor() {
		super();

		AppDispatcher.register(action => {
			switch(action.type) {
				case 'GET_TODOS':
					_todos = action.todos;
					this.emit('Change');
					break;
				case 'GET_ONE_TODO':
					var { todo } = action;
					_todos.push(todo);
					this.emit('Change');
					break;
				case 'CREATE_TODO':
				var { todo } = action;

				todo._id = uuid();
				todo.createdAt = Date.now();
				todo.isComplete = false;

				_todos.push(todo);
				this.emit('Change');
				break;
			}
		});
	}
	startListening(callback) {
		this.on('Change', callback);
	}

	stopListening(callback) {
		this.removeListener('Change', callback);
	}
	getAll() {
		return _todos;
	}
}

export default new TodoStore();