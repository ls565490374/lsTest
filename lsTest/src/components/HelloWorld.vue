<template>
  <el-container class="ls-container">
    <el-header class="ls-header">header</el-header>
    <el-container>
      <el-aside class="ls-aside">
        <el-menu :default-active="defaultActive" @select="selectFunc">
          <template v-for="o in menuData.leftMenu">
            <el-submenu :index="o.url" :key="o.index">
              <template slot="title">{{o.name}}</template>
              <el-menu-item-group>
                <el-menu-item
                  @click="navMenuOpen(o1)"
                  :key="o1.index"
                  :index="o1.index"
                  v-for="o1 in o.children"
                >
                  <i class="el-icon-loading"></i>
                  <span>{{o1.name}}</span>
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </template>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main class="ls-main">
          <el-tabs
            v-model="activeIndex"
            closable
            @tab-remove="tabRemoveFunc"
            @tab-click="tabClickFunc"
          >
            <el-tab-pane v-for="o in topMenu" :label="o.name" :name="o.index" :key="o.index">
              <iframe
                :src="o.url"
                frameborder="none"
                scrolling="auto"
                style="width: 100%; height: 100%;"
              ></iframe>
              <!-- <span>{{o.url}}</span> -->
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
import data from "../assets/mockData/data.json";
import { setTimeout } from "timers";
export default {
  components: {
  },
  data() {
    return {
      activeIndex: "",
      defaultActive: "",
      menuData: {
        leftMenu: []
      },
      topMenu: []
    };
  },
  created() {
    this.menuData.leftMenu = data.leftMenu;
  },
  watch: {
    activeIndex(index) {
      for (let o of this.topMenu) {
        if (o.index == index) {
          this.defaultActive = o.index;
          break;
        }
      }
    }
  },
  methods: {
    tabClickFunc(a) {
      console.log(a);
    },
    tabRemoveFunc(index) {
      let len = this.topMenu.length;
      let temp = 0;
      for (let i = len - 1; i >= 0; i--) {
        if (this.topMenu[i].index == index) {
          this.topMenu.splice(i, 1);
          temp = i;
        }
      }
      if (this.topMenu[temp - 1]) {
        this.activeIndex = this.topMenu[temp - 1].index;
      } else {
        //已经splice了一下 所以这里的temp就不加1了
        if (this.topMenu[temp]) {
          this.activeIndex = this.topMenu[temp].index;
        } else {
          this.activeIndex = "";
        }
      }
    },
    selectFunc(row) {
      // console.log(row);
    },
    navMenuOpen(data) {
      function deepSet(arr) {
        for (let o of arr) {
          o.isActive = false;
          if (o.children[0]) {
            deepSet(o.children);
          }
        }
      }
      deepSet(this.menuData.leftMenu);
      if (this.topMenu.some(o => o.index === data.index)) {
        data.isActive = true;
        this.activeIndex = data.index;
      } else {
        data.isActive = true;
        this.topMenu.push(data);
        this.activeIndex = data.index;
      }
    },
    testFunc() {}
  }
};
</script>
<style lang='less'>
.ls-container {
  height: 100%;
  .el-tabs {
    height: 100%;
    .el-tabs__content {
      height: 100%;
      .el-tab-pane {
        height: 100%;
      }
    }
  }

  .activeClass {
    color: white;
    background: #ec9c09;
    font-weight: 700;
    box-shadow: 0px 5px 10px gray;
    border-radius: 3px;
  }
  .ls-header {
    background: #847b7b;
    color: white;
  }
  .ls-aside {
    width: 300px !important;
    border: 1px solid gray;
    border-radius: 5px;
  }
  .ls-main {
    margin: 3px;
    border-left: none;
    border-radius: 5px;
    height: 100%;
  }
}
</style>