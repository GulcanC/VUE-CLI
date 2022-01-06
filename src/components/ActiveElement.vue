<template>
  <section>
    <h4>
      {{ topicTitle }}
    </h4>
    <p>
      {{ text }}
    </p>
  </section>
</template>

<script>
export default {
  props: ["topicTitle", "text"],
};
</script>
