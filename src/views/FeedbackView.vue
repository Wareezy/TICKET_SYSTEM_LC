<template>
    <div class="container">
        <h1 class="feedback">Complaint</h1>
      <form @submit.prevent="submitForm">
        <input type="text" placeholder="Title" v-model="title" />
        <input type="email" placeholder="Message" v-model="message" />
        <select name="" id="">
          <option value="">Pick type of urgency</option>
          <option value="urgent">Urgent</option>
          <option value="not-urgent">Not urgent</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        message: '',
      };
    },
    methods: {
      submitForm() {
        // Form submission logic here
        console.log('Form submitted:', this.title, this.message);
      },
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
    border: 2px solid #9ACDDA; /* Blue border */
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
    border: 2px solid #9ACDDA; /* Blue border */
    border-radius: 4px; /* Rounded corners */
    font-size: 16px; /* Larger font size for readability */
  }
  
  input::placeholder,
  select option {
    color: #D90700; /* Blue color for placeholder text */
  }
  
  button {
    padding: 12px;
    background-color: #D90700; /* Red background color */
    color: white;
    border: none;
    border-radius: 4px; /* Rounded corners */
    cursor: pointer;
    font-size: 16px; /* Larger font size for readability */
    transition: background-color 0.3s ease, transform 0.2s ease; /* Smooth transitions */
  }
  
  button:hover {
    background-color: #b10600; /* Darker red for hover effect */
    
  }

  .feedback {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    color: #000; /* Red color for login title */
  }

  .feedback::first-letter {
    color: #D90700;
  }
  

  </style>
  