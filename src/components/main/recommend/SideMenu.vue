<template>
<div class="side-menu">
    <el-menu default-active="/home/findPage/gexin" @select="getIndex" class="menu" @open="handleOpen" @close="handleClose" active-text-color="black" router>
        <el-menu-item index="/home/findPage/gexin" :class="{current:this.routerIndex==='/home/findPage/gexin'}">
            <span slot="title">发现音乐</span>
        </el-menu-item>
        <el-menu-item index="/home/videoView" :class="{current:this.routerIndex==='/home/videoView'}">
            <span slot="title">视频</span>
        </el-menu-item>
        <el-menu-item index="3">
            <span slot="title">朋友</span>
        </el-menu-item>
        <el-menu-item index="4">
            <span slot="title">直播</span>
        </el-menu-item>
        <el-menu-item class="last" index="5">
            <span slot="title">私人FM</span>
        </el-menu-item>
    </el-menu>
    <el-menu text-color="#5c5c5c" active-text-color="#000000" :unique-opened="true"  :collapse-transition="false" router class="leftMenuWith">
         <el-menu-item-group>
        <template slot="title">我的音乐</template>
        <el-menu-item index="/home/meLike" class="like">
            <img src="../../../assets/images/geXing/xin.png" alt="">
            <span slot="title">我喜欢的音乐</span>
        </el-menu-item>
        <el-menu-item>
            <i class="el-icon-bangzhu"></i>
            <span slot="title">本地音乐</span>
        </el-menu-item>
        <el-menu-item>
            <i class="el-icon-cloudy"></i>
            <span slot="title">我的音乐云盘</span>
        </el-menu-item>
        <el-menu-item>
            <i class="el-icon-coin"></i>
            <span slot="title">我的电台</span>
        </el-menu-item>
        <el-menu-item>
            <i class="el-icon-star-off"></i>
            <span slot="title">我的收藏</span>
        </el-menu-item>
         </el-menu-item-group>
    </el-menu>
 
</div>
</template>

<script>
export default {
    data() {
        return {
            list: ['发现音乐', '视频', '朋友', '直播', '私人FM'],
            routerIndex: '/home/findPage/gexin'
        }
    },
    created() {
        
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        getIndex(i){
            //添加样式
            // console.log(i);
            this.routerIndex=i
        }
    }
}
</script>

<style scoped>
.like img{
width: 18px;
height: 18px;
padding-right: 10px;
}
.current {
    font-size: 17px;
    font-weight: bold;
    background-color: rgba(0, 0, 0, .05);
    border-radius: 4px;
}

.side-menu {
    /* border-right: 1px rgba(0, 0, 0, .2) solid; */
    color: rgb(0, 0, 0);
    /* padding-left: 10px; */
    box-sizing: border-box;
    overflow: hidden;
    padding-right: 15px; 
}
.last{
 margin-bottom: 0;
}
.el-menu {
    border: 0;
    width: 100%;
    /* height: 100%; */
    margin: 0;
    display: flex;
    flex-direction: column;
    text-align: left;
    margin: 10px 0px 0 10px;
}

.el-menu-item {
    height: 37px;
    line-height: 37px;
    margin-bottom: 5px;

}

.el-menu-item:hover {
    border-radius: 4px;
}

.title-me {
    font-size: 13px;
    color: gray;
}

/* .title{
    font-size: 12px;
}
.top-list{
    padding: 10px 0 0 10px;
}
.top-list ul{
    display: flex;
    flex-direction: column;
    text-align: left;
} 

.top-list ul li{
    line-height: 39px;
    padding-left: 10px;

}
.top-list ul li:hover{
background-color: rgba(0, 0, 0, .05);
border-radius: 5px;
} */
</style>
