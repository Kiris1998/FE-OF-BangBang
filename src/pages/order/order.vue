<template>
  <div class="page">
    <div class="bar">
      <div class="select">
        <span :class="{selected:myFlage}" @click="goMine">我的发布</span>
        <span :class="{selected:!myFlage}" @click="goOthers">我的抱单</span>
      </div>
    </div>
    <order-pushing :meOrOthers="myFlage"></order-pushing>
    <finished-pushing :meOrOthers="myFlage"></finished-pushing>
  </div>
</template>

<script>
  import orderPushing from '@/components/orderPushing'
  import finishedPushing from '@/components/finishedPushing'
  export default{
    components: {
      orderPushing,
      finishedPushing
    },
    data () {
      return {
        myFlage: true
      }
    },
    methods: {
      goMine: function () {
        this.myFlage = true
      },
      goOthers: function () {
        this.myFlage = false
      },
      checkThis(){
        console.log('aaa')
      }
    }
  }
</script>

<style scoped>
  .page {
    background: #e6e6e6;
    width: 100vw;
    height: 100vh;
  }
  .bar {
    background: #fdd731;
    height: 50px;
    text-align: center;
    position: relative;
  }
  .select{
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  .select span {
    display: inline-block;
    padding:0 10px 5px 10px;
  }
  .select span:nth-child(1){
    margin-right: 50px;
  }
  .selected {
    border-bottom: solid #e15b4c 3px;
  }
</style>
