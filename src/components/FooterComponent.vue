
<script>
import dateFormat from 'dateformat';
import FingerprintJS from '@fingerprintjs/fingerprintjs-pro';

export default {
  data() {
    return {
      date: dateFormat(new Date(), "ddd, mmm dS, yyyy, h:MM:ss TT"),
      bFP: null,
      appVersion: null
    }
  },
  created() {
    const fpPromise = FingerprintJS.load({ apiKey: 'w9sa26g60u9yqCcX2qEg' });
      // Globally Defined "gitInfo"
      // eslint-disable-next-line
    if (gitInfo.dirty) {
// eslint-disable-next-line
      this.appVersion = gitInfo.raw
    } else {
// eslint-disable-next-line
      this.appVersion = gitInfo.hash
      fpPromise.then(fp => fp.get()).then(result => this.bFP = result.visitorId)
    }

  },
  name: 'FooterComponent'
}
</script>




<template>

<footer class="footer footer-transparent d-print-none">
          <div class="container-xl">
            <div class="row text-center align-items-center flex-row-reverse">
              <div class="col-lg-auto ms-lg-auto">
              </div>
              <div class="col-12 col-lg-auto mt-3 mt-lg-0">
                <ul class="list-inline list-inline-dots mb-0">
                  <li class="list-inline-item user-select-none antialiased"><i class="ti ti-copyright"></i> 2022 <a href="https://spectranetworks.ca" class="link-secondary">SCI</a></li>
                  <li v-if="appVersion" class="list-inline-item user-select-none antialiased"><i class="ti ti-git-commit"></i> {{ appVersion }}</li>
                  <li class="list-inline-item user-select-none antialiased"><i class="ti ti-hourglass-empty"></i> {{ date }}</li>
                  <li v-if="bFP" class="list-inline-item user-select-none antialiased"><i class="ti ti-fingerprint"></i> {{ bFP }}</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

</template>
