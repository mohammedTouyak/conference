<template>
  <div id="app" class="homepage">
    <div class="wrapper">
      <Navbar2></Navbar2>
      <main>
        <div class="text-template">
          <Header></Header>
          <router-view/>
        </div>

      </main>
    </div>
<FooterV2></FooterV2>
  </div>
</template>

<script>
import Header from './components/Header';
import Navbar2 from "@/components/Navbar2.vue";
import FooterV2 from "@/components/Footer-v2.vue";

  export default {
    name: 'App',
    components: {
      FooterV2,
      Navbar2,
      // Navbar,
      Header
    },
    mounted() {
      const script = document.createElement('script');
      script.src = require('@/assets/js/slick.min38d6.js');
      document.head.appendChild(script);

      const script1 = document.createElement('script');
      script1.src = require('@/assets/js/global.min1138.js');
      document.head.appendChild(script1);
      const script2 = document.createElement('script');
      script2.src = require('@/assets/js/jquery.min38d6.js?ver=5.8.7');
      document.head.appendChild(script2);
      const script3 = document.createElement('script');
      script3.src = require('@/assets/js/jquery.prettySocial.min1138.js?ver=1654028668');
      document.head.appendChild(script3);
    }
  }
</script>

<style >
@import 'assets/css/style.min1138.css';




</style>
