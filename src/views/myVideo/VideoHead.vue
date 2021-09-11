<template>
  <div class="head">
      <ul>
        <li @click="click(index)" :class="{active:index==currentIndex}" v-for="(item,index) in data" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
data(){
    return{
        data:['视频','MV'],
        currentIndex:0
    }
},
methods:{
    click(i){
        this.currentIndex=i
    }
}
}
</script>

<style scoped>
.head{
    padding-top: 0;
    padding:0 20px 20px 20px;
    display: flex;
    font-size: 18px;
}
.head ul li{
    margin-right: 20px;
    line-height: 40px;
    padding: 10px;
}
.active{
    font-size: 20px;
    font-weight: bold;
    border-bottom: 3px red solid;
}
</style>