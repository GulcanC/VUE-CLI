<template>
  <form @submit.prevent="submitData">
    <div>
      <label for="">Name :</label>
      <input type="text" v-model="enteredName" />
    </div>

    <div>
      <label for="">Job :</label>
      <input type="text" v-model="enteredJob" />
    </div>

    <div>
      <label for="">Phone :</label>
      <input type="tel" v-model="enteredPhone" />
    </div>

    <div>
      <label for="">E-mail :</label>
      <input type="email" v-model="enteredEmail" />
    </div>

    <div>
      <label for="">Address :</label>
      <input type="text" v-model="enteredAddress" />
    </div>

    <div>
      <button>Add Your Contact Informations</button>
    </div>
  </form>
</template>

<script>
export default {
  emits: ["add-contact"],
  data() {
    return {
      enteredName: "",
      enteredJob: "",
      enteredPhone: "",
      enteredEmail: "",
      enteredAddress: "",
    };
  },
  methods: {
    submitData() {
      this.$emit(
        "add-contact",
        this.enteredName,
        this.enteredJob,
        this.enteredPhone,
        this.enteredEmail,
        this.enteredAddress
      );
    },
  },
};
</script>
