<template>
    <div>
        <h2 :class="myClass"> {{ title }} </h2>
        <button @click="changeColorRed">Change color to red</button>
         <button @click="changeColorBlue">Change color to blue</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

let myClass = ref('')

let props = defineProps({
    title: {
      type: String,
      default: "Default Title",
    }
})

function changeColorRed(){
  myClass.value = "red"
}

function changeColorBlue(){
  myClass.value = "blue"
}

// Deviens un objet ne n'utilisons plus de type primitif, mais plutot reactive nous utilisons ref

</script>

<style scoped>
.red{
  color: red;
}

.blue{
  color: blue;
}
</style>
