<template>
    <div class='container'>
        <slot></slot>
    </div>
</template>

<style lang="less" scoped>
    .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 20px;
        background-color: #ffffff;
        color: #4d4f5c;
        box-shadow: 0 2px 6px rgb(0 0 0 / 4%);
        box-sizing: border-box;
    }

</style>