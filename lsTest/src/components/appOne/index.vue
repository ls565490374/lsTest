<template>
    <div>
        <button @click='testFunc'>aaa</button>
    </div>
</template>
<script>
import vue from 'vue'
export default {
    methods:{
        testFunc(e){
            this.$emit('click',e)
        }
    }
}
</script>
<style lang='less'>

</style>
