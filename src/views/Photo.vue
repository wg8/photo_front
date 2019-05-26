<template>
  <div>
    <div class="container">
      <ul class="picture">
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src0" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src1" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src2" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src3" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src4" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src5" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src3" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src2" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src0" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src1" class="pic"></el-image>
          </div>
        </li>
        <li>
          <div class="imgbox" :data-text="text0">
            <el-image :src="src4" class="pic"></el-image>
          </div>
        </li>
      </ul>
      <ul class="picture">
        <li v-for="(photo,index) in photoLists" :key="index">
          <div class="imgbox" :data-text="text0">
            <el-image :src='photo.photoPath' class="pic"></el-image>
          </div>
        </li>
      </ul>
    </div>

    <Title></Title>
  </div>
</template>

<script>
import Title from './Title'
import { photoList } from '../api/api';

  export default {
    components :{
      Title,
    },
    data() {
      return {
        page: 1,
        size: 10,
        photoLists: {},

        src0: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558815038830&di=7ee7c2d07b2cc2388ff85d83d3d37986&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201812%2F23%2F20181223144806_dwZrM.thumb.700_0.jpeg',
        src1: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558815038830&di=cec32e5d0046c8b02daa9c2554befe0a&imgtype=0&src=http%3A%2F%2Fm.360buyimg.com%2Fpop%2Fjfs%2Ft26038%2F35%2F221768014%2F45167%2F9b2ca6aa%2F5b696d12N423c75c6.jpg',
        src2: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558815038829&di=f2cb1deceabbb0d3f353036e4dcade38&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201805%2F03%2F20180503101224_tnuwu.thumb.700_0.jpg',
        src3: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558815038829&di=5d015f8fd56cefde094b85073bbbb002&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F04%2F20180604090459_gqqjo.jpg',
        src4: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558815038829&di=96a6e1aac70facc9e79f02f042ed3e38&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201810%2F24%2F20181024231235_8fTZ4.thumb.700_0.jpeg',
        src5: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1558815038829&di=ce6b6b070bafb6f1f098e012d70cdaae&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-08-08%2F5b6aa318a9f15.jpg',

        text0: '2018年5月20日'+'，'+'吃的很开心'

      }
    },
    created: function () {
      this.handlePhotoList()
    },
    mounted: function () {
    },
    methods:{
      handlePhotoList: function(){
        let postData = {
          page: this.page,
          size: this.size
        }
        photoList(postData).then(result => {
              this.logining = false;
              let { msg, code, data } = result;
              if (code !== 0) {
                this.$message({
                  message: msg,
                  type: 'error'
                });
              } else {
                this.changeResultList(result)
              }
            });
      },
        changeResultList: function (result) {
        for (let i = 0; i < result.data.photoBO.length; i++) {
          result.data.photoBO[i].id = result.data.photoBO[i].id
          result.data.photoBO[i].photoPath = result.data.photoBO[i].photoPath
          result.data.photoBO[i].photoTime = result.data.photoBO[i].photoTime
          result.data.photoBO[i].photoDescribe = result.data.photoBO[i].photoDescribe
         }
         this.photoLists = result.data.photoBO
      },
    }
  }
</script>

<style>
body{
  background-color: #eee;
}
 
.container{
  margin-top: 100px;
  width: 98%;
}

 .pic{
  padding: 10px 10px 15px;
  background: white;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 3px rgba( 50, 50, 50, 0.4); 
}  

*{
	box-sizing: border-box;
}

h1{
	width: 100%;
	height: 60px;
	margin: 0;
	line-height: 60px;
	background-color: #fff;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
	position: fixed;
	top: 0;
	left: 0;
	text-align: center;
}
.picture{
	width: 98%;
	margin: 10px auto;
	-moz-column-count: 4;
	-webkit-column-count:4;
	column-count:4;
	-webkit-column-gap: 20px;
	-moz-column-count: 4;
	column-gap: 20px;
}
.picture li{
	list-style-type: none;
	margin-top: 10px;
}

.picture li img{
	width: 100%;
	height: auto;
}

.dim {
  padding: 0 2px;
    left:0; 
    line-height:1.5; 
    width:260px; 
    background-color:rgba (0,0,0,0.5);
}

.imgbox{
  position:relative;
  overflow: hidden;
}

.imgbox:after{
  position:absolute;
  left: 0px;
  top:0;
  display: block;
  width:100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  content: attr(data-text);
  transition:all 1s ease;
  transform: translateY(100%);
  color: #FFF;
  padding-left: 3%;
  padding-top: 1%;
}

.imgbox:hover:after{
  transform: translateY(75%);
} 
</style>
