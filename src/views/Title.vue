<template>
<div class="myTitle">
  <span class="titleLeft">我们在一起 <span class="msg">{{message}}</span> 天了！</span>
  <div class="photoTitle">吃货图鉴</div>
</div>
</template>

<script>
import { getCommemoration } from '../api/api';

export default {
  data() {
    return {  
      message: 0,
    }
  },
  created: function () {
    this.getDate()
  },
  mounted: function () {
  },
  methods:{
    getDate: function(){
      getCommemoration().then(result => {
        this.logining = false;
          this.setCommemoration(result)
      });
    },
    setCommemoration: function (result) {
      var now = new Date();
      var year = now.getFullYear();
      var month = now.getMonth() + 1;
      var day = now.getDate();
      var nowDate = year+'-'+month+'-'+day;
      var days = this.daysBetween(result,nowDate);
      this.message = days;
    },
    daysBetween: function (DateOne,DateTwo)  {   
      var OneMonth = DateOne.substring(5,DateOne.lastIndexOf ('-'));  
      var OneDay = DateOne.substring(DateOne.length,DateOne.lastIndexOf ('-')+1);  
      var OneYear = DateOne.substring(0,DateOne.indexOf ('-'));  
      var TwoMonth = DateTwo.substring(5,DateTwo.lastIndexOf ('-'));  
      var TwoDay = DateTwo.substring(DateTwo.length,DateTwo.lastIndexOf ('-')+1);  
      var TwoYear = DateTwo.substring(0,DateTwo.indexOf ('-'));  
      var cha=((Date.parse(OneMonth+'/'+OneDay+'/'+OneYear)- Date.parse(TwoMonth+'/'+TwoDay+'/'+TwoYear))/86400000);   
      return Math.abs(cha);  
    },
  }
}

</script>

<style>
.myTitle{
	width: 100%;
	height: 60px;
	margin: 0;
	line-height: 60px;
	background-color: #fff;
	box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
	position: fixed;
	top: 0;
	left: 0;
}

.titleLeft{
  float: left;
  margin-left: 70px;
  font-size: 20px;
  font-weight: bold;
  color: #222;
}

.photoTitle{
  margin: 0 auto;
  width: 200px;
  font-size: 40px;
  font-weight: bold;
}

.msg{
    color:red;
      font-size: 25px;
}

</style>
