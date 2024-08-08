<template>
    <div class="container">
      <h2>Completed Tickets</h2>
      <div class="table-wrapper">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
              <th scope="col">Assignee</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="ticket in completedTickets" :key="ticket.id">
              <td>{{ ticket.name }}</td>
              <td>{{ ticket.type }}</td>
              <td class="status complete">{{ ticket.status }}</td>
              <td>{{ ticket.assignee }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        tickets: [
          {
            id: 1,
            name: 'John Doe',
            type: 'IT Support',
            status: 'Complete',
            assignee: 'Cheslyn',
            description: 'Issue with computer not starting.',
            comments: ['Checked the power supply.']
          },
          {
            id: 2,
            name: 'Jane Doe',
            type: 'Network Issue',
            status: 'In Process',
            assignee: 'John Smith',
            description: 'Network connectivity issue in the office.',
            comments: ['Investigating the router settings.']
          },
          {
            id: 3,
            name: 'Jim Bean',
            type: 'Software Bug',
            status: 'To be Assigned',
            assignee: 'N/A',
            description: 'Bug in the accounting software.',
            comments: ['Reported to the software vendor.']
          }
        ]
      };
    },
    computed: {
      completedTickets() {
        return this.tickets.filter(ticket => ticket.status === 'Complete');
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .table-wrapper {
    width: 100%;
  }
  
  .table {
    width: 100%;
    margin: 0 auto;
  }
  
  .status.complete {
    background-color: greenyellow;
    border-radius: 100px;
    height: 25px;
  }
  </style>
  