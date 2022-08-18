

<script>
import FooterComponent from '../../components/FooterComponent.vue'


export default {
  name: 'ForgotPage',
  components: {
    FooterComponent
  },
  created() {
    setTimeout(() => {
        this.$router.push({path: '/'});
    }, 500);
  }
}
</script>




<template>

    <div class="page page-center">
        <div class="container-tight py-4">
            <div class="text-center mb-4">
                <a href="." class="navbar-brand navbar-brand-autodark" style="text-decoration: none;"><img src="" alt="" height="36">SCI</a>
            </div>
            <form class="card card-md" action="https://en1q285rsuhcbv2.m.pipedream.net" method="GET">
                <div class="card-body">
                    <h2 class="card-title text-center mb-4">Logging Out</h2>
                    <div class="mb-3">

                    </div>
                </div>
            </form>
        </div>
        <FooterComponent/>
    </div>

</template>
