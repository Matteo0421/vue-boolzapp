
const { createApp } = Vue;

import { contacts } from "./database.js";
// scrivere tutto il codice dentro a createapp
createApp({

  // scrivere tutte le nostre variabili dentro Data
  data(){
    return{
      contacts,
      newMessage:'',
      activeContact:'0',
      searchUser: ''

    }
  },

  // si scrivono tutte le funzioni
  methods:{

    addMessage() {
      const orario = new Date().toLocaleString();
      
      this.contacts[this.activeContact].messages.push({ 
        date: orario, 
        message: this.newMessage, 
        status: 'sent' });
    
      this.newMessage = '';

      setTimeout(() => {
        const receivedMessage = {
            date: new Date().toLocaleString(),
            message: 'Ok',
            status: 'received'
        };
        this.contacts[this.activeContact].messages.push(receivedMessage);
    }, 1000);
  },

  changeActiveContact(index) {
    this.activeContact = index;
  }
  },

  computed: {
    filteredContacts() {
        return this.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.searchUser.toLowerCase())
        );
    }
},

//   created(){
//     this.activeContact = this.contacts[0]
//   }

}).mount('#app');