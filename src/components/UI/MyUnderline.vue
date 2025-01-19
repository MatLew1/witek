<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
//
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  text-align: center;
}

.underlineP {
  font-size: 2rem;
  color: #99cc00;
  margin-bottom: 1rem;
  font-weight: bold;
}

.underline {
  margin: 0 auto -40px;
  width: 60px;
  height: 4px;
  background-color: #99cc00;
}
</style>