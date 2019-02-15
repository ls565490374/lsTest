<template>
    <div class="ls-header-menu">
        {{configData.headerData}}
    </div>
</template>
<script>
export default {
    props:{
        configData:{
            type:Object,
            default:{}
        }
    }
}
</script>
<style lang="less">

</style>