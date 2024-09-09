<template>
  <footer id="footerID" class="text-white py-3 container-fluid">
      <div class="container">
          <div class="row">
              <p class="lead">
                  StudioTicketFlow &copy;
                  <span>{{ currYear }}</span>
                  <!-- <span>
                    <a :href="mailtoLink" target="_blank" class="">Email the admin</a>
                  </span> -->
              </p>
          </div>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
  data() {
      return {
        currYear: new Date().getFullYear(),
        user_email: 'cheslyn@lifechoices.co.za',
        subject: 'Hello from StudioTicketFlow',
        body: 'I wanted to reach out regarding...'
      };
  },
  computed: {
      mailtoLink() {
        return `mailto:${this.user_email}?subject=${encodeURIComponent(this.subject)}&body=${encodeURIComponent(this.body)}`;
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