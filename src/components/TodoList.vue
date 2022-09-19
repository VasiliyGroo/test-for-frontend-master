<template>
  <div
    v-for="todo in allTodos"
    :key="todo.id"
    class="todo__list-item"
    :class="{ 'todo__list-item_completed': todo.completed }"
    @click="onClick(todo)"
  >
    <Keypress
      key-event="keyup"
      :key-code="8 || 46"
      @success="deleteTodo(todo.id)"
    />
    <div class="todo__list-item-info">
      <h4 class="todo__list-item-info-title">
        {{ todo.title }}
      </h4>
      <h6 class="todo__list-item-info-description">
        {{ todo.title }}
      </h6>
      <!-- /.todo__list-item-info -->
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Keypress from 'vue-keypress';
export default {
  components: { Keypress },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo', 'updateTodo']),
    onClick(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };
      this.updateTodo(updatedTodo);
    }
  }
};
</script>
