<template>
<div class="tar-bar">
    <el-menu default-active="/home/findPage/gexin"  class="tar-bar-menu" router @open="handleOpen" @close="handleClose"  text-color="gray" active-text-color="black">
        <el-menu-item @click="tarbarClick('/home/findPage/gexin')" :class="{current:'/home/findPage/gexin'==this.currentIndex}" index="/home/findPage/gexin">
            <span slot="title">个性推荐</span>
        </el-menu-item>
        <el-menu-item @click="tarbarClick('/home/findPage/songsD')" :class="{current:'/home/findPage/songsD'==this.currentIndex}" index="/home/findPage/songsD">
            <span slot="title">歌单</span>
        </el-menu-item>
        <el-menu-item @click="tarbarClick('3')" :class="{current:'3'===this.currentIndex}" index="3">
            <span slot="title">主播电台</span>
        </el-menu-item>
        <el-menu-item @click="tarbarClick('/home/findPage/topList')" :class="{current:'/home/findPage/topList'===this.currentIndex}" index="/home/findPage/topList">
            <span slot="title">排行榜</span>
        </el-menu-item>
        <el-menu-item @click="tarbarClick('5')" :class="{current:'5'===this.currentIndex}" index="5">
            <span slot="title">歌手</span>
        </el-menu-item>
        <el-menu-item @click="tarbarClick('6')" :class="{current:'6'===this.currentIndex}" index="6">
            <span slot="title">最新音乐</span>
        </el-menu-item>
    </el-menu>
</div>
</template>

<script>
export default {
    data() {
        return {
            currentIndex:'/home/findPage/gexin'
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        tarbarClick(i){
            console.log(i);
            this.currentIndex=i
            console.log(this.currentIndex===i);
            

        }
    }
}
</script>

<style scoped>
.tar-bar {
    height: 55px;
    font-size: 16px;
    margin-bottom: 20px;
}
.current{
    background-color: white;
}
.current>span {
    font-size: 19px;
    color: black;
    border-bottom: 3px solid #EC4141;
}

.tar-bar-menu {
    padding-left: 10px;
    height: 100%;
    display: flex;
    border-right:0
}
.el-menu-item span{
    display: inline-block;
    line-height: 55px;
    height: 100%;
}
.el-menu-item {
    /* padding: 0 5px; */
    line-height: 55px;
    height: 100%;
    background-color: white !important;
}

</style>
