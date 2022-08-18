<script setup>
import { useLogto } from "@logto/vue";

// eslint-disable-next-line
const { signIn, isAuthenticated, signOut } = useLogto();
// eslint-disable-next-line
const onClickSignIn = () => signIn('https://dashboard.spectranetworks.ca/callback');
const onClickSignOut = () => signOut('https://dashboard.spectranetworks.ca/logout');


</script>

<script>
export default {
  name: 'HeaderComponent'
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
        <div class="nav-item d-md-flex me-3">
          <div v-if="isAuthenticated == false" class="btn-list">
            <a class="btn btn-outline-success user-select-none antialiased" @click="onClickSignIn">Login</a>
          </div>
        </div>


        <div v-if="isAuthenticated" class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm" :style="userImage"></span>
            <div class="d-none d-xl-block ps-2">
              <div class="user-select-none antialiased">test</div>
            </div>
          </a>

          <div v-if="isAuthenticated" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a href="#" class="dropdown-item antialiased">Profile &amp; account</a>
            <a href="#" class="dropdown-item antialiased">Feedback</a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item antialiased">Settings</a>
            <a @click="onClickSignOut" class="dropdown-item antialiased">Logout</a>
          </div>

          <div v-if="isAuthenticated == false" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
            <a @click="onClickSignIn" class="dropdown-item antialiased">Login</a>
          </div>
          
        </div>
      </div>
    </div>
  </header>

</template>
