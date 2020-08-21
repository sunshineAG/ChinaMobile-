<template>
  <div class="Index-wrap">
    <div class="Index-header">
        <div class="Index-header-title">
          {{msg.content}}
        </div>
    </div>

  </div>
</template>

<script>
import { Button } from "vant"
export default {
  name: 'IndexPage',
  components:{
         [Button.name]:Button
    
  },
  data () {
    return {
      msg:{
        type:1,
        content:"信息安全报告",
        images:[
          "test.jpg"
        ]
      },
    }
  },
  methods:{
      getDeta(){
         this.$axios({
           method:'get',
           url:'',
           data:''
         }).then(res=>{
           let udata = res.data;
           if(udata.status === 1){
             
           }
         })
      }
  },
  created(){
    console.log("Server Start....")
  }
}
</script>
<style scoped>
.Index-wrap{
  height:100%;
  background:url('../assets/logo.png') no-repeat center center ;
  background-size: contain;
  overflow: auto;
}
.Index-header{
  padding-top:100px;
  width:100%;
  height:3000px;
  padding:10px 0;
}
.Index-header-title{
  margin-top:100px;
}
</style>
