<template>
<div class="recommedSong">
    <ul class="bigBox">
        <li class="itemBox" v-for="(item,index) in recommendList" :key="index" @click="songsClick(item.id)">
            <div class="imgBox">
                <div class="playCount">{{item.playCount| userNums()}}</div>
                <img :src="item.coverImgUrl" alt="">
                <div class="play"><img src="../assets/images/play.png" alt=""></div>
                <div class="title">{{item.name}}</div>
            </div>
            <div class="name">{{item.description}}</div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    data() {
        return {
            isShow: false
        }
    },
    props: {
        recommendList: {
            Type: Array,
            default () {
                return []
            }
        }
    },
    filters: {
        userNums(num) {
            return num < 10000 ? num : (num / 1000).toFixed(1) + '万'
        }
    },
    methods: {
        //点击歌单发送点击歌单的id传入歌单详情页
        songsClick(id){
            console.log(id);
            this.$router.push({
                path:`/songsDateil/${id}`
            })
        }
    },
    mounted() {
       
    }
}
</script>

<style lang="less" scoped>
.bigBox {
    margin-top: 8px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.itemBox {
    width: 173px;
    height: 215px;
    margin-right: 10px;
    margin-bottom: 28px;
    //   float: left;
}

.itemBox:nth-child(4n+4) {
    margin-right: 0;
}

.playCount {
    position: absolute;
    line-height: 20px;
    right: 0;
    font-size: 13px;
    padding-right: 4px;
    width: 100%;
    text-align: right;
    background-color:  rgba(0, 0, 0, .05);;
    color: ghostwhite;
}

.imgBox:hover .play {
    display: block;
    transform: translate(-40px, 0);
}
.imgBox:hover .title{
    display: block;
}
.imgBox {
    position: relative;
    width: 165px;
    height: 165px;
    border-radius: 5px;

    img {
        width: 100%;
        border-radius: 5px;
    }
}

.imgBox .play {
    position: absolute;
    right: -30px;
    bottom: 10px;
    width: 30px;
    display: none;
    height: 30px;
    transition: all 4s;

    img {
        width: 100%;
        height: 100%;
        transition: all 4s;
    }
}
.title{
    position: absolute;
    left: 0;
    top: 0;
    font-size: 13px;
    width: 100%;
    text-align: center;
    color: white;
    line-height: 25px;
    display: none;
    background-color: rgba(0, 0, 0, .15);
}
.name {
    word-wrap: break-word;
    margin-top: 10px;
    text-align: left;
    line-height: 20px;
    font-size: 14px;
   word-break:break-all;
	display:-webkit-box;
	-webkit-line-clamp:2;
	-webkit-box-orient:vertical;
	overflow:hidden;

}
</style>
