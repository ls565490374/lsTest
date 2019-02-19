<template>
    <div class="ls-header-menu">
        {{configData.headerData}}
        <el-button @click='testFunc'></el-button>
        <appOne @click='aaa'></appOne>
    </div>
</template>
<script>
import appOne from '@/components/appOne/index.vue'
export default {
    components:{appOne},
    props:{
        configData:{
            type:Object,
            default:{}
        }
    },
    methods:{
        aaa(a){
            console.log(a)
        },
    	testFunc(){
    		console.log(11)
    	}
    }
}
</script>
<style lang="less">

</style>