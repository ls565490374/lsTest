<template>
  <div class="ls-wrap">
    <el-container style="height:100%">
      <el-header class="ls-header">
        <ls-header-menu :configData="configData"></ls-header-menu>
      </el-header>
      <el-container style="height:100%">
        <el-aside class="ls-aside">
          <ls-left-menu :configData="configData"></ls-left-menu>
        </el-aside>
        <el-main class="ls-main">
          <ls-right-content :configData="configData"></ls-right-content>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import data from "../assets/mockData/data.json";

import lsHeaderMenu from "@Layout/headerMenu/index.vue";
import lsLeftMenu from "@Layout/leftMenu/index.vue";
import lsRightContent from "@Layout/rightContent/index.vue";
import { setTimeout, setInterval } from "timers";
export default {
  components: {
    lsHeaderMenu,
    lsLeftMenu,
    lsRightContent
  },
  data() {
    return {
      configData: {
        headerData: {},
        leftMenuData: {
          data:[],
          defaultActive:''
        },
        mainContentData: {
          activeName:'',
          data:[]
        },
        arr: [1, 2]
      }
    };
  },
  created() {
    
    setTimeout(() => {
      // this.configData.headerData = { a: 11, b: 22 };
      this.configData.leftMenuData.data = data.leftMenu;
      // this.configData.mainContentData = [1,2,3,4,56];
    }, 1000);
  }
};
</script>
<style lang="less">
.ls-wrap {
  height: calc(100% - 4px);
  border: 2px dotted purple;
  .ls-header {
    color: red;
    //border: 1px solid red;
  }
  .ls-aside {
    height: 100%;
    color: blue;
    //border: 1px solid blue;
  }
  .ls-main {
    height: 100%;
    color: teal;
    //border: 1px solid teal;
  }
}
</style>
