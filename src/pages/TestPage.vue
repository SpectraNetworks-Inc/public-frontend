<template>
<HeaderComponent/>
<NavBarComponent/>

<div v-if="isAuthenticated" class="page-wrapper">
  <div class="container-xl">
    <div class="page-header d-print-none">
      <div class="row g-2 align-items-center">
        <div class="col">
          <h2 class="page-title">Test Data</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
      <div class="card">
        <div class="card-body">
        <code>{{ userinfo }}</code>
        </div>
      </div>


    </div>
  </div>
  <FooterComponent/>
</div>

<div v-else class="page-wrapper">
  <div class="container-xl">
    <div class="page-header d-print-none">
      <div class="row g-2 align-items-center">
        <div class="col">
          <h2 class="page-title">Unauthorized</h2>
        </div>
      </div>
    </div>
  </div>
</div>



</template>



<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import NavBarComponent from '../components/NavBarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  name: 'TestPage',
  components: {
    HeaderComponent,
    NavBarComponent,
    FooterComponent

  },
  data() {
    return {
      users: [],
      errors: [],
      userinfo: ''
    }
  },
  setup() {
    const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const getuserInfo = async () => {
          const token = await getAccessTokenSilently();
          const response = await fetch('https://spectranetworks.us.auth0.com/userinfo', {
            headers: {
              Authorization: 'Bearer ' + token
            }
          });
          const data = await response.json()
          return data
        }
    return {
        user,
        isAuthenticated,
        getuserInfo
      };
    },
    created() {

    },
    mounted() {
      this.getuserInfo().then((res)=> {
        this.userinfo = res
      })
      
    }
}
</script>