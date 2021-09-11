<template>
  <div class="selitem">
      <div class="item" @click="itemClick(item.searchWord)" v-for="(item,index) in hotSong" :key="index">
          <div class="index">{{index+1}}</div>
          <div class="song">
              <div class="songName">
                  <div class="name">{{item.searchWord}}</div>
                  <div class="hot">{{item.score}}</div>
              </div>
              <div class="recommend">{{item.content}}</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    props:{
        hotSong:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        itemClick(val){
            this.$router.push(`/detail/${val}`)
        }
    }
}
</script>

<style scoped>
.selitem{
    overflow: hidden;
}
.item{
    font-size: 12px;
    display: flex;
    align-items: center;
    /* justify-content: center; */
    height: 100%;
    width: 100%;
    overflow: hidden;
}
.item:hover{
    background-color: gainsboro;
}
.songName{
    display: flex;

}
.name{
    font-weight: bold;
    padding-right: 20px;
}
.index{
    padding: 0 20px 0 20px;
}
.song{
    line-height: 20px;
}
</style>