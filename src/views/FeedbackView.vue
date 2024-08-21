<template>
  <div class="container">
   
    <div id="formCarousel" class="carousel slide" data-bs-interval="false">
      <div class="carousel-inner">

        <!-- Form 1 -->
        <div class="carousel-item active">
          <form @submit.prevent="submitForm"> 
            <h1 class="feedback">IT Complaint</h1>
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

        <!-- Form 2 -->
        <div class="carousel-item">
          <form @submit.prevent="submitForm">
            <h1 class="feedback">ONBOARDING</h1>
            <!-- Different form fields for Form 2 -->
            <input type="text" placeholder="Full Name" v-model="field1" />
            <input type="text" placeholder="Official Title" v-model="field2" />
            <input type="text" placeholder="ID number" v-model="field2" />
            <input type="text" placeholder="first working day" v-model="field2" />
            <select name="Ticket" id="" v-model="ticket">
              <option value="">Within department will you be working?</option>
              <option value="on-board">Health 4 Life</option>
              <option value="off-board">Wellness</option>
              <option value="IT-complaint">Family Affairs</option>
              <option value="IT-complaint">Learders' Quest</option>
              <option value="IT-complaint">M&E</option>
              <option value="IT-complaint">Finance</option>
              <option value="IT-complaint">Fundraising</option>
              <option value="IT-complaint">Operations</option>
              <option value="IT-complaint">Academy</option>
              <option value="IT-complaint">Placements</option>
              <option value="IT-complaint">Green Solar</option>
              <option value="IT-complaint">LC Studio</option>
              <option value="IT-complaint">Director</option>
            </select>

            <select name="Ticket" id="" v-model="ticket">
              <option value="">Which device/s will the staff member require?</option>
              <option value="on-board">Desktop</option>
              <option value="off-board">Laptop</option>
              <option value="IT-complaint">Tablet</option>
              <option value="IT-complaint">Cellphone</option>
              <option value="IT-complaint">None</option>
            </select>

            <select name="Ticket" id="" v-model="ticket">
              <option value="">Which platforms would the new staff member need access to?</option>
              <option value="on-board">Life Choices email</option>
              <option value="off-board">Slack</option>
              <option value="IT-complaint">Microsoft Cloud</option>
              <option value="IT-complaint">Printer Access</option>
              <option value="IT-complaint">Snipe-IT</option>
              <option value="IT-complaint">Click Up</option>
              <option value="IT-complaint">hr.my</option>
            </select>

            <select name="Ticket" id="" v-model="ticket">
              <option value="">Is Admin access required on any of the following platforms?</option>
              <option value="on-board">PaperCut</option>
              <option value="off-board">Microsoft Workspace</option>
              <option value="IT-complaint">CCTV</option>
              <option value="IT-complaint">Remote access to server</option>
              <option value="IT-complaint">UniFi Wifi and Network</option>
              <option value="IT-complaint">Google Workspace</option>
              <option value="IT-complaint">Snipe-IT</option>
              <option value="IT-complaint">HR.my</option>
              <option value="IT-complaint">No admin access required</option>
            </select>
            <!-- code a checkbox here with 5 options -->
            <button type="submit" @click="addTickets()">Submit</button>
          </form>
        </div>

        <!-- Form 3 -->
        <div class="carousel-item">
          <form @submit.prevent="submitForm">
            <h1 class="feedback">OFFBOARDING</h1>
            <!-- Different form fields for Form 3 -->
            <input type="text" placeholder="Full Name" v-model="field3" />
            <input type="text" placeholder="Last working day (dd/mm/yyyy)?" v-model="field4" />
            <select name="Ticket" id="" v-model="ticket">
              <option value="">Which device/s will the staff member be returning?</option>
              <option value="on-board">Desktop</option>
              <option value="off-board">Laptop</option>
              <option value="IT-complaint">Tablet</option>
              <option value="IT-complaint">Cellphone</option>
              <option value="IT-complaint">None</option>
            </select>
            <button type="submit" @click="addTickets()">Submit</button>
          </form>
        </div>

      </div>
      <!-- Carousel controls -->
      <button class="carousel-control-prev" type="button" data-bs-target="#formCarousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#formCarousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

  
<script>
import { vModelCheckbox } from 'vue';
import VueCookies from 'vue-cookies';
export default {
  data() {
    return {
      complaint: '',
      description: '',
      ticket: '',
      urgency: '',
      field1: '',
      field2: '',
      field3: '',
      field4: ''
    };
  },
  methods: {
    submitForm() {
      // Form submission logic here
      console.log('Form submitted:', this.complaint, this.description, this.ticket, this.urgency);
    },
    async addTickets(){
      const userID = VueCookies.get('user_id');
      const task = {
        complaint: this.complaint,
        description: this.description,
        ticket: this.ticket,
        urgency: this.urgency,
        user_id: userID,
        field1: this.field1,
        field2: this.field2,
        field3: this.field3,
        field4: this.field4
      };
      await this.$store.dispatch('addTickets', task);
    }
  },
};
</script>

  
  <style scoped>

.container {
  margin-top: 50px !important;
  margin: 20px auto;
  width: 700px; /* Increased width to give more space */
  background-color: #f9f9f9; /* Light background for better contrast */
  padding: 20px;
  border: 2px solid rgb(171, 204, 55); /* Green border */
  border-radius: 8px; /* Rounded corners */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
}

.carousel-inner {
  padding: 0 70px; /* Add padding to give more space around the inputs */
}

.carousel-control-prev,
.carousel-control-next {
  width: 50px; /* Reduce the width of the controls so they don't overlap */
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
  