export const mutations = {
  setTodos: (state, todos) => (state.todos = todos),

  newTodo: (state, todo) => (state.todos = [todo, ...state.todos]),

  removeTodo: (state, id) =>
    (state.todos = state.todos.filter(todo => todo.id !== id)),

  updateTodo: (state, updTodo) => {
    const index = state.todos.findIndex(todo => todo.id === updTodo.id);
    if (index !== -1) {
      state.todos.splice(index, 1, updTodo);
    }
  }
};
