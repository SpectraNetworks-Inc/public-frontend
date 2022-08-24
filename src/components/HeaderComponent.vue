<script>
import { useLogto } from "@logto/vue";
import { decodeIdToken } from "@logto/js";
import md5 from "md5";

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
    const { isAuthenticated, signIn, signOut } = useLogto();

    return {
      isAuthenticated,
      onClickSignIn: () => {
        signIn(`${window.location.origin}/callback`);
      },
      onClickSignOut: () => {
        signOut(`${window.location.origin}/logout`);
      },
    };
  },
  created() {
    //Get JWT Key and Decode
    if (this.isAuthenticated) {
      try {
        Object.entries(localStorage).map(
          x => x[0]
          ).filter(
            x => x.endsWith('idToken')).map(
              x => {
                const value = localStorage.getItem(x);
                const data = decodeIdToken(value);
                console.log(`Hello ${data.username}!`);
                if (!data.avatar) {
                  this.avatarURL = `https://gravatar.com/avatar/${md5(data.sub)}?s=200&d=identicon&r=x`
                } else {
                  this.avatarURL = data.avatar
                }
                this.username = data.username
                this.name = data.name
              }
           ) 
      } catch (e){
        console.log('Error Storage');
      }
    } else {
      console.log('Not Authenticated');
    }

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
        <div class="nav-item d-md-flex me-3">
          <div v-if="isAuthenticated == false" class="btn-list">
            <a class="btn btn-outline-success user-select-none antialiased" @click="onClickSignIn">Login</a>
          </div>
        </div>


        <div v-if="isAuthenticated" class="nav-item dropdown">
          <a href="#" class="nav-link d-flex lh-1 text-reset p-0" data-bs-toggle="dropdown" aria-label="Open user menu">
            <span class="avatar avatar-sm"><img :src=avatarURL></span>
            <div class="d-none d-xl-block ps-2">
              <div class="user-select-none antialiased">{{ username }}</div>
            </div>
          </a>

          <div v-if="isAuthenticated" class="dropdown-menu dropdown-menu-end dropdown-menu-arrow">
          <h6 class="dropdown-header">{{ name }}</h6>
            <a href="#" class="dropdown-item antialiased">Profile &amp; account</a>
            <a href="#" class="dropdown-item antialiased">Feedback</a>
            <div class="dropdown-divider"></div>
            <!-- <label class="dropdown-item form-switch"><input class="form-check-input m-0 me-2" @change="onChange" v-model="themeSwitch" type="checkbox"> Dark Mode</label> -->
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
