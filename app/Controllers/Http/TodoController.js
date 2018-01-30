'use strict'

const Todo = use('App/Models/Todo');

class TodoController {
    async index({ view }) {
        // Fetch some data
        const todos = await Todo.all();        
        return view.render('home', { todos: todos.toJSON() });
    };
};

module.exports = TodoController


