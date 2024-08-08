<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-green sticky-top">
        <div class="container-fluid">
            <!-- <a class="navbar-brand" href="/">
                <img id="logo" src="https://i.ibb.co/mBw9c0W/LC-STUDIO-LOGO-removebg-preview.png" alt="Logo" class="img-fluid">
            </a> -->
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon text-white"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/systemabout" exact active-class="router-link-active">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/feedback">Feedback</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/admin">Tickets</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/dashboard">Dashboard</router-link>
                    </li>
                </ul>
                <ul class="navbar-nav ms-auto right-align">
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/dashboard">Log Out</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link text-black" to="/dashboard">Logged User</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  // Your Vue.js component logic here
}
</script>

<style>
.navbar-green {
    background-color: rgb(171, 204, 55);
    padding-bottom: -20px !important;
}
.navbar {
    border-radius: 0px; /* Rounded edges for the navbar */
}
nav a {
    font-weight: bold; 
    display: inline-block;
    position: relative;
    color: black;
    font-size: 20px;
    text-decoration: none;
    margin: 0 10px;
    transition: color 0.3s ease-in-out;
}

nav a.router-link-active {
    color: black;
}

nav a::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
}

nav a:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

#logo {
    width: 80px;
    height: 80px;
    animation: pulsate 2s infinite;
}

#logoImg1 {
    width: 51px;
    height: 47px;
}

#logoImg2 {
    width: 45px;
    height: 45px;
    margin-top: -1px;
}

.right-align {
    position: absolute;
    right: 0;
}
</style>
    