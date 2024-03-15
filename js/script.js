
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

    }
  },

  // si scrivono tutte le funzioni
  methods:{

    addMessage() {
      const orario = new Date().toLocaleString();
      
      const index = 0; 
      this.contacts[this.activeContact].messages.push({ 
        date: orario, 
        message: this.newMessage, 
        status: 'sent' });
    
      this.newMessage = '';
  },

  changeActiveContact(index) {
    this.activeContact = index;
  }
  },

//   created(){
//     this.activeContact = this.contacts[0]
//   }

}).mount('#app');