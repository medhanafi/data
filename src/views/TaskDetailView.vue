<script setup lang="ts">
import TaskService from '@/services/TaskService';
import { onMounted, ref } from 'vue'

const task =ref()

const props=defineProps({
  id : {
    required : true,
  },
})

onMounted(() => {
  TaskService.getTask(props.id)
    .then((response) => {
      console.info(response.data)
      task.value = response.data
    })
    .catch((error) => {
      console.log(error)
    })
})
</script>

<template>
  <div v-if="task" >
  <h1>Taks Details {{ task.id }}</h1>
  <div class="task-item" style="cursor:pointer;">
    <span >{{ task.title }}</span><br>
    <span >{{ task.desc }}</span><br>
    <span >{{ task.date }}</span>
  </div>
  </div>
</template>
