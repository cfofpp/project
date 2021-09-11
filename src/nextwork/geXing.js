import {request} from '../nextwork/request'

//获取歌单详情
export  function   getSongListDetail(id){
    return request({
        url:"playlist/detail",
        params:{
            id:id
        }
    })
}
//获取音乐id播放
export function playSongsByid(id){
    return request({
        url:"/song/url",
        params:{
            id:id
        }
    })
}
//根据歌曲名获取比匹配歌曲
export function getHotWordSongs(val){
    return request({
        url:'/search',
        params:{
            keywords:val
        }
    })
}