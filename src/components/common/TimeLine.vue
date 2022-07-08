<template>
    <div class="wrapper">
        <div class='marker'></div>
        <div class='line'></div>
    </div>
    
</template>

<script>
    export default {
        name: 'TimeLine'
    }
</script>

<style lang="less" scoped>
.wrapper {
    position: absolute;
    top: 0;
    left: 0;
     width: 100%;
     display: flex;
     z-index: 1;

    .marker {
        display: block;
        background-color: #3b86ff;
        width: 9px;
        height: 9px;
        border-radius: 50%;
        transform: translate(-50%,-50%);

}
    .line {
        position: absolute;
        display: block;
        background-color: #3b86ff;
        width: 100%;
        height: 1px; 
    }
}


</style>