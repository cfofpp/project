<template>
<div class="home">
    <el-container class="home-box">
        <el-header class="head-box">
            <top-head class="head" />
        </el-header>
        <el-container>
            <el-main class="content">
                <div class="left">
                    <side-menu class="side" />
                </div>
                <div class="right">
                    <!-- 跳转过渡动画 -->
                   <transition>
                       <!-- <keep-alive> -->
                            <router-view></router-view>
                       <!-- </keep-alive> -->
                   </transition>
                </div>
            </el-main>
            <el-footer class="footer-box">
                <my-audio class="audio"/>
            </el-footer>
        </el-container>
        <!-- <el-container>
            <el-footer class="footer-box">Footer</el-footer>
        </el-container> -->
    </el-container>
</div>
</template>

<script>
import TopHead from '@/components/TopHead'
import SideMenu from '../components/main/recommend/SideMenu.vue'
import MyAudio from '../components/bottom/MyAudio.vue'
export default {
    components: {
        TopHead,
        SideMenu,
        MyAudio
    },
    created() {

    },
    mounted() {},
    methods: {}
}
</script>

<style scoped>
.home {
    height: 100%;
    background-color: white;
}

.home-box {
    padding: 0 20px 0 20px;
    height: 86vh;
    width: 70vw;
    margin: 7vh auto;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, .06);
    background-color: white;
}

.el-main[data-v-fae5bece] {
    line-height: 0;
}

.el-container {
    overflow: hidden;
}

.el-container {
    padding: 0;
}

.head-box {
    background-color: #ec4141;
}

.content {
    height: 500px;
    /* overflow: hidden; */
    margin: 0;
    background-color: white;
}

.content::-webkit-scrollbar {
    display: none
}

.el-header,
.el-footer {
    /* background-color: #B3C0D1; */
    color: #333;
    text-align: center;
    line-height: 60px;
    padding: 0;

}

.el-footer {
    border-top: 1px gainsboro solid;

    /* background-color: rebeccapurple; */
    border-bottom: .5px solid gainsboro;
    /* line-height: 90px; */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}
.audio{
    height: 40px;
    line-height: 60px;
}
.head {
    /* padding: 0 20px 0 20px; */
    height: 100%;
}

.side {
    position: fixed;
    top: 40;
    float: left;
    /* height: calc(100% - 40px -40px); */
    width: 13%;
    background-color: white;
    /* background-color: darkcyan; */
}

.right {
    float: right;
    width: 80%;
    border-left: 1px solid gainsboro;
}

.el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    text-align: center;
    line-height: 160px;
    padding: 0;
    background-color: white;
    width: 100%;
    height: 100vh;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
