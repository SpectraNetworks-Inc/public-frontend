<template>
    <div class="page page-center">
        <div class="container-tight py-4">
            <div class="text-center mb-4">
                <a href="." class="navbar-brand navbar-brand-autodark user-select-none" style="text-decoration: none;"><img src="" alt="" height="36">SCI</a>
            </div>
            <form class="card card-md" action="." method="get">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4 user-select-none">Create new account</h2>

                    <div class="mb-3">
                        <label class="form-label user-select-none">Name</label>
                        <input type="text" class="form-control" placeholder="Enter name">
                    </div>

                    <div class="mb-3">
                        <label class="form-label user-select-none">Email address</label>
                        <input type="email" class="form-control" placeholder="Enter email">
                    </div>

                    <div class="mb-3">
                        <label class="form-label user-select-none">Password</label>
                        <div class="input-group input-group-flat">
                            <input type="password" class="form-control" placeholder="Password" autocomplete="off">
                            <span class="input-group-text">
                                <a href="#" class="link-secondary" data-bs-toggle="tooltip">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="2"></circle><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                                </a>
                            </span>
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-check">
                            <input type="checkbox" class="form-check-input">
                            <span class="form-check-label user-select-none">Agree the <a href="/tos" tabindex="-1">terms and policy</a>.</span>
                        </label>
                    </div>

                    <div class="form-footer">
                        <button type="submit" class="btn btn-outline-warning w-100">Create new account</button>
                    </div>
                    
                </div>
            </form>
            <div class="text-center text-muted mt-3 user-select-none">Already have account? <a href="/login" tabindex="-1">Log in</a>
            </div>
        </div>
        <FooterComponent/>
    </div>

</template>



<script>
import FooterComponent from '../../components/FooterComponent.vue'

export default {
  name: 'SignUpPage',
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