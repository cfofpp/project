<template>
<div class="sel">
   <div class="content">
      <div class="title">热搜榜</div>
    <select-item :hotSong="hotSong"/>
   </div>
</div>
</template>

<script>
import SelectItem from '@/components/SelectItem'
export default {
  components: { SelectItem },
    data() {
        return {
            hotSong: []
        }
    },
    methods: {
        async getHotSon() {
            const {
                data: res
            } = await this.$http.get("/search/hot/detail")
            // console.log(res);
            this.hotSong = res.data
            console.log(this.hotSong);
        },
      
    },
    created() {
        this.getHotSon()
    }
}
</script>

<style scoped>
.sel {

    /* line-height: 30px; */
    border-radius: 15px;
    background-color: white;
    color: rgba(0, 0, 0, .6);
    border: 1 solid rgba(0, 0, 0, .9);
    width: 280px;
    /* padding: 0 30px; */
    height: 400px;
    outline: 0;
    overflow: hidden;
}
.content{
  /* width: 100%; */
}
.title {
    text-align: left;
    padding-left: 20px;
}
</style>
