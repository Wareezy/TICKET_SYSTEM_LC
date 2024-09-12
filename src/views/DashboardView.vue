<template>
  <h1>WELCOME TO THE DASHBOARD</h1>
  <!-- <spinnerComp v-if="loadingInventory"></spinnerComp> -->
  
  <h2>TICKETS TABLE</h2>
  <div class="table-responsive">
    <table class="table">
      <thead id="head">
        <tr>
          <th>TICKETID</th>
          <th>COMPLAINT</th>
          <th>DESCRIPTION</th>
          <th>TICKET</th>
          <th>URGENCY</th>
          <th>USERID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $store.state.Tickets" :key="item.ticket_id">
          <td>{{ item.ticket_id }}</td>
          <td>{{ item.complaint }}</td>
          <td>{{ item.description }}</td>
          <td>{{ item.ticket }}</td>
          <td>{{ item.urgency }}</td>
          <td>{{ item.user_id }}</td>
          <td>
            <!-- <button @click="viewTicket(item.ticket_id)">View Ticket</button> -->
            <router-link @click="viewTicket(item.ticket_id)" :to="{ name: 'DashboardSingle', params: { id: item.ticket_id }} " class="btn btn-dark">View Ticket</router-link>
          </td>
          <td><button  @click="resolveTicket(item.ticket_id)"class="btn btn-dark">Resolve Tickets</button></td>    
          <td><button @click="downloadToCSV()" class="btn btn-dark">CSV</button></td>    
        </tr>
      </tbody>
    </table>
  </div>
  <h2>ONBOARDING TABLE</h2>
  <div class="table-responsive">
    <table class="table">
      <thead id="head">
        <tr>
          <th>FULLNAME</th>
          <th>TITLE</th>
          <th>DEVICE</th>
          <th>PLATFORMS</th>
          <th>ACCESS</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $store.state.Tickets" :key="item.ticket_id">
          <td>{{ item.fullname }}</td>
          <td>{{ item.official_title }}</td>
          <td>{{ item.devices }}</td>
          <td>{{ item.platforms }}</td>
          <td>{{ item.assignment }}</td>
          <td>
            <!-- <button @click="viewTicket(item.ticket_id)">View Ticket</button> -->
            <router-link @click="viewTicket(item.ticket_id)" :to="{ name: 'DashboardSingle', params: { id: item.ticket_id }} " class="btn btn-dark">View Ticket</router-link>
          </td>
          <td><button @click="delTicket(item.ticket_id)" class="btn btn-dark">Resolve Ticket</button></td>    
          <td><button @click="downloadToCSV()" class="btn btn-dark">CSV</button></td>    
        </tr>
      </tbody>
    </table>
  </div>
  <h2>OFFBOARDING TABLE</h2>
  <div class="table-responsive">
    <table class="table">
      <thead id="head">
        <tr>
          <th>FULLNAME</th>
          <th>RETURNING DEVICE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in $store.state.Tickets" :key="item.ticket_id">
          <td>{{ item.fullname }}</td>
          <td>{{ item.return_device }}</td>
          <td>
            <!-- <button @click="viewTicket(item.ticket_id)">View Ticket</button> -->
            <router-link @click="viewTicket(item.ticket_id)" :to="{ name: 'DashboardSingle', params: { id: item.ticket_id }} " class="btn btn-dark">View Ticket</router-link>
          </td>
          <td><button @click="addTicketToHistory(item.ticket_id)" class="btn btn-dark">Resolve Ticket</button></td>    
          <td><button @click="downloadToCSV()" class="btn btn-dark">CSV</button></td>    
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      complaint: null,
      description: null,
      ticket: null,
      urgency: null,
      user_id: null,
      fullname: null,
    };
  },
  computed: {
    getTickets() {
     this.$store.dispatch('getTickets')
    },
  },
  methods: {
    viewTicket(ticket_id) {
      this.$store.dispatch('getTicket', ticket_id);
    },
    clearTicket() {
      this.$store.commit('setSingleTicket', null);
    },
    downloadToCSV() {
      const headers = Object.keys(this.$store.state.Tickets);
      const rows = [headers].concat(this.$store.state.Tickets.map(row => Object.values(row)));
      const csvContent = rows.map(row => row.join(',')).join('\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'ticket.csv';
      link.click();
    },

    async resolveTicket(ticket_id) {
    try {
      // Add to history first
      await this.addTicketToHistory(ticket_id); // Call the method to add to history
      // Then delete the ticket
      this.delTicket(ticket_id);
     
    } catch (error) {
      console.error("Error resolving ticket:", error);
    }
  },

  delTicket(ticket_id) {
    this.$store.dispatch('delTicket', ticket_id);
  },

  delTicket(ticket_id) {
    this.$store.dispatch('delTicket', ticket_id);
  },

  // Method to dispatch the Vuex action to add a ticket to history
  async addTicketToHistory(ticket_id) {
     this.$store.dispatch('addHistory', ticket_id);
  }
  },
  mounted() {
    this.getTickets;
    // this.viewTicket
  },
};
</script>

<style scoped>
.ticket-card {
  border: 1px solid #ccc;
  padding: 20px;
  margin-top: 20px;
  background-color: #f9f9f9;
}
</style>
x``