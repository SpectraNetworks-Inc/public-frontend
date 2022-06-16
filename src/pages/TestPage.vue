<template>
<HeaderComponent/>
<NavBarComponent/>

<div class="page-wrapper">
  <div class="container-xl">
    <div class="page-header d-print-none">
      <div class="row g-2 align-items-center">
        <div class="col">
          <h2 class="page-title">Test</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="page-body">
    <div class="container-xl">

    </div>
  </div>
  <FooterComponent/>
</div>

</template>



<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import NavBarComponent from '../components/NavBarComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default {
  name: 'TestPage',
  components: {
    HeaderComponent,
    NavBarComponent,
    FooterComponent

  }
}
</script>