import axios from 'axios'
import ServerActions from './actions/ServerActions'

const API = {
	getAllTodos() {
		axios.get('/api/todos')
			.then(res => res.data)
			.then(ServerActions.getTodos)
			.catch(console.error);
	},
	createTodo(todo) {
		axios.post('/api/todos', todo)
			.then(res => res.data)
			.then(ServerActions.getOneTodo)
			.catch(console.error);
	}
}

export default API;