<template>
  <div id="content">
    <h1 id="heading1" data-aos="fade-left">StudioTicketFlow</h1>
    <p id="intro" data-aos="fade-right">
      Meet StudioTicketFlow, LC Studio's game-changer for ticket complaints... <br />
      It's not just about fixing issues; it's about delivering a seamless, efficient customer experience. With StudioTicketFlow, every complaint gets addressed swiftly and effectively, turning challenges into opportunities for enhanced customer satisfaction. Experience the future of customer support with StudioTicketFlow.
    </p>
    <div class="about">
      <img
        id="ticketImage"
        data-aos="fade-right"
        src="https://i.ibb.co/2SYrS1t/ticket-removebg-preview.png"
      />
    </div>
    <button id="buttonSub" data-aos="fade-left" href="/login">Submit Complaint</button>
  </div>
</template>

<script>

</script>

<style scoped>
#content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  transition: opacity 1s ease-in-out;
  z-index: 1; /* Ensure content is above the video */
}
#ticketImage {
  height: 300px;
  width: 300px;
  position: relative;
  margin-left: 1100px;
  margin-top: -180px;
}
#heading1 {
  margin-top: 100px;
  margin-right: 350px;
}
#intro {
  margin-right: 340px;
  margin-top: 40px;
}
#buttonSub {
  background-color: rgb(217, 7, 0);
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  border-radius: 20px;
  margin-right: 300px;
  margin-bottom: 100px;
}
</style>