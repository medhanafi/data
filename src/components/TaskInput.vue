<script setup lang="ts">


</script>

<template>
  <label class="task-item">
    <input type="text" class="field" />
    <button class="bt">Add</button>
  </label>
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
.field {
    width: 90%;
    height: 30px;
}
.bt {
    width: 10%;
    height: 30px;
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
