<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: 'HeaderComponent',
    data() {
      return {
        name: '',
        username: '',
        avatarURL: ''
      }
    },
    setup() {
      
      const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

      if (localStorage.getItem('theme')) {
        document.body.className = localStorage.getItem('theme')
      } else {
        document.body.className = 'theme-light'
        localStorage.setItem('theme', 'theme-light')
      }
      
      return {
        login: () => {
          loginWithRedirect();
        },
        logout: () => {
          logout({ returnTo: window.location.origin });
        },
        user,
        isAuthenticated,
      };
    },
    computed: {
    getImageUrl: function() {
        return this.user.picture
    },
    getName: function() {
        return this.user.name
    },
    getUserName: function() {
        return this.user.nickname
    },
    changeThemeLight: function() {
      document.body.className = 'theme-light'
      localStorage.setItem('theme', 'theme-light')
      return true
    },
    changeThemeDark: function() {
      document.body.className = 'theme-dark'
      localStorage.setItem('theme', 'theme-dark')
      return true
    }, 
  },
};
</script>







<template>

  <header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3 user-select-none antialiased">
        <a href="https://dashboard.spectranetworks.ca" style="text-decoration: none;">SCI</a>
      </h1>

      <div class="navbar-nav flex-row order-md-last">
        <div class="d-none d-md-flex">
              <a @click="changeThemeDark" class="nav-link px-0 hide-theme-dark" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable dark mode">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"></path></svg>
              </a>
              <a @click="changeThemeLight" class="nav-link px-0 hide-theme-light" data-bs-toggle="tooltip" data-bs-placement="bottom" aria-label="Enable light mode">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="4"></circle><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"></path></svg>
              </a>
              
            </div>
        <div class="nav-item d-md-flex me-3">
          <div v-if="isAuthenticated == false" class="btn-list">
            <a class="btn btn-outline-success user-select-none antialiased" @click="login">Login</a>
          </div>
        </div>


        <div v-if="isAuthenticated" class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm" v-bind:style="{ backgroundImage: 'url(' + getImageUrl + ')' }"></span>
            <div class="d-none d-xl-block ps-2">
              <div class="user-select-none antialiased">{{ getUserName }}</div>
            </div>
          </a>

          <div v-if="isAuthenticated" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <h6 class="dropdown-header">{{ getName }}</h6>
            <a href="#" class="dropdown-item antialiased">Profile &amp; account</a>
            <a href="#" class="dropdown-item antialiased">Feedback</a>
            <div class="dropdown-divider"></div>
            <!-- <label class="dropdown-item form-switch"><input class="form-check-input m-0 me-2" @change="onChange" v-model="themeSwitch" type="checkbox"> Dark Mode</label> -->
            <a href="#" class="dropdown-item antialiased">Settings</a>
            <a @click="logout" class="dropdown-item antialiased">Logout</a>
          </div>

          <div v-if="isAuthenticated == false" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a @click="login" class="dropdown-item antialiased">Login</a>
          </div>
          
        </div>
      </div>
    </div>
  </header>

</template>
