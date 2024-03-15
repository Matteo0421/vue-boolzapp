
const { createApp } = Vue;

import { contacts } from "./database";
// scrivere tutto il codice dentro a createapp
createApp({

  // scrivere tutte le nostre variabili dentro Data
  data(){
    return{
      contacts,
      newMessage:'',

    }
  },

  // si scrivono tutte le funzioni
  methods:{

    addMessage() {
      const orario = new Date().toLocaleString();
      
      const index = 0; 
      this.contacts[index].messages.push({ 
        date: orario, 
        message: this.newMessage, 
        status: 'sent' });
    
      this.newMessage = '';
  }
  }

}).mount('#app');