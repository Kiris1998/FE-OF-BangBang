<template>
  <div class="page">
    <p class="title">我的推荐人</p>
    <recommend-info></recommend-info>
    <button>邀请有奖</button>
  </div>
</template>

<script>
  import recommendInfo from '@/components/recommendInfo'
  export default {
    components: {
      recommendInfo
    }
  }
</script>

<style scoped>
  .page {
    background: #e2e2e2;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .title {
    color: #808080;
    position: absolute;
    top: 10px;
    left: 20px;; 
    font-weight: bold;
  }
  
  button {
    background: black;
    color: white;
    width: 90vw;
    position: absolute;
    bottom: 20px;
    left: 5vw;
  }
</style>
