<template>
    <div class="choose">
        <div class="choose-title">
            <span>
                西安市
            </span>
            <img src="/static/image/chooseAddr/search.png" />
            <input placeholder="物品从哪儿取"/>
        </div>
        <div class="choose-content">
            <ul>
                <li>
                    <div class="choose-content-avatar">
                        王
                    </div>
                    <div class="choose-content-info">
                        <div class="choose-content-info-1">
                            <div>
                                王小明
                            </div>
                            <span>
                                15929320201
                            </span>
                        </div>
                        <div class="choose-content-info-2">
                            西安市雁塔区含光南路100号 西安美术学院3-107
                        </div>
                    </div>
                    <div class="choose-content-addr">
                        <img src="/static/image/chooseAddr/edit.png" />
                    </div>
                    <div>

                    </div>
                </li>
                <li>
                    <div class="choose-content-avatar">
                        白
                    </div>
                    <div class="choose-content-info">
                        <div class="choose-content-info-1">
                            <div>
                                白果
                            </div>
                            <span>
                                15929320201
                            </span>
                        </div>
                        <div class="choose-content-info-2">
                            西安市新城区韩森寨幸福南路100号 西安建筑科技大学华清学院
                        </div>
                    </div>
                    <div class="choose-content-addr">
                        <img src="/static/image/chooseAddr/edit.png" />
                    </div>
                    <div>

                    </div>
                </li>
            </ul>
            <div class="choose-content-bnt">
                <img src="/static/image/chooseAddr/config.png"/>
            </div>
        </div>
    </div>
</template>

<script>
import card from '@/components/card'    
import {jumpTo} from '../../utils/utils'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    linkToSend(){
      jumpTo('../helpSend/main')
    },
    linkToShop(){
      jumpTo('../helpShop/main')
    }
  }
}
</script>

<style scoped>

</style>
<style lang="scss">
  @import '../../common/style/page/chooseAddr.scss';
  page{
  background: #E6E6E6;
    margin:0 auto;
  }
</style>