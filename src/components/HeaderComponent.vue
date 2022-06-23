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
        <div class="nav-item d-md-flex me-3">
          <div v-if="loggedIn == false" class="btn-list">
            <a class="btn btn-outline-success user-select-none antialiased" href="/login">Login</a>
            <a class="btn btn-outline-warning user-select-none antialiased" href="/signup">Sign up</a>
          </div>
        </div>


        <div v-if="loggedIn == true" class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm" :style="userImage"></span>
            <div class="d-none d-xl-block ps-2">
              <div class="user-select-none antialiased">{{ userName }}</div>
            </div>
          </a>

          <div v-if="loggedIn == true" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item antialiased">Profile &amp; account</a>
            <a href="#" class="dropdown-item antialiased">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item antialiased">Settings</a>
            <a href="/logout" class="dropdown-item antialiased">Logout</a>
          </div>

          <div v-if="loggedIn == false" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item antialiased">Login</a>
            <a href="#" class="dropdown-item antialiased">Sign Up</a>
          </div>
          
        </div>
      </div>
    </div>
  </header>

</template>


<script>
import { HTTP } from '../http-common.js'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      loggedIn: false,
      userImage: { backgroundImage: "url('/icons/user.png')" },
      userName: ''
    }
  },
  created() {
    const Cli = this.$cookies.get('loggedIn');
    if (Cli) {
      if (Cli == 'true') {
        this.loggedIn = true;
        try {
          if (this.$cookies.get('accessToken')){
            HTTP.get(`v1/users/${this.$cookies.get('userId')}`, {
              headers: {
                Authorization: 'Bearer ' + this.$cookies.get('accessToken')
                }
                }).then(response => {
                  this.$cookies.set('userName', response.data.name);
                  this.userName = response.data.name;
                  this.$cookies.set('userId', response.data.id);
          });
          }
        } catch (e) {
          switch (e){
            case 401:
              console.log('Unauthorized Request [ get basic data]');
              try {
                if (this.$cookies.get('refreshToken')){
                  HTTP.post('v1/auth/refresh-tokens', {
                    refreshToken: this.$cookies.get('refreshToken')
                  }).then(response => {
                    this.$cookies.set('accessToken', response.data.tokens.access.token);
                    this.$cookies.set('refreshToken', response.data.tokens.refresh.token);
                    this.$cookies.set('userId', response.data.user.id);
                    this.$cookies.set('userName', response.data.user.name);
                    this.$cookies.set('loggedIn', true);
                    this.loggedIn = true;
                    this.userName = response.data.user.name;
                  });
                }
              } catch (e) {
                console.log(`Error: ${e.data.message}`);
                if (this.$cookies.get('userName')){
                  this.userName = this.$cookies.get('userName');  
                } else {
                  this.userName = '';
                }     
              }
              break;
            case 403:
              this.$cookie.delete('loggedIn');
              this.$cookie.delete('accessToken');
              this.$cookie.delete('userId');
              break;            
            case 404:
              this.$cookie.delete('loggedIn');
              this.$cookie.delete('accessToken');
              this.$cookie.delete('userId');
              break;              

          }
          this.userName = 'John Doe';
        }
      } else {
        this.loggedIn = false;
      }
    } else {
      this.loggedIn = false;
    }

  }
}
</script>