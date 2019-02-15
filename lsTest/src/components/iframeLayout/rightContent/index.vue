<template>
  <div class="ls-right-content-menu">
    <el-tabs v-model="configData.mainContentData.activeName" @tab-click="handleClick">
      <el-tab-pane
        :name="o.index"
        v-for="o in configData.mainContentData.data"
        :label="o.name"
        :key="o.index"
      >
        <iframe :src="o.url" frameborder="none" scrolling="auto" style="width: 100%; height: 100%;"></iframe>
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
  data() {
    return {
      activeName: ""
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>
<style lang="less">
//以下的样式是为了全屏
.ls-right-content-menu {
  height: 100%;
  .el-tabs {
    height: 100%;
    .el-tabs__content {
      height: calc(100% - 66px);
      .el-tab-pane {
        height: 100%;
      }
    }
  }
}
</style>