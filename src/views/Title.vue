<template>
<div class="myTitle">
  <span class="titleLeft">{{message}}</span>
  <div class="photoTitle">吃货图鉴</div>
</div>
</template>

<script>
export default {
  data() {
    return {  
      message: '第'+'10天',
    }
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
  font-size: 25px;
  font-weight: bold;
}

</style>
