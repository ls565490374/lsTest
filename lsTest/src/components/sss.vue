<template>
    <el-button @click="testFunc">{{currentData}}</el-button>
</template>
<script>
export default {
    props:['currentData', 'fff'],
    methods:{
        testFunc(){
            this.fff = 1
            console.log(this.currentData)
            this.currentData.name = new Date()
        }
    }
}
</script>

