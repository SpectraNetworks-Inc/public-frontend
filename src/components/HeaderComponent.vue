<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: 'HeaderComponent',
    data() {
      return {
        name: '',
        username: '',
        avatarURL: '',
        darkMode: false
      }
    },
    setup() {
      
      const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

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
    mounted() {
      let theme = localStorage.getItem("theme");
      if (theme === 'theme-dark') {
        document.body.className = 'theme-dark'
        this.darkMode = true
      } else {
        document.body.className = 'theme-light'
        this.darkMode = false
      }
    },
    watch: {
      darkMode: function () {
        if (this.darkMode == true) {
          localStorage.setItem("theme", 'theme-dark');
          document.body.className = 'theme-dark'
        } else {
          localStorage.setItem("theme", 'theme-light');
          document.body.className = 'theme-light'
        }
      }
    },
    methods: {
      changeThemeLight: function() {
        this.darkMode = false

      },
      changeThemeDark: function() {
        this.darkMode = true

      }
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
          
          <a @click="changeThemeLight" v-if="darkMode" class="nav-link px-0" aria-label="Enable light mode">
            <i class="ti ti-sun"></i>
          </a>
          <a @click="changeThemeDark" v-else class="nav-link px-0" aria-label="Enable dark mode">
            <i class="ti ti-moon"></i>
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
