<template>
    <div class="container">
      <h1 class="feedback">Complaint</h1>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Title" v-model="complaint" />
        <input type="email" placeholder="Message" v-model="description" />
        <select name="Ticket" id="" v-model="ticket">
          <option value="">Pick type of Ticket</option>
          <option value="on-board">On Board</option>
          <option value="off-board">Off Board</option>
          <option value="IT-complaint">IT complaint</option>
        </select>
        <select name="Urgency" id="" v-model="urgency">
          <option value="">Pick type of urgency</option>
          <option value="urgent">Urgent</option>
          <option value="not-urgent">Not urgent</option>
        </select>
        <button type="submit" @click="addTickets()">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import VueCookies from 'vue-cookies';
  export default {
    data() {
      return {
        complaint: '',
        description: '',
        ticket: '',
        urgency: ''
      };
    },
    methods: {
      submitForm() {
        // Form submission logic here
        console.log('Form submitted:', this.title, this.message);
      },
     async  addTickets(){
        const userID = VueCookies.get('user_id');
      const task = {
        complaint: this.complaint,
        description: this.description,
        ticket: this.ticket,
        urgency:this.urgency,
        user_id: userID
      };
    await  this.$store.dispatch('addTickets', task);
      }
    },
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 145px !important;
    margin: 20px auto;
    width: 500px;
    background-color: #f9f9f9; /* Light background for better contrast */
    padding: 20px;
    border: 2px solid rgb(171, 204, 55); /* Green border */
    border-radius: 8px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
  }
  
  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  
  input,
  select {
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid rgb(171, 204, 55); /* Green border */
    border-radius: 4px; /* Rounded corners */
    font-size: 16px; /* Larger font size for readability */
  }
  
  input::placeholder {
    color: #000; /* Black color for placeholder text */
  }
  
  select option {
    color: #000; /* Black color for select options */
  }
  
  button {
    padding: 12px;
    background-color: rgb(171, 204, 55); /* Green background color */
    color: #000; /* Black text color */
    border: none;
    border-radius: 4px; /* Rounded corners */
    cursor: pointer;
    font-size: 16px; /* Larger font size for readability */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
  }
  
  button:hover {
    background-color: #a2b639; /* Darker green for hover effect */
  }
  
  .feedback {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    color: #000; /* Black color for the title */
  }
  
  .feedback::first-letter {
    color: rgb(171, 204, 55); /* Green color for the first letter */
  }
  </style>
  