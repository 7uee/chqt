<template>
  <div  class="app-wrapper">
    <Header></Header>
    <router-view v-slot="{ Component }" >
      <keep-alive include="index,list">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import  Header from './components/header_com'
import  Footer from './components/footer_com'
// import {getMenu} from '@/api/index';
export default {
  name: 'Layout',
  components:{
      Header,
      Footer
  },
  computed: {
  },
  // created() {
  //   getMenu().then(res=>{
  //     console.log(res);
  //   })
  // },
  methods: {
  }
}
</script>

<style  scoped>

</style>
