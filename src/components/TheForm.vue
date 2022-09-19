<template>
  <transition
    name="fade"
  >
    <form
      class="todo__form"
      @submit.prevent="onSubmit"
    >
      <input
        v-model="title"
        type="text"
        class="form-control"
        placeholder="Текст задания..."
        required
      >
    </form>
  </transition>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapMutations(['addTodo']),
    onSubmit() {
      this.addTodo({
        title: this.title,
        completed: false,
        id: 1
      });
      this.title = '';
    }
  }
};
</script>
