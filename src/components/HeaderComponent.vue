<template>

  <header class="navbar navbar-expand-md navbar-light d-print-none">
    <div class="container-xl">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
        <a href="https://dashboard.spectranetworks.ca">SCI</a>
      </h1>

      <div class="navbar-nav flex-row order-md-last">
        <div class="nav-item d-none d-md-flex me-3">
          <div v-if="loggedIn == false" class="btn-list">
            <a class="btn btn-outline-success" href="/login">Login</a>
            <a class="btn btn-outline-warning" href="/signup">Sign up</a>
          </div>
        </div>

        <div v-if="loggedIn == true" class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <div class="d-none d-xl-block ps-2">
              <div>John Doe</div>
            </div>
          </a>

          <div class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item">Profile &amp; account</a>
            <a href="#" class="dropdown-item">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">Settings</a>
            <a href="#" class="dropdown-item">Logout</a>
          </div>
          
        </div>
      </div>
    </div>
  </header>

</template>


<script>
// import { HTTP } from '../http-common.js'

export default {
  name: 'HeaderComponent',
  data() {
    return {
      loggedIn: false
    }
  },
  created() {
    const Cli = this.$cookies.get('loggedIn');

    if (Cli) {
      if (Cli == 'true') {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    } else {
      this.loggedIn = false;
    }
  }
}
</script>