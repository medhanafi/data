<script setup lang="ts">
import { onMounted, ref } from 'vue'
import TaskCardVue from '../components/TaskCard.vue'
import TaskInput from '../components/TaskInput.vue'
import TaskService from '../services/TaskService'

onMounted(() => {
  TaskService.getTasks()
    .then((response) => {
      tasks.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
const tasks = ref(null)
</script>

<template>
  <h1>Taks list</h1>
  <class class="home">
    <TaskInput />
    <TaskCardVue v-for="task in tasks" :key="task.id" :task="task" />
  </class>
</template>
