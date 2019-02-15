<template>
  <div class="ls-left-menu">
    <el-menu @select="selectFunc">
      <el-submenu v-for="(o, index) in configData.leftMenuData" :index="o.index" :key="index">
        <template slot="title">
          <span>{{o.name}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(o1,index1) in o.children"
            :index="o1.index"
            :key="index1"
          >{{o1.name}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  props: {
    configData: {
      type: Object,
      default: {}
    }
  },
  methods: {
    selectFunc(index) {
      let selectData = {};
      function deepSelectData(index, source) {
        if (source[0]) {
          for (let i = 0; i < source.length; i++) {
            if (source[i].index == index) {
              selectData = source[i];
            } else {
              deepSelectData(index, source[i].children);
            }
          }
        }
      }
      deepSelectData(index, this.configData.leftMenuData);

    //如果导航栏中存在该值 则不增加
      if (!this.configData.mainContentData.data.some(o => o.index == index)) {
        this.configData.mainContentData.data.push(selectData);
        this.configData.mainContentData.activeName = selectData.index;
      }else{
          this.configData.mainContentData.activeName = selectData.index;
      }
    },
    testFunc() {
      let time = new Date().getTime();
      this.configData.headerData = { data: [1, 2, 3, 4, time] };
      this.configData.arr.splice(1, 2);
    }
  }
};
</script>
<style lang="less">
</style>