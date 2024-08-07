<template>
    <div class="body">
      <div class="container">
        <h1 class="login">Login</h1>
        <form @submit.prevent="submitForm">
          <!-- <input type="text" placeholder="Name" v-model="name"> -->
          <input type="email" placeholder="Email" v-model="email" />
          <input type="password" placeholder="Password" v-model="password" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        // Perform form validation and submission logic here
        console.log('Form submitted:', this.$data);
      }
    }
  };
  </script>
  
  <style scoped>
  .body {
    margin-top: 160px !important;
    height: 100%;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .container {
    width: 400px; /* Adjusted for a better layout */
    padding: 20px;
    border: 3px solid rgb(171, 204, 55); /* Green border */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow for depth */
    background-color: #fff; /* White background for contrast */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid rgb(171, 204, 55); /* Green border for input fields */
    border-radius: 4px;
    box-sizing: border-box;
  }
  
  button {
    width: 100%;
    padding: 12px;
    background-color: rgb(171, 204, 55); /* Green background color */
    color: #000; /* Black text color */
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-size: 16px;
  }
  
  button:hover {
    background-color: #a2b639; /* Darker green for hover effect */
  }
  
  .login {
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    color: #000; /* Black color for login title */
  }
  
  .login::first-letter {
    color: rgb(171, 204, 55); /* Green color for the first letter */
  }
  
  input::placeholder {
    color: #000; /* Black color for placeholder text */
  }
  </style>
  