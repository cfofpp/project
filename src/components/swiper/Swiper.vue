<template>
<el-carousel class="box" :interval="3000" type="card" height="180px">
    <el-carousel-item v-for="(item,index) in swiperList" :key="index">
        <a><img class="medium" :src="item.imageUrl" alt=""></a>
    </el-carousel-item>
</el-carousel>
</template>

<script>

export default {
    props: {
        swiperList: {
            type: Array,
            default(){
                return []
            }
        }
    },
    created(){
        // setTimeout(()=>console.log(this.swiperList),2000)
    }
}
</script>

<style scoped>
.box {
    margin: 30px;
    margin-bottom: 10px;
}
.el-carousel__item{
    border-radius: 10px;
}
.el-carousel__item img {
    vertical-align: middle;
    width: 100%;
    height: 100%;
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 160px;
    margin: 0;
    border-radius: 10px;
}

.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>
