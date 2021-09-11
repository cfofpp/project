<template>
<div class="songsList" v-if="playlist.tracks">
  <el-table aria-sort="prop" v-loading="loading" @row-click="rowClick" :data="playlist.tracks" stripe style="width: 100%" :default-sort="{prop: 'date', order: 'descending'}">>
    <el-table-column type="index" :show-overflow-tooltip="true" prop="date" width="140">
      <!-- <template >
                <img src="../../assets/images/geXing/xin.png" alt="">
            </template> -->
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true" sortable='custom' prop="name" label="音乐标题" width="240">
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true" prop="ar[0].name" label="歌手" width="170">
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true" prop="al.name" label="专辑" width="160">
    </el-table-column>
    <el-table-column :show-overflow-tooltip="true" label="时长" width="90">
      <template slot-scope="scope">{{scope.row.dt | songsTime}}</template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import {
  playSongsByid
} from "../../nextwork/geXing";
export default {
  data() {
    return {
      loading: true
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
  watch: {
    //监听playlist数据隐藏加载图标
    playlist() {
      this.loading = !this.loading
    }
  },
  created() {
    // console.log(this.playlist);
  },
  methods: {
    //点击播放音乐 将点击的id发送网络请求获得数据后存放到vuex对audio的src 和歌曲信息进行赋值
    async rowClick(row, column, event) {
    //   console.log(row);
    //   console.log(row.dt);
      let muscic = row
    //   console.log(muscic.al.picUrl);
      const res = await playSongsByid(muscic.id)
    //   console.log(res.data[0].url);
      this.$store.commit("getCuurentXinxi", muscic)
      this.$store.commit("getCurrnetUrl", res.data[0].url)

    }
  },
  filters: {
    songsTime(data) {
      var s;
      var minutes = parseInt((data % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = (data % (1000 * 60)) / 1000;
      s = (minutes < 10 ? ('0' + minutes) : minutes) + ':' + (seconds < 10 ? ('0' + seconds.toFixed(0)) : seconds.toFixed(0));
      return s;
    }
  }
}
</script>

<style scoped>
.el-table {
  padding-left: 20px;
}

.el-table img {
  width: 20px;
  height: 20px;
}

/* img{
    display: inline-block;
    width: 30px;
    height: 30px;
} */
</style>
