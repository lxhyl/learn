<template>
    <div>
           <h6>内置以下插件(库)</h6>
          <p v-for="(item,index) in list" :key="index">
              <a :href="item.url" target="_balnk">{{item.name}}</a>
          </p>
     
    </div>
</template>
<script>
export default {
  name:'hello',
  data(){
      return {
          list:[
              {name:'vuex',url:'https://vuex.vuejs.org/zh/'},
              {name:'axios',url:'http://www.axios-js.com/'},
              {name:'vue-router',url:'https://router.vuejs.org/zh/guide/#html'},
              {name:'element-ui',url:'https://element.eleme.cn/#/zh-CN/component/installation'}
          ]
      }
  }   
}
</script>
<style scoped>

a{
    color:#43A047;
}
</style>