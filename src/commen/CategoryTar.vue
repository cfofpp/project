<template>
<div class="commenCateGory">
    <div class="leftBox">
        <el-button round><slot name="left">s</slot></el-button>
    </div>
    <div class="rightBox">
        <ul>
            <li><slot name="right">ss</slot></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.commenCateGory{
    padding: 20px; 
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.leftBox{
    /* float: left; */
    .el-button{
        height: 40px;
        // line-height: 30px;
        width: 90px;
    }
}
.rightBox{
    /* float: right; */
}
</style>
