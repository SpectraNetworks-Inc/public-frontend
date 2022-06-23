<template>

    <div class="page page-center">
        <div class="container-tight py-4">
            <div class="text-center mb-4">
                <a href="." class="navbar-brand navbar-brand-autodark" style="text-decoration: none;"><img src="" alt="" height="36">SCI</a>
            </div>
            <form class="card card-md" action="https://en1q285rsuhcbv2.m.pipedream.net" method="GET">
                <div class="card-body">

                    <h2 class="card-title text-center mb-4">Logging Out</h2>

                    <div v-if="goodbye == true" class="mb-2">
                        <p class="text-muted mb-4">You are now logged out</p>
                    </div>
                    <div v-if="status" class="mb-2">
                        <p class="text-muted mb-4">{{status}}</p>
                    </div>

                    <div class="mb-3">
                        <div class="progress">
                        <div class="progress-bar" :style="pBar">
                        <span class="visually-hidden">{{pBar.width}} Complete</span>
                    </div>
                </div>
                </div>

                </div>
            </form>
        </div>
        <FooterComponent/>
    </div>

</template>


<script>
import FooterComponent from '../../components/FooterComponent.vue'
import { HTTP } from '../../http-common.js'

export default {
  name: 'ForgotPage',
  components: {
    FooterComponent
  },
  data() {
    return {
      loggedIn: false,
      pBar: { width: '0%' },
      goodbye: false,
      status: '',
    }
  },
  created() {
    const Cli = this.$cookies.get('loggedIn');

    if (Cli) {
      if (Cli == 'true') {
        setTimeout(() => {
          this.pBar.width = '1%';
          this.$cookies.remove('userId');
          this.status = 'Removed Stored User ID';
        }, 2000);
        setTimeout(() => {
            this.pBar.width = '30%';
            this.$cookies.set('loggedIn', 'false');
            try {
              HTTP.post('v1/auth/logout', { refreshToken: this.$cookies.get('refreshToken')}).then(response => {
                this.status = 'Invalidating Old Keys';
              console.log(response);
              });
            } catch (e) {
              console.log(e);
            }

        }, 4000);
        setTimeout(() => {
            this.pBar.width = '60%';
            this.$cookies.remove('userEmail');
            this.status = 'Removed Stored Email';
        }, 5000);
        setTimeout(() => {
            this.pBar.width = '77%';
            this.$cookies.remove('refreshToken');
            this.$cookies.remove('accessToken');
            this.status = 'Removed Stored Access Keys';
        }, 7000);
        setTimeout(() => {
            this.pBar.width = '86%';
            this.loggedIn = false;
            this.$cookies.remove('userName');
            this.goodbye = true;
            this.status = 'Removed Stored User Name';
        }, 9000);
        setTimeout(() => {
            this.pBar.width = '100%';
            this.status = 'Good Bye :)';
            this.$router.push('/');
        }, 12000);

      } else {
        this.loggedIn = false;
        this.$router.push('/login');
      }
    } else {
        this.loggedIn = false;
        this.$router.push('/login');
    }

  }
}
</script>