<template>
    <div id="app">
        脚手架已经构建成功了！
        <hello></hello>
    </div>
</template>
<script>
import hello from "./components/hello.vue"

export default {
    name:'app',
    components:{
      hello
    }
}
</script>
<style scoped>
 #app{
     font-size: 20px;
     width: 100vw;
     text-align: center;
   
 }
</style>