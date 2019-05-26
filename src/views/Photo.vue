<template>
  <div>
    <div class="container">
      <ul class="picture">
        <li v-for="(photo,index) in photoLists" :key="index">
          <div class="imgbox" :data-text='photo.photoText'>
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
        size: 20,
        photoLists: {},
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
          // result.data.photoBO[i].photoTime = result.data.photoBO[i].photoTime
          // result.data.photoBO[i].photoDescribe = result.data.photoBO[i].photoDescribe
          if (result.data.photoBO[i].photoTime == null){
            result.data.photoBO[i].photoTime = ''
          }
          if(result.data.photoBO[i].photoDescribe == null){
            result.data.photoBO[i].photoDescribe = ''
          }
          result.data.photoBO[i].photoText = '❤   '+result.data.photoBO[i].photoTime + '    '+result.data.photoBO[i].photoDescribe
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
  /* padding-left: 3%; */
  /* padding-right: -6%; */
  padding-top: 1%;
}

.imgbox:hover:after{
  transform: translateY(75%);
} 
</style>
