<template>
  <div class="ls-right-content-menu">
    <el-tabs
      v-model="configData.mainContentData.activeName"
      @tab-click="tabClickFunc"
      @tab-remove="tabRemoveFunc"
      closable
    >
      <el-tab-pane
        :name="o.index"
        v-for="o in configData.mainContentData.data"
        :label="o.name"
        :key="o.index"
        :lazy="true"
      >
        <iframe :src="o.url" frameborder="none" scrolling="auto" style="width: 100%; height: 100%;"></iframe>
        <!-- <span>{{o.url}}</span> -->
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
export default {
  props: {
    configData: {
      default: {},
      type: Object
    }
  },
  watch: {
    "configData.mainContentData.activeName"(index) {
      this.configData.leftMenuData.defaultActive = index;
    }
  },
  methods: {
    tabRemoveFunc(index) {
      let mainContentData = this.configData.mainContentData;
      let leftMenuData = this.configData.leftMenuData;
      let len = mainContentData.data.length;
      let temp = "";
      for (let i = len - 1; i >= 0; i--) {
        if (mainContentData.data[i].index == index) {
          mainContentData.data.splice(i, 1);
          temp = i;
        }
      }
      //删除之后默认选中前一个，若前一个不存在则选择后一个
      if (mainContentData.data[temp - 1]) {
        leftMenuData.defaultActive = mainContentData.data[temp - 1].index;
        mainContentData.activeName = mainContentData.data[temp - 1].index;
      } else {
        //已经splice了一下 所以这里的temp就不加1了
        if (mainContentData.data[temp]) {
          leftMenuData.defaultActive = mainContentData.data[temp].index;
          mainContentData.activeName = mainContentData.data[temp].index;
        } else {
          leftMenuData.defaultActive = "";
        }
      }
    },
    tabClickFunc(index) {
      // console.log(index)
    }
  }
};
</script>
<style lang="less">
//以下的样式是为了全屏
.ls-right-content-menu {
  height: 100%;
  .el-tabs {
    height: 100%;
      .el-tabs__item.is-active{
        background-color: #b79e45 !important;
        color: #fff;
        font-weight: 1000;
        border-top-left-radius:5px;
        border-top-right-radius:5px;
      }
    .el-tabs__content {
      height: calc(100% - 66px);
      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
</style>