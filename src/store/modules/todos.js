import axios from 'axios';

export default {
  state: {
    todos: []
  },

  getters: {
    allTodos: (state) => {
      return state.todos;
    }
  },

  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
      commit('setTodos', response.data);
    },
    async deleteTodo({ commit }, id) {
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit('removeTodo', id);
    },
    async updateTodo({ commit }, updatedTodo) {
      const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
      commit('updateTodo', response.data);
    }
  },

  mutations: {
    setTodos: (state, todos) => {
      (state.todos = todos);
    },
    removeTodo: (state) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    updateTodo: (state, updatedTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    },
    addTodo: (state, newTodo) => state.todos.unshift(newTodo)
  }
};
