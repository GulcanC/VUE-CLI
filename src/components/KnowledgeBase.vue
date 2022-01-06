<template>
  <section>
    <h3>Select a Topic</h3>
    <knowledge-grid
      :topics="topics"
      @select-topic="$emit('select-topic', $event)"
    ></knowledge-grid>
  </section>
</template>

<script>
export default {
  props: ["topics"],
  emits: ["select-topic"],
};
</script>
