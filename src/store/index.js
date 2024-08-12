import { createStore } from 'vuex'
import axios from 'axios'
// import router from '@/router'
// import Swal from 'sweetalert2'

// const BASE_URL=link
// axios.defaults.withCredentials=true
export default createStore({
  state: {
    users:[]
  },
  getters: {
  },
  mutations: {
    setUsers(state,data){
      state.users=data
    }
  },
  actions: {

    async getUsers({commit})
    {
try{
  let {data}=await axios.get(BASE_URL+'/users')
  console.log(data);
  commit('setUsers', data);
}
catch(error){
 Swal.fire({
  title:'Error',
  text: 'Failed to retrieve users',
  icon: 'error',
  timer: 3000
 });

 setTimeout(() => {
  window.location.reload();
}, 3000);
}
    }
  },

  async getProfile({ commit }, email) {
    try {
      let encode = $cookies.get('token');
      encode = encode.split('.')[1];
      const {currentUser} = JSON.parse(window.atob(encode));
      console.log(currentUser.userRole);
      $cookies.set('userRole', currentUser.userRole)
      commit('setCurrentUser', decodedToken.currentUser);
      // Update the currentUser state
    } catch (error) {
      console.error('Failed to retrieve user profile', error);
    }
  },
  

  async addUser({commit},newUser){
    try{
      let {data}=await axios.post(BASE_URL + '/users' , newUser);
      console.log(data);
      commit('setUsers',data);
      Swal.fire({
            title: 'Added Successful',
            text: 'User has been added successfully!',
            icon: 'success',
            timer: 3000,
            showConfirmButton: false
          });
  
          setTimeout(() => {
            window.location.reload();
          }, 3000);
    }
    catch(error)
    {
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
    // window.location.reload()
  },

  
  async delUser({commit},id){
    try{
      await axios.delete(BASE_URL + '/users/' + id)
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
    }
    catch(error){
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
  }
  
  ,

  
  async updateUser({commit},update){
    try{
      await axios.patch(BASE_URL + '/users/' + update.id,update)
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
  
    }
  
    catch(error)
  {
  
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
      let { data } = await axios.post(BASE_URL + '/login', currentUser);
  
      if (data.token) {
        $cookies.set('token', data.token);
        $cookies.set('user_role', data.user.userRole)
        // alert(data.msg);
        await router.push('/feedback');
        Swal.fire({
          title: 'Login Successful',
          text: 'User has logged in successfully!',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false
        });
  
        setTimeout(() => {
          window.location.reload();
        }, 1000);
        // window.location.reload();
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
      $cookies.remove('token');
    }
  }
  ,
  
  async logOut(context){
    let cookies=$cookies.keys()
    console.log(cookies)
    // $cookies.remove('jwt')
      
    
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will be logged out',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'rgb(71, 98, 218)',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, log me out!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Remove JWT token
        $cookies.remove('token');
        $cookies.remove('user_role')
        // Redirect to login page
        router.push('/login');
        setTimeout(()=>{
            window.location.reload();
        },10)
      
      } else {
        // Reload the page if Cancel is clicked
        window.location.reload();
      }
    });
  }
  
,  

  modules: {
  }
})
