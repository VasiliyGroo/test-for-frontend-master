<template>
  <div class="todo">
    <div class="todo__head">
      <h2 class="todo__head-title">Мой день</h2>
      <TheButton
        :class="{ 'btn--closed': isClosed }"
        @click="isClosed = !isClosed"
      />
    </div>
    <TheForm v-show="isClosed" />
    <!-- /.todo__head -->
    <div class="todo__list">
      <TodoList />
    <!-- /.todo__list-item -->
    </div>
    <!-- /.todo__list -->
  </div>
</template>

<script setup>
import TheButton from './TheButton.vue';
import TheForm from './TheForm.vue';
import TodoList from './TodoList.vue';
import { ref } from 'vue';
const isClosed = ref(false);
</script>
