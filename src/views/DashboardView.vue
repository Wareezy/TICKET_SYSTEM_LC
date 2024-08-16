<template>
  <h1>
    WELCOME TO THE DASHBOARD
  </h1>
  <spinnerComp v-if="loadingInventory"></spinnerComp>
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
    <tr v-for="item in $store.state.tickets" :key="item.ticket_id">
  <td>{{item.ticket_id }}</td>
  <td>{{item.complaint }}</td>
  <td>{{item.description }}</td>
  <td>{{item.ticket }}</td>
  <td>{{item.urgency }}</td>
  <td>{{item.user_id }}</td>
    </tr>
  </tbody>
    </table>
  </div>
  </template>
  <script>
  export default{
    data(){
      return{
      complaint:null,
      description:null,
      ticket:null,
      urgency:null,
      user_id:null
      }
    },
    computed:{
      getTickets()
      {
        this.loadingInventory=true;
        return this.$store.dispatch('getTickets').then(()=>{
          this.loadingInventory=false})
      }
    },
    mounted(){
      this.getTickets
    }
  }
  </script>