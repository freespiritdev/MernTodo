const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
	task: { type: String, required: true }, 
	isComplete: { type: Boolean, required: true, default: false }, 
	createdAt: { type: Date, required: true, default: Date.now }
});

todoSchema.statics.toggle = function(id, callback) {
	this.findById(id, (err, todo) => {
		if(err) return callback(err);

		todo.isComplete = !todo.isComplete;
		todo.save(callback);
	})
};

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;