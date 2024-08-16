import { createStore } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import VueCookies from 'vue-cookies';
import router from '@/router' // Make sure the path is correct

const BASE_URL = "https://ticket-system-lc.onrender.com/"

axios.defaults.withCredentials = true

export default createStore({
  state: {
    users: [],
    Tickets: [],
    singleTicket: []
  },
  getters: {},
  mutations: {
    setUsers(state, data) {
      state.users = data;
    },
    setTickets(state, data) {
      state.Tickets = data;
    },
    setSingleTicket(state, data) {
      state.singleTicket = data;
    }
  },
  actions: {
    async getUsers({ commit }) {
      try {
        let { data } = await axios.get(BASE_URL + 'user');
        console.log(data);
        commit('setUsers', data);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to retrieve users',
          icon: 'error',
          timer: 3000
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    },

    async getTickets({ commit }) {
      try {
        let { data } = await axios.get(BASE_URL + 'feedback');
        console.log(data);
        commit('setTickets', data);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to retrieve tickets',
          icon: 'error',
          timer: 3000
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    },

    async getTicket({ commit }, id) {
      try {
        let { data } = await axios.get(BASE_URL + 'feedback/' + id);
        console.log('Fetched single ticket:', data); // Debugging line
        commit('setSingleTicket', data);
      } catch (error) {
        console.error('Cannot get the single ticket', error);
      }
    },

    async getProfile({ commit }, user_email) {
      try {
        let encode = VueCookies.get('token');
        encode = encode.split('.')[1];
        const { currentUser } = JSON.parse(window.atob(encode));
        console.log(currentUser.userRole);
        VueCookies.set('user_role', currentUser.user_role)
        commit('setCurrentUser', decodedToken.currentUser);
      } catch (error) {
        console.error('Failed to retrieve user profile', error);
      }
    },

    async addUser({ commit }, newUser) {
      try {
        let { data } = await axios.post(BASE_URL + 'user/', newUser);
        console.log(data);
        commit('setUsers', data);
        Swal.fire({
          title: 'Added Successful',
          text: 'User has been added successfully!',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to add user',
          icon: 'error',
          timer: 3000
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    },

    async delUser({ commit }, id) {
      try {
        await axios.delete(BASE_URL + '/user/' + id)
        Swal.fire({
          title: 'Deleted Successful',
          text: 'User has been deleted successfully!',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to delete user',
          icon: 'error',
          timer: 3000
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    },

    async updateUser({ commit }, update) {
      try {
        await axios.patch(BASE_URL + '/user/' + update.id, update)
        Swal.fire({
          title: 'Update Successful',
          text: 'User has been update successfully!',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to update user',
          icon: 'error',
          timer: 3000
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    },

    async loginUser({ commit }, currentUser) {
      try {
        let { data } = await axios.post(BASE_URL + 'login', currentUser);

        if (data.token) {
          VueCookies.set('token', data.token);
          let [{ user_id }] = data.user;
          VueCookies.set('user_id', user_id);
          let [{user_role}] = data.user;
          VueCookies.set('user_role', user_role);

          Swal.fire({
            title: 'Login Successful',
            text: 'User has logged in successfully!',
            icon: 'success',
            timer: 1000,
            showConfirmButton: false
          });

          setTimeout(() => {
            if (user_role === 'admin') {
              router.push('/dashboard'); // Admin redirect
            } else {
              router.push('/feedback'); // User redirect
            }
          }, 1000);
        } else {
          Swal.fire({
            title: 'Error',
            text: 'Failed to login, password or email is incorrect',
            icon: 'error',
            timer: 1000
          });

          setTimeout(() => {
            window.location.reload();
          }, 3000);
        }
      } catch (error) {
        console.error('Cannot login', error);
        VueCookies.remove('token');
        Swal.fire({
          title: 'Error',
          text: 'An error occurred during the login process.',
          icon: 'error',
          showConfirmButton: true
        });
      }
    },

    async logOut(context) {
      const token = VueCookies.get('token');
      const userRole = VueCookies.get('user_role');
      console.log({ token, userRole });

      Swal.fire({
        title: 'Are you sure?',
        text: 'You will be logged out',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: 'rgb(171, 204, 55)',
        cancelButtonColor: '#000',
        confirmButtonText: 'Yes, log me out!',
      }).then((result) => {
        if (result.isConfirmed) {
          VueCookies.remove('token');
          VueCookies.remove('user_role');
          VueCookies.remove('user_id');
          router.push('/systemabout') // Adjust the route as needed
          
          setTimeout(() => {
            window.location.reload();
          }, 10);
        } else {
          window.location.reload();
        }
      });
    },

    async addTickets({ commit }, payload) {
      try {
        let { data } = await axios.post(`${BASE_URL}feedback?user=${payload.user_id}`, payload);
        console.log(data);
        commit('setTickets', data);
        Swal.fire({
          title: 'Added Successful',
          text: 'Ticket has been added successfully!',
          icon: 'success',
          timer: 3000,
          showConfirmButton: false
        });
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: 'Failed to add ticket',
          icon: 'error',
          timer: 3000
        });

        setTimeout(() => {
          window.location.reload();
        }, 3000);
      }
    }
  },

  modules: {}
})
