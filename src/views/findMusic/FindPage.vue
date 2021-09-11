<template>
  <div class="find">
      <tarbar/>
     <div>
        <router-view></router-view>
     </div>
  </div>
</template>

<script>
import Tarbar from '@/components/find/Tarbar'
export default {
  data(){
    return{
    }
  },
components:{
  Tarbar
},

}
</script>

<style scoped>
.find::-webkit-scrollbar{
  display: none;
}
.find{
  overflow-y: hidden;
  overflow-x: hidden;
  overflow: hidden;
  background-color: white;
}
</style>