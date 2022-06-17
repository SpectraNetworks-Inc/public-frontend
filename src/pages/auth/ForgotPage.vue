<template>

    <div class="page page-center">
        <div class="container-tight py-4">
            <div class="text-center mb-4">
                <a href="." class="navbar-brand navbar-brand-autodark" style="text-decoration: none;"><img src="" alt="" height="36">SCI</a>
            </div>
            <form class="card card-md" action="https://en1q285rsuhcbv2.m.pipedream.net" method="post">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">Forgot password</h2>
                    <p class="text-muted mb-4">Enter your email address and your password will be reset and emailed to you.</p>

                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email" name="email" id="email">
                    </div>

                    <div class="form-footer">
                        <a href="#" class="btn btn-outline-warning w-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>
                            Send me new password
                        </a>
                    </div>

                </div>
            </form>
            <div class="text-center text-muted mt-3">
                Forget it, <a href="/login">send me back</a> to the sign in screen.
            </div>
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
  created() {
    const Cli = this.$cookies.get('loggedIn');
    if (Cli) {
      if (Cli == 'true') {
        this.$router.push('/dashboard');
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