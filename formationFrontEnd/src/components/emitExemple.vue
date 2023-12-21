<script>
</script>

<template>
    <button @click="$emit('onPress')">
        <slot>Default Slot</slot>
    </button>
</template>
