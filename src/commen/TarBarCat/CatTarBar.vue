<template>
  <div class="tarbar">
      <ul class="nav">
          <li @click="liClick(index,item)" :class="{active:index===currentIndex}" v-for="(item,index) in arr" :key="index">{{item}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        arr:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            
            currentIndex:0
        }
    },
    methods:{
        liClick(i,val){
            this.currentIndex=i
            // console.log(val);
            this.$emit("tagsClick",val)
        }
    }
}
</script>

<style scoped>
.tarbar{
    width: 100px;

}
.tarbar .nav{
    width: 100%;
    /* margin: 30px 0; */
    text-align: left;
    padding-left: 30px;
    font-size: 13px;
    /* height: 50px; */
    /* line-height: 30px; */
    /* display: flex;
    align-items: center;
    justify-content: space-around; */
    /* flex-wrap: nowrap; */
    color: black;
}
.tarbar .nav li{
    padding: 2px 5px 2px 5px;
    line-height: 18px;
    margin-right: 20px;
    border-radius: 10px;
    /* display: inline-block;
    width: 60px;
    height: 50px; */
}
.active{
    background-color: #f3e0e0;
    color: #EE418A;
}
</style>