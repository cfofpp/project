<template>
<div class="songsList" >
        <el-table  v-loading="loading" 
         @row-click="rowClick" :data="playlist.songs" stripe style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">>
        <el-table-column type="index" :show-overflow-tooltip="true" sortable prop="date" width="140">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" sortable prop="name" label="音乐标题" width="240">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="artists[0].name" label="歌手" width="170">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true" prop="album.name" label="专辑" width="160">
        </el-table-column>
        <el-table-column :show-overflow-tooltip="true"  label="时长" width="90">
             <template slot-scope="scope">{{scope.row.album.publishTime | songsTime}}</template>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import {
    playSongsByid
} from "../../nextwork/geXing";
export default {
    data(){
        return{
            loading:true
        }
    },
    props: {
        playlist: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    watch:{
        playlist(){
            this.loading=!this.loading
        }
    },
    created() {
    },
    methods: {
        //点击播放音乐 将点击的id发送网络请求获得数据后存放到vuex对audio的src 和歌曲信息进行赋值
       async rowClick(row, column, event) {
            console.log(row);
            
            let muscic = row
            // console.log(muscic.al.picUrl);
         const res = await playSongsByid(muscic.id)
                console.log(res.data[0].url);
                this.$store.commit("getCuurentXinxi",muscic)
                this.$store.commit("getCurrnetUrl",res.data[0].url)
           

        }
    },
    filters:{
        songsTime(val){
            let time=(val/1000)/60
            return (time.toFixed(0)>=10?time.toFixed(0):"0"+time.toFixed(0))+":"+parseInt(time%10)

        }
    }
}
</script>

<style scoped>
.el-table {
    padding-left: 20px;
}

/* img{
    display: inline-block;
    width: 30px;
    height: 30px;
} */
</style>
