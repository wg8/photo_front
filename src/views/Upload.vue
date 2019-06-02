<template>
    <div>
        <div class="upload">
            <div>
                <h1>图片上传</h1>
            </div>
            <el-upload
                class="upload-file"
                drag
                :action='uploadImage()'
                :on-success="handleAvatarSuccess"
                multiple
                :auto-upload="true">
            <i class="el-icon-upload" ></i>

            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            </el-upload>
        <div class="photoTime">
            <div class="block">
                <el-date-picker
                style="width:300px"
                v-model="photoDate"
                type="date"
                format="yyyy 年 MM 月 dd 日"
                value-format="yyyy-MM-dd"
                placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
        <div class="photoDescribe">
           <el-input
            style="width:300px"
            type="textarea"
            :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容"
            v-model="photoText">
            </el-input>
        </div>
        <div class="btn">
            <el-button type="primary" @click="newSubmitForm" style="width:300px">提交</el-button>
        </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import { uploadPhoto } from '../api/api';

export default {   
    data() {
        return {
            photoText: "",
            photoDate: "",
            photoPath: "",
            resultCode:""      
    }
  },
  methods: {
    uploadImage: function(){
        return 'http://127.0.0.1:8081/baby/photo/upload/image'
    },
    handleAvatarSuccess(result){
        this.photoPath = result.data;
    },
    uploadInfo: function(){
        let postData = {
            photoDescribe: this.photoText,
            photoTime: this.photoDate,
            photoPath: this.photoPath
        }
        if(this.photoPath == ''){
            alert("请选择图片")
            return;
        }
        uploadPhoto(postData).then(response => {
            this.logining = false;
            if (response.code !== 0) {
              this.$message({
                message: response.msg,
                type: 'error'
              });s
            } else {
                this.$message({
                    message: '图片上传成功',
                    type: 'success'
                });
                location.reload();
            }
        });
      },
    newSubmitForm(){//确定上传
        this.uploadInfo();
    },
    open() {
       
    },
  }
}
</script>

<style>
 .upload {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

.upload h1{
    margin-top: -10px;
    text-align:center; 
}
.photoTime{
    margin-top: 20px;
    text-align:center; 
}

.photoDescribe{
    margin-top: 20px;
    text-align:center; 
}
.btn{
    margin-top: 20px;
    text-align:center; 
    margin-bottom: 20px;
}
</style>
