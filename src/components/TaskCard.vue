<script setup lang="ts">
defineProps({
  task : {
    type : Object,
    required : true,
  },
})

</script>

<template>
  <div class="task-item" >
    <input type="checkbox" class="cbox" /> 
    <RouterLink :to="{name:'task-detail', params: {id:task.id}}">
    <span class="task-desc" >{{ task.title }}</span>
  </RouterLink>
    <button class="task-date" >&nbsp;&nbsp;&nbsp;x&nbsp;&nbsp;&nbsp;</button>
    <span class="task-date">{{ task.date }}</span>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 14px;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}

.task-item {
  background-color: #fff;
  width: 750px;
  margin: auto;
  border: 1px solid #f0f0f0;
  display: block;
  padding: 15px;
}

.task-item + .task-item {
  border-top: 1px solid #e3e3e3;
}
.task-desc {
  display: inline-block;
  vertical-align: middle;
  margin-left: 5%;
}

.task-date {
  margin-left: 5px;
  float: right;
}

.cb {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  margin-right: 5%;
  width: 15px;
  height: 15px;
  border: 1px solid #c4cbd2;
  border-radius: 50%;
}
</style>
