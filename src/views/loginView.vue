<template>
    <div class="body">
        <div class="container">
            <h1 class="login">Login</h1>
          <form action="">
            <!-- <input type="text" placeholder="Name" v-model="name"> -->
            <input type="email" placeholder="Email" v-model="email">
            <input type="password" placeholder="Password" v-model="password">
            <button type="submit" @click="submitForm">Submit</button>
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
            }
        },
        methods: {
            submitForm() {
                // Perform form validation and submission logic here
                console.log('Form submitted:',this.$data);
            }
        }
    }
</script>

<style scoped>
.body{
    margin-top: 160px !important;
    height: 100%;
    margin: 0;   
    display: flex;
    align-items: center;
    justify-content: center;
}
.container {
    width: 400px; /* Adjusted for a better layout */
    margin: 0 auto;
    padding: 20px;
    border: 3px solid #9ACDDA; /* Light blue border */
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Slightly stronger shadow for depth */
    background-color: #fff; /* White background for contrast */
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 2px solid #9ACDDA; /* Blue border for input fields */
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 12px;
    background-color: #D90700; /* Red background color */
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
    font-size: 16px;
}

button:hover {
    background-color: #b10600; /* Darker red for hover effect */
    
}

.login{
    text-align: center;
    font-size: 32px;
    margin-bottom: 20px;
    color: #000; /* Red color for login title */
}

.login::first-letter{
    color: #D90700;
}

input::placeholder{
  color: #D90700; /* Light blue placeholder text */
}






    
</style>