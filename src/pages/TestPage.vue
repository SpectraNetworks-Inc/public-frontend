<script setup>
import { useLogto } from "@logto/vue";

// eslint-disable-next-line
const { isAuthenticated } = useLogto();
</script>


<template>
<HeaderComponent/>
<NavBarComponent/>

<div v-if="isAuthenticated" class="page-wrapper">
  <div class="container-xl">
    <div class="page-header d-print-none">
      <div class="row g-2 align-items-center">
        <div class="col">
          <h2 class="page-title">Test Data [https://jsonplaceholder.typicode.com/users]</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
      <div class="card">
        <div class="card-body">
          <div id="table-default">
            <table class="table" v-if="users && users.length">
              <thead>
                <tr>
                  <th><button class="table-sort" data-sort="sort-name">Name</button></th>
                  <th><button class="table-sort" data-sort="sort-email">Email</button></th>
                  <th><button class="table-sort" data-sort="sort-city">City</button></th>
                </tr>
              </thead>
              <tbody class="table-tbody">
                <tr v-for="user in users" :key="user">
                  <td class="sort-name">{{user.name}}</td>
                  <td class="sort-email">{{user.email}}</td>
                  <td class="sort-city">{{user.address.city}}</td>
                </tr>
              </tbody>
            </table>
          </div>
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
import { HTTP } from '../http-common.js'

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
      errors: []
    }
  },
  created() {
    HTTP.get(`users`)
    .then(response => {
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>