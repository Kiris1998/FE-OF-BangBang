<template>
  <div class="page">
    <div class="searchBar">
      <span>西安市</span>
      <input type="text">
    </div>
    <div class="results">
      <div class="items">
        <p>西安美术学院</p>
        <p>西安市雁塔区</p>
      </div>
    </div>
  </div>
</template>

<script>
  
</script>

<style scoped>
  .page {
    width: 100vw;
    height: 100vh;
    background: #f2f2f2;
  }
  input {
    display: inline-block;
    background: #e6e6e6;
    border-radius: 8px;
    width: 90%;
    margin: 13px;
  }
  .searchBar {
    border-bottom: solid #b2b2b2 1px;
    width: 100vw;
    display: flex;
    box-sizing: border-box;
    height: 50px;
  }
  .searchBar span {
    display: inline-block;
    width: 15%;
    font-size: 13px;
    height: 50px;
    line-height: 50px;
    margin-left: 20px;
  }
  .results {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4d4d4d;
  }
  .items p:nth-child(2) {
    color: #b2b2b2;
    font-size: 13px;
  }
  .items {
    width: 90vw;
    border-bottom: solid #b2b2b2 1px;
    padding: 10px 0 5px 0;
  }
</style>

