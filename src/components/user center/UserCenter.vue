<template>
  <div id="first">
    <body id="poster">
      <el-upload
        class="file-upload"
        ref="upload"
        action="http://localhost:8443/api/uploadfile"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        :on-success="handleSuccess"
        multiple
        :limit="1"
        :before-upload="beforeUpload"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button size="big" type="primary">Click to Upload</el-button>
        <div slot="tip" class="el-upload__tip">Upload anything you like</div>
      </el-upload>
    </body>
  </div>
</template>

<script>
export default {
  name: 'UserCenter',
  data () {
    return {
      fileList: [],
      url: ''
    }
  },
  methods: {
    handleRemove (file, fileList) {
    },
    handlePreview (file) {
    },
    handleExceed (files, fileList) {
      this.$message.warning(`Limit to one file，select ${files.length} file(s)，total ${files.length + fileList.length} file(s)`)
    },
    beforeRemove (file, fileList) {
      return this.$confirm(`Delete ${file.name}？`)
    },
    handleSuccess (response) {
      this.url = response
      this.$emit('onUpload')
      this.$message.warning('Success!')
    },
    clear () {
      this.$refs.upload.clearFiles()
    },
    beforeUpload (file) {
      // var testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
      // const extension = testmsg === 'xls'
      // const extension2 = testmsg === 'xlsx'
      const isLt2M = file.size / 1024 / 1024 < 10
      // if(!extension && !extension2) {
      //   this.$message({
      //     message: "only xls and xlsx are allowed",
      //     type: 'warning'
      //   });
      // }
      if (!isLt2M) {
        this.$message({
          message: 'File no exceeding 10 MB',
          type: 'warning'
        })
      }
      return isLt2M
    }
  }
}
</script>

<style scoped>
  *{margin: 0; padding: 0;}
  #poster {
    background: url("../../assets/background.jpg") no-repeat top;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }
  body{
    margin: 0px;
  }
</style>
