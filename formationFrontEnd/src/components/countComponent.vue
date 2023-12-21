<template>
    <div>
        <h2> {{ number }} </h2>
        <button @click="addOne">Add One</button>
    </div>
</template>

<script setup>
import { ref, onMounted, defineProps } from "vue";

const number = ref('0');

const props = defineProps({
    counterDefault: {
        type: Number,
        default: 0
    }
})

onMounted(() => {
    number.value = props.counterDefault
});

function addOne(){
  number.value += 1;
}
</script>

<style scoped>
</style>
