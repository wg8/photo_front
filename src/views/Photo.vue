<template>
  <div>
    <div class="container">
      <ul :class='classObject'>
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
        classObject:{picture4:true,picture2:false},
        page: 1,
        size: 10,
        photoLists: {},
        text0: '2018年5月20日'+'，'+'吃的很开心',
      }
    },
    created: function () {
      let w = document.documentElement.offsetWidth || document.body.offsetWidth;
      if(w > 1000){
        this.classObject = {picture4:true,picture2:false}
      } else{
        this.classObject = {picture4:false,picture2:true}
      }

      this.handlePhotoList(this.page);
      this.page++;
      var self = this;
      $(window).scroll(function(){
        let scrollTop = $(this).scrollTop()
        let scrollHeight = $(document).height()
        let windowHeight = $(this).height()
        if(100+scrollTop >=scrollHeight - windowHeight){
           var newPage = self.page++
          self.handlePhotoList(newPage)
        }
      })
    },
    mounted: function () {
    },
    methods:{
      handlePhotoList: function(newPage){
        let postData = {
          page: newPage,
          size: this.size
        }
        photoList(postData).then(result => {
            this.logining = false;
            if (result.code !== 0) {
              this.$message({
                message: result.msg,
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
        this.photoLists = [...this.photoLists,...result.data.photoBO];
      },      
    }
  }
</script>

<style>
body{
  background-color: #eee;
}
 
.container{
  margin-top: 80px;
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

.picture4{
	width: 98%;
	margin: 10px auto;
	-moz-column-count: 4;
	-webkit-column-count:4;
	column-count:4;
	-webkit-column-gap: 20px;
	column-gap: 20px;
}

.picture2{
	width: 98%;
	margin: 10px auto;
	-moz-column-count: 2;
	-webkit-column-count:2;
	column-count:2;
	-webkit-column-gap: 20px;
	column-gap: 20px;
}

.picture4 li{
	list-style-type: none;
	margin-bottom: 10px;
}

.picture4 li img{
	width: 100%;
	height: auto;
} 

.picture2 li{
	list-style-type: none;
	margin-bottom: 10px;
}

.picture2 li img{
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
}

.imgbox:hover:after{
  transform: translateY(75%);
} 
</style>