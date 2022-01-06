<template>
  <section>
    <header>
      <h1>Informations</h1>
    </header>

    <new-contact @add-contact="addContact"></new-contact>
    <ul>
      <my-contact
        v-for="contact in contacts"
        :key="contact"
        :name="contact.name"
        :job-name="contact.job"
        :phone-number="contact.phone"
        :email-address="contact.email"
        :address="contact.address"
        @delete="deleteContact"
      ></my-contact>
    </ul>
  </section>
  <section id="section2">
    <header>
      <h1>VUE TOPICS</h1>
    </header>
    <div>
      <knowledge-base
        :topics="topics"
        @select-topic="activateTopic"
      ></knowledge-base>

      <active-element
        :topic-title="activeTopic && activeTopic.title"
        :text="activeTopic && activeTopic.fullText"
      >
      </active-element>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {
          name: "Gulcan COSKUN",
          job: "Web Developper",
          phone: "07 61 85 30 59",
          email: "gulcancoskun.a@gmail.com",
          address: "Beauzelle | Toulouse | FRANCE",
        },
      ],

      topics: [
        {
          id: "basics",
          title: "Vue CLI",
          description: "Vue CLI is a full system for rapid Vue.js development",
          fullText:
            "Vue CLI is the node installable command-line interface with which you can run Vue commands in the terminal. It is a powerful system for rapid Vue JS development, you can scaffold a new Vue project and prototype your app as you build in one command.",
        },

        {
          id: "components",
          title: "Components",
          description: "Components are reusable Vue instances",
          fullText:
            "One important feature of Vue is the ability to use components. Components are reusable Vue instances with custom HTML elements. Components can be reused as many times as you want or used in another component, making it a child component. Data, computed, watch, and methods can be used in a Vue component.",
        },

        {
          id: "deployment",
          title: "Deployment",
          description:
            "The dist directory is meant to be served by an HTTP server",
          fullText:
            "If you are using Vue CLI along with a backend framework that handles static assets as part of its deployment, all you need to do is make sure Vue CLI generates the built files in the correct location, and then follow the deployment instruction of your backend framework.",
        },
      ],
      activeTopic: null,
    };
  },

  methods: {
    addContact(name, job, phone, email, address) {
      const newPersonContact = {
        id: new Date().toISOString(),
        name: name,
        job: job,
        phone: phone,
        email: email,
        address: address,
      };
      this.contacts.push(newPersonContact);
    },

    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app h3 {
  font-size: 1.6rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
  text-align: center;
}
#app h4 {
  font-size: 1.4rem;
  border-bottom: 4px solid #ccc;
  color: #864ce2;
  margin: 0 0 1rem 0;
  text-align: center;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}

#section2 section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 80rem;
  padding: 1rem;
  border-radius: 12px;
}

#section2 ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

#section2 li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

#section2 h2 {
  margin: 0.75rem 0;
  text-align: center;
}

#section2 button {
  font: inherit;
  border: 1px solid #9d17eb;
  background-color: #9d17eb;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

#section2 button:hover,
#section2 button:active {
  background-color: #6a5874;
  border-color: #615870;
}
</style>
