<template>
<div class="topItem">
    <div class="item" >
        <!-- <div class="leftBox"> -->
            <div class="img" @click="paihangClick(item.id)"  v-for="(item,index) in topList" :key="index">
                <img :src="item.coverImgUrl" alt="">
                <div class="play">
                    <img src="../../../assets/images/play.png" alt="">
                </div>
                <div class="title">{{item.updateTime | formatData}}</div>
            </div>
        <!-- </div> -->
        <!-- <div class="rightBox"  v-for="(item,index) in songsList" :key='index'>
            <el-table  v-loading="loading" :show-header='false' size='mini' :data="item" stripe style="width: 100%">
                <el-table-column prop="name" label="日期" width="180">
                </el-table-column>
                <el-table-column prop="alia[0]" label="姓名" width="180">
                </el-table-column>
                <el-table-column prop="ar[0].name" label="地址" align='right'>
                </el-table-column>
            </el-table>
            <div class="selAll">查看全部<i class="el-icon-arrow-right"></i></div>
        </div> -->
    </div>
</div>
</template>

<script>
import {
    getSongListDetail
} from '../../../nextwork/geXing.js'
export default {
    props: {
        topList: {
            type: Array,
            default () {
                return []
            }
        },
        songsList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data() {
        return {
            
            tableData: []
        }
    },
    created() {
        console.log(this.topList.slice(0, 4));
        // console.log(this.topList);
        //获取前面四个音乐榜
        // this.getsongsList(this.topList[0].id)
        // this.getsongsList(this.topList[1].id)
        // this.getsongsList(this.topList[2].id)
        // this.getsongsList(this.topList[3].id)
    },
    methods: {
        //点击歌单跳转歌单详情页
       async paihangClick(id){
        //   const res = await getSongListDetail(id)
         this.$router.push({
                path:`/songsDateil/${id}`
            })
        //   console.log(res);
        }
        //根据歌单id获取数据
        // async getsongsList(id) {
        //     const res = await getSongListDetail(id)
        //     // this.songsList.push(res)
           
        //     console.log(res.playlist.tracks);
        //     this.songsList.push(res.playlist.tracks)
        //      console.log(this.songsList);
        // }
    },
    filters:{
         formatData(time) {
            let date = new Date(time);
            let y = date.getFullYear();
            let MM = date.getMonth() + 1;
            MM = MM < 10 ? ('0' + MM) : MM;
            let d = date.getDate();
            d = d < 10 ? ('0' + d) : d;
            let h = date.getHours();
            h = h < 10 ? ('0' + h) : h;
            return  MM + '月' + d + '日' + '更新';
        }
    }
}
</script>

<style scoped>
.topItem {
    margin-top: 25px;
    /* width: 100%; */
}

.topItem .item {
    /* box-sizing: border-box; */
 
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 25px;
    
}

.topItem .leftBox {
    border-radius: 5px;
}
.topItem .img{
    position: relative;
       width: 230px;
    height: 230px;
    margin-bottom: 50px;
}
.topItem .img:hover .play{
    display: block;
}
.topItem .img img {
    border-radius: 5px;
    width: 100%;
    height:  100%;
}
.topItem .play{
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 50px;
    height: 50px;
}
.topItem .play img{
    width: 100%;
    height: 100%;
}
.topItem .title{
    position: absolute;
    top: 65%;
    left: 50%;
    font-size: 15px;
    transform: translate(-50%);
    color: white;
}
/* .rightBox {
    width: 600px;
    height: 170px;
    border-radius: 5px;
    background-color: blanchedalmond;
}
.selAll{
    font-size: 13px;
    line-height: 30px;
    padding-left: 10px;
    color: gray;
}
.selAll:hover{
    color: black;
} */
</style>
