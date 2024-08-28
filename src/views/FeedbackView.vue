<template>
  <div class="container">
    <div id="formCarousel" class="carousel slide" data-bs-interval="false">
      <div class="carousel-inner">

        <!-- Form 1 -->
        <div class="carousel-item active">
          <form @submit.prevent="submitForm"> 
            <h1 class="feedback">IT Complaint</h1>
            <input type="text" placeholder="Title" v-model="complaint" />
            <input type="text" placeholder="Message" v-model="description" />
            <input type="text" placeholder="Ticket Assignment" v-model="assignment" />
            <select name="Status" id="" v-model="status">
              <option value="">Ticket status</option>
              <option value="Unattended">Unattended</option>
              <option value="In_Progress">In Progress</option>
              <option value="Completed">Completed</option>
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
            <input type="text" placeholder="Full Name" v-model="fullname" />
            <input type="text" placeholder="Official Title" v-model="official_title" />
            <input type="text" placeholder="ID number" v-model="ID" />
            <input type="text" placeholder="First working day" v-model="first_work" />
            <select name="Department" id="" v-model="department">
              <option value="">Within department will you be working?</option>
              <option value="Health 4 Life">Health 4 Life</option>
              <option value="Wellness">Wellness</option>
              <option value="Family Affairs">Family Affairs</option>
              <option value="Leaders' Quest">Leaders' Quest</option>
              <option value="M&E">M&E</option>
              <option value="Finance">Finance</option>
              <option value="Fundraising">Fundraising</option>
              <option value="Operations">Operations</option>
              <option value="Academy">Academy</option>
              <option value="Placements">Placements</option>
              <option value="Green Solar">Green Solar</option>
              <option value="LC Studio">LC Studio</option>
              <option value="Director">Director</option>
            </select>

            <select name="Device" id="" v-model="device">
              <option value="">Which device/s will the staff member require?</option>
              <option value="Desktop">Desktop</option>
              <option value="Laptop">Laptop</option>
              <option value="Tablet">Tablet</option>
              <option value="Cellphone">Cellphone</option>
              <option value="None">None</option>
            </select>

            <select name="Platform" id="" v-model="platform">
              <option value="">Which platforms would the new staff member need access to?</option>
              <option value="Life Choices email">Life Choices email</option>
              <option value="Slack">Slack</option>
              <option value="Microsoft Cloud">Microsoft Cloud</option>
              <option value="Printer Access">Printer Access</option>
              <option value="Snipe-IT">Snipe-IT</option>
              <option value="Click Up">Click Up</option>
              <option value="hr.my">hr.my</option>
            </select>

            <select name="Access" id="" v-model="access">
              <option value="">Is Admin access required on any of the following platforms?</option>
              <option value="PaperCut">PaperCut</option>
              <option value="Microsoft Workspace">Microsoft Workspace</option>
              <option value="CCTV">CCTV</option>
              <option value="Remote access to server">Remote access to server</option>
              <option value="UniFi Wifi and Network">UniFi Wifi and Network</option>
              <option value="Google Workspace">Google Workspace</option>
              <option value="Snipe-IT">Snipe-IT</option>
              <option value="HR.my">HR.my</option>
              <option value="No admin access required">No admin access required</option>
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
            <input type="text" placeholder="Full Name" v-model="fullname" />
            <input type="text" placeholder="Last working day (dd/mm/yyyy)" v-model="last_day" />
            <select name="Device_Off" id="" v-model="return_device">
              <option value="">Which device/s will the staff member be returning?</option>
              <option value="Desktop">Desktop</option>
              <option value="Laptop">Laptop</option>
              <option value="Tablet">Tablet</option>
              <option value="Cellphone">Cellphone</option>
              <option value="None">None</option>
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
import VueCookies from 'vue-cookies';
export default {
  data() {
    return {
      complaint: '',
      description: '',
      urgency: '',
      assignment: '',
      status: '',
      fullname: '',
      official_title: '',
      // first_work: '',
      department: '',
      device: '',
      platform: '',
      access: '',
      return_device: '',
      // last_day: '',
    };
  },
  methods: {
    submitForm() {
      // Form submission logic here
      console.log('Form submitted:', this.complaint, this.description, this.urgency, this.assignment);
    },
    async addTickets() {
      const userID = VueCookies.get('user_id');
      const task = {
        complaint: this.complaint,
        description: this.description,
        urgency: this.urgency,
        assignment: this.assignment,
        user_id: userID,
        fullname: this.fullname,
        official_title: this.official_title,
        // first_work: this.first_work,
        department: this.department,
        device: this.device,
        platform: this.platform,
        access: this.access,
        return_device: this.return_device,
        // last_day: this.last_day
      };
      await this.$store.dispatch('addTickets', task);
    }
  }
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
  