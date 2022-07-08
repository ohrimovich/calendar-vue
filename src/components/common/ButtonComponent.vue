<template>
    <button :type="type" class='button'>
      <slot></slot>
    </button>
</template>

<script>
    export default {
      name: 'ButtonComponent',
      props: {
          type: {
              type: String,
              default: 'button'
          },
      } 
    }
</script>

<style lang="less" scoped>
    .button {
        cursor: pointer;
        background: #ffffff;
        padding: 8px 18px;
        border: 1px solid #d7dae2;
        box-shadow: 0 2px 3px rgb(0 0 0 / 5%);
        font-size: 13px;
        transition: all .3s ease-in-out;

        &:hover,
        &:focus {
            color: #3b86ff;
            background-color: #fcfcfc;
        }
    }
  
</style>