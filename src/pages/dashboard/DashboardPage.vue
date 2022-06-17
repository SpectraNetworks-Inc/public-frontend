<template>
<HeaderComponent/>
<NavBarComponent/>

<div class="page-wrapper">
  <div class="container-xl">
    <div class="page-header d-print-none">
      <div class="row g-2 align-items-center">
        <div class="col">
            <div class="page-pretitle user-select-none">Overview</div>
          <h2 class="page-title user-select-none">Dashboard Home</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">
        <router-view></router-view>

    </div>
  </div>
  <FooterComponent/>
</div>

</template>



<script>
import HeaderComponent from '../../components/HeaderComponent.vue'
import NavBarComponent from '../../components/NavBarComponent.vue'
import FooterComponent from '../../components/FooterComponent.vue'

export default {
  name: 'RootPage',
  components: {
    HeaderComponent,
    NavBarComponent,
    FooterComponent
  
  }
}
</script>