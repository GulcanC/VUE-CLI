<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Job:</strong>
        {{ jobName }}
      </li>
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
      <li>
        <strong>Address:</strong>
        {{ address }}
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  props: ["name", "jobName", "phoneNumber", "emailAddress", "address"],

  data() {
    return {
      detailsAreVisible: false,
      contact: {
        name: "Gulcan COSKUN",
        job: "Chemical Engineer | Web Developper",
        phone: "07 61 85 30 59",
        email: "gulcancoskun.a@gmail.com",
        address: "Beauzelle/Toulouse/FRANCE",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
};
</script>
