
<template>
  <div>
    <titleChangeColor title="SuperPropsTitle"></titleChangeColor>
    <countComponent counterDefault=10></countComponent>
    <emit-exemple @onPress="console.log('Button Clicked')">Change here</emit-exemple>

    <h1>Objet</h1>
    <ul>
      <li v-for="(value, key) in objet" :key="key">
        {{ key }} : {{ value }}
      </li>
    </ul>

    <h1> Counter {{counter}} </h1>
    <button  @click="submit">+2</button>
    <h2 v-if="counter > 5">Counter est superieur a 5</h2>
    <h2 v-else-if="counter > 15">Counter est superieur a 15</h2>

  </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import titleChangeColor from "@/components/titleChangeColor.vue"
import countComponent from "@/components/countComponent.vue"
import emitExemple from "./components/emitExemple.vue";

const objet = reactive({
  title: "Title",
  author: "Jhon Doe",
  pages: 100
})

function submit() {
  counter.value += 2
}

let counter = ref(0)

</script>

<style scoped>
.title{
  color: red;
}
</style>