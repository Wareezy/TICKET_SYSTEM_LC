<template lang="">
    <footer id ="footerID" class="text-white py-3 container-fluid">
   <div class="container">
     <div class="row">
       <p class="lead">
         StudioTicketFlow &copy;
         <span>{{currYear}}</span>
       </p>
     </div>
   </div>
 </footer>
 </template>
 <script>
 export default {
     name:'FooterComp',
     data(){
         return{
             currYear:new Date().getFullYear()
         }
     }
 }
 
 </script>
 <style>
 #footerID {
     position: absolute;
   margin-top:750px;
   /* margin-top: 60px; */
     width: 100%; /* Full width */
     background-color: rgb(171, 204, 55);
     z-index: 1;
 }

 
 
 </style>