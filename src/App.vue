<script>
export default {
  globalConfig: {
    usingComponents: {
      'van-tabbar': 'vant-weapp/dist/tabbar/index',
      'van-tabbar-item': 'vant-weapp/dist/tabbar-item/index',
      'van-tag': 'vant-weapp/dist/tag/index',
      'van-field': 'vant-weapp/dist/field/index',
      'van-search': 'vant-weapp/dist/search/index',
    },
  },
  created() {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);

    // eslint-disable-next-line
    console.log('app created and cache logs by setStorageSync');
  },
};
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
