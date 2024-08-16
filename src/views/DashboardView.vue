<template>
  <h1>WELCOME TO THE DASHBOARD</h1>
  <spinnerComp v-if="loadingInventory"></spinnerComp>
  
  <h2>TICKETS TABLE</h2>
  <div class="table-responsive" v-if="!$store.state.singleTicket">
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
          <td><button @click="viewTicket(item.ticket_id)">View Ticket</button></td>
          <td><button @click="resolveTicket(item.ticket_id)">Resolve Ticket</button></td>    
        </tr>
      </tbody>
    </table>
  </div>

  <!-- Display the selected ticket in a card format -->
  <div v-if="$store.state.singleTicket" class="ticket-card">
    <h3>Ticket Details</h3>
    <p><strong>TICKET ID:</strong> {{ $store.state.singleTicket.ticket_id }}</p>
    <p><strong>COMPLAINT:</strong> {{ $store.state.singleTicket.complaint }}</p>
    <p><strong>DESCRIPTION:</strong> {{ $store.state.singleTicket.description }}</p>
    <p><strong>TICKET:</strong> {{ $store.state.singleTicket.ticket }}</p>
    <p><strong>URGENCY:</strong> {{ $store.state.singleTicket.urgency }}</p>
    <p><strong>USER ID:</strong> {{ $store.state.singleTicket.user_id }}</p>
    <button @click="clearTicket">Back to Tickets</button>
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
    };
  },
  computed: {
    getTickets() {
      this.loadingInventory = true;
      return this.$store.dispatch('getTickets').then(() => {
        this.loadingInventory = false;
      });
    },
  },
  methods: {
    viewTicket(ticket_id) {
      this.$store.dispatch('getTicket', ticket_id);
    },
    clearTicket() {
      this.$store.commit('setSingleTicket', null);
    },
  },
  mounted() {
    this.getTickets;
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
