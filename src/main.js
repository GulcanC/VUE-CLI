import { createApp } from "vue";

import App from "./App.vue";
import MyContact from "./components/MyContact.vue";
import NewContact from "./components/NewContact.vue";
import ActiveElement from "./components/ActiveElement.vue";
import KnowledgeBase from "./components/KnowledgeBase.vue";
import KnowledgeElement from "./components/KnowledgeElement.vue";
import KnowledgeGrid from "./components/KnowledgeGrid.vue";

const app = createApp(App);

app.component("my-contact", MyContact);
app.component("new-contact", NewContact);
app.component("active-element", ActiveElement);
app.component("knowledge-base", KnowledgeBase);
app.component("knowledge-element", KnowledgeElement);
app.component("knowledge-grid", KnowledgeGrid);

app.mount("#app");
