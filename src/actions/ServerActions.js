import AppDispatcher from '../AppDispatcher'

const ServerActions = {
	getTodos(todos) {
		AppDispatcher.dispatch({
			type: 'GET_TODOS',
			todos
		})
	},
	getOneTodo(todo) {
		AppDispatcher.dispatch({
			type: 'GET_ONE_TODO',
			todo
		})
	}
}

export default ServerActions