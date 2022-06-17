<template>

<footer class="footer footer-transparent d-print-none">
          <div class="container-xl">
            <div class="row text-center align-items-center flex-row-reverse">
              <div class="col-lg-auto ms-lg-auto">
              </div>
              <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul class="list-inline list-inline-dots mb-0">
                  <li class="list-inline-item user-select-none">Copyright © 2022 <a href="https://spectranetworks.ca" class="link-secondary">SCI</a>. All rights reserved.</li>
                  <li class="list-inline-item user-select-none">Generated {{ date }}</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

</template>

<script>
import dateFormat from 'dateformat';

export default {
  data() {
    return {
      date: dateFormat(new Date(), "dddd, mmmm dS, yyyy, h:MM:ss TT")
    }
  },
  name: 'FooterComponent'
}
</script>