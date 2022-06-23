<template>

    <div class="page page-center">
        <div class="container-tight py-4">
            <div class="text-center mb-4">
                <a href="." class="navbar-brand navbar-brand-autodark" style="text-decoration: none;"><img src="" alt="" height="36">SCI</a>
            </div>

            <form @submit="submitForm" class="card card-md">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">Forgot password</h2>
                    <p class="text-muted mb-4">Enter your email address and your password will be reset and emailed to you.</p>

                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input v-model="email" type="email" class="form-control" placeholder="Enter email" name="email" id="email" data-form-type="email">
                    </div>

                    <div v-show="error">
                        <div class="alert alert-danger">
                            <strong>{{error}}</strong>
                        </div>
                    </div>

                    <div v-show="success">
                        <div class="alert alert-success">
                            <strong>{{success}}</strong>
                        </div>
                    </div>

                    <div class="form-footer">
                        <button type="submit" class="btn btn-outline-warning w-100">
                          <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><rect x="3" y="5" width="18" height="14" rx="2"></rect><polyline points="3 7 12 13 21 7"></polyline></svg>
                          Send me new password
                        </button> 
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
import { HTTP } from '../../http-common.js'

export default {
  name: 'ForgotPage',
  components: {
    FooterComponent
  },
  data() {
    return {
      email: '',
      error: '',
      success: ''
    }
  },
  methods:{
    submitForm: function (e) {
      e.preventDefault();
      if (this.email) {
        HTTP.post('v1/auth/forgot-password', {
          email: this.email
        }).then(response => {
          switch (response.status) {
            case 200:
              this.success = 'Email Sent Redirecting to Login Page';
              setTimeout(() => {
                this.$router.push('/login');
              }, 3000);
              break;
            case 204:
              this.success = 'Email Sent Redirecting to Login Page';
              setTimeout(() => {
                this.$router.push('/login');
              }, 3000);
              break;
          }

        }).catch(error => {
          switch (error.response.status) {
            case 404:
              this.error = error.response.data.message;
              break;
            case 500:
              this.error = error.response.data.message;
              break;
          }
        })
        return true;
      }
      if (!this.email) {
        this.error = 'Please enter your email';
      }
    },
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