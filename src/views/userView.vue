<template>
    <div>
        <table class="table table-bordered table-hover table-dark">
                <thead>
                    <tr>
                        <!-- <th>ID</th> -->
                        <th>user_name</th>
                        <th>user_surname</th>    
                        <th>user_email</th> 
                    </tr>
                </thead>
                <tbody v-for="item in $store.state.users" :key="item.UserID">
                    <tr>
                        <!-- <td>{{item.userID}}</td> -->
                        <td>{{item.user_name}}</td>
                        <td>{{item.user_surname}}</td>
                        <td>{{item.user_email}}</td>
                        
                    </tr>
                </tbody>
            </table>
    </div>
</template>

<script>
    export default {
     methods: {
        async getUsers(){
            this.$store.dispatch('getUsers')
        }
     },   
     mounted() {
        this.getUsers();
     },
    }
</script>

<style scoped>

</style>