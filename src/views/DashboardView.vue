<template>
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <!-- Existing filters and search bar -->
          <label for="statusFilter">Status:</label>
          <select id="statusFilter">
            <option value="all">All</option>
            <option value="complete">Complete</option>
            <option value="inProcess">In Process</option>
            <option value="toBeAssigned">To be Assigned</option>
          </select>
  
          <label for="typeFilter">Type:</label>
          <select id="typeFilter">
            <option value="all">All</option>
            <option value="itSupport">IT Support</option>
            <option value="networkIssue">Network Issue</option>
            <option value="softwareBug">Software Bug</option>
          </select>
  
          <label for="assigneeFilter">Assignee:</label>
          <select id="assigneeFilter">
            <option value="all">All</option>
            <option value="cheslyn">Cheslyn</option>
            <option value="janeDoe">Jane Doe</option>
            <option value="johnSmith">John Smith</option>
          </select>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
  
      <div class="tabs">
        <button @click="currentTab = 'allTickets'" :class="{ active: currentTab === 'allTickets' }">All Tickets</button>
        <button @click="currentTab = 'completedTickets'" :class="{ active: currentTab === 'completedTickets' }">Completed Tickets</button>
      </div>
  
      <div v-if="currentTab === 'allTickets'">
        <div class="container">
          <div class="table-wrapper">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Type</th>
                  <th scope="col" colspan="2">Status</th>
                  <th scope="col">Assignee</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John Doe</td>
                  <td>IT Support</td>
                  <td class="status complete">Complete</td>
                  <td>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#ticketModal" @click="selectTicket(1)">
                      View
                    </button>
                  </td>
                  <td>Cheslyn</td>
                </tr>
                <tr>
                  <td>Jane Doe</td>
                  <td>Network Issue</td>
                  <td class="status inProcess">In Process</td>
                  <td>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#ticketModal" @click="selectTicket(2)">
                      View
                    </button>
                  </td>
                  <td>John Smith</td>
                </tr>
                <tr>
                  <td>Jim Bean</td>
                  <td>Software Bug</td>
                  <td class="status toBeAssigned">To be Assigned</td>
                  <td>
                    <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#ticketModal" @click="selectTicket(3)">
                      View
                    </button>
                  </td>
                  <td>N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
  
      <div v-if="currentTab === 'completedTickets'">
        <CompletedTickets />
      </div>
  
      <!-- Modal for ticket details -->
      <div class="modal fade" id="ticketModal" tabindex="-1" aria-labelledby="ticketModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="ticketModalLabel">Ticket Details</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="description">
                <p>{{ selectedTicket.description }}</p>
              </div>
              <div class="assignee">
                <p><strong>Assignee:</strong> {{ selectedTicket.assignee }}</p>
              </div>
              <div class="comments">
                <p><strong>Comments:</strong></p>
                <ul>
                  <li v-for="comment in selectedTicket.comments" :key="comment">{{ comment }}</li>
                </ul>
                <input v-model="newComment" placeholder="Add a comment" />
                <button @click="addComment">Send</button>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CompletedTickets from './CompletedTickets.vue';
  
  export default {
    components: {
      CompletedTickets
    },
    data() {
      return {
        currentTab: 'allTickets',
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
        ],
        selectedTicket: {},
        newComment: ''
      };
    },
    methods: {
      selectTicket(id) {
        this.selectedTicket = this.tickets.find(ticket => ticket.id === id);
      },
      addComment() {
        if (this.newComment.trim() !== '') {
          this.selectedTicket.comments.push(this.newComment);
          this.newComment = '';
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .filter-bar {
    margin-bottom: 20px;
  }
  
  .filter-bar label {
    margin-right: 10px;
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
  
  .status.inProcess {
    background-color: rgb(255, 196, 47);
    border-radius: 100px;
    height: 25px;
  }
  
  .status.toBeAssigned {
    background-color: rgb(255, 0, 0);
    border-radius: 100px;
    height: 25px;
  }
  
  button {
    border-radius: 50px;
    background-color: rgba(164, 164, 164, 0.225);
    transition: background-color 0.75s ease;
  }
  
  button:hover {
    background-color: rgba(164, 164, 164, 0.5);
  }
  
  .modal-body {
    font-weight: bold;
  }
  
  .comments ul {
    list-style-type: none;
    padding: 0;
  }
  
  .comments li {
    margin-bottom: 5px;
  }
  
  .tabs {
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
  
  .tabs button {
    background: none;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .tabs button.active {
    font-weight: bold;
    border-bottom: 2px solid #000;
  }
  
  .tabs button:not(.active) {
    color: #888;
  }
  </style>
  