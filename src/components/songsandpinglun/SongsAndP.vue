<template>
<div class="bottomBox">
    <template>
        <el-tabs  v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="歌曲列表" name="first">
                <keep-alive>
                    <songs-list :playlist="playlist"/>
                </keep-alive>
            </el-tab-pane>
            <el-tab-pane label="评论(999)" name="second">
                <!-- <critic></critic> -->
            </el-tab-pane>
            <el-tab-pane label="收藏者" name="third">
                <!-- <shou-cang></shou-cang> -->
            </el-tab-pane>
        </el-tabs>
    </template>
</div>
</template>

<script>
const SongsList = ()=>import('@/components/songList/SongsList')

export default {
  components: { SongsList },
    data() {
        return {
            activeName: 'first',
            // playlist:{}
        }
    },
    props:{
      playlist:{
          type:Object,
          default(){
              return {}
          }
      }
  },
    created(){
    //    this.getSongListDetail()
    },
    mounted(){
         
    },
    methods: {
        handleClick(tab, event) {
            // console.log(tab, event);
        },
        //通过我喜欢的音乐歌单id获取歌曲列表
    //  async   getSongListDetail(){
    //         if (!this.$store.state.myLikeId) return;
    //       const res  = await  getSongListDetail(this.$store.state.myLikeId)
    //             console.log(res);
    //             this.playlist=res.playlist
    //             // console.log(this.playlist.tracks);
        
    //     }
    }
}
</script>

<style scoped>
.bottomBox {
    width: 100%;
    overflow: hidden;
    font-size: 20px;
    /* float: left; */
}

.el-tabs /deep/ .el-tabs__nav {
  margin-left: 40px;
}
.el-tabs /deep/ .el-tabs__active-bar {
  background-color: #c62f2f;
  height: 4px;
}
.el-tabs /deep/ .el-tabs__item.is-active {
  color: #c62f2f;
}
.el-tabs /deep/ .el-tabs__nav-wrap::after {
  height: 1px;
  color: var(--color-line);
}
.el-tabs /deep/.el-tabs__item{
    border: 0;
}
.el-tabs /deep/.el-tabs__item:hover {
color: black;
}
.el-tabs /deep/ .el-tabs__header {
  margin: 0;
}
</style>
