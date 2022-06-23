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
                        <p class="text-muted mb-4">You are now logged out. Goodbye :)</p>
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

export default {
  name: 'ForgotPage',
  components: {
    FooterComponent
  },
  data() {
    return {
      loggedIn: false,
      pBar: { width: '0%' },
      goodbye: false
    }
  },
  created() {
    const Cli = this.$cookies.get('loggedIn');
    if (Cli) {
      if (Cli == 'true') {
        setTimeout(() => {
          this.pBar.width = '1%';
        }, 1000);
        setTimeout(() => {
            this.pBar.width = '30%';
            this.$cookies.set('loggedIn', 'false');
        }, 2000);
        setTimeout(() => {
            this.pBar.width = '60%';
        }, 2500);
        setTimeout(() => {
            this.pBar.width = '77%';
            this.goodbye = true
        }, 2700);
        setTimeout(() => {
            this.pBar.width = '86%';
            this.loggedIn = false;
        }, 4000);
        setTimeout(() => {
            this.pBar.width = '100%';
            this.$router.push('/');
        }, 4100);

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