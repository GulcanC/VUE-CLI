<template>
  <li>
    <h4>{{ topicName }}</h4>
    <p>{{ description }}</p>
    <button @click="$emit('select-topic', id)">Learn More</button>
  </li>
</template>

<script>
export default {
  props: ["id", "topicName", "description"],
  emits: ["select-topic"],
};
</script>
