<template>
  <span>
    <i :class="buttonIcon" v-if="!loading"></i>
    <span class="mr-1" v-if="!loading">{{buttonText}}</span>
    <b-spinner small type="grow" v-if="loading"></b-spinner>
    <span v-if="loading">{{loadingText}}</span>
  </span>
</template>

<script>
export default {
  name: "BtnLoading",
  components: {},
  data() {
    return {
      //
    };
  },
  props: {
    loading: {
      type: Boolean,
      default: () => false
    },
    loadingText: {
      type: String,
      default: () => "منتظر بمانید ..."
    },
    buttonText: {
      type: String,
      default: () => "ثبت"
    },
    buttonIcon: {
      type: String,
      default: () => "fa fa-save"
    }
  }
};
</script>

<style>
</style>
