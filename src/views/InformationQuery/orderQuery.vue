<template>
  <div class="dashboard-container">
      <h1>订单查询</h1>
  </div> 
</template>

<script>

export default {
  name: "orderQuery",
  components: {
    qyhome,
    gahome
  },
  data() {
    return {
      isAdmin: null,
      dicDataArr: null,
     
    };
  },
  mounted() {
  },
  created() {
    // console.log(this.$store.state.user.dicData);
  },
  computed: {
    ...mapGetters(["name", "roles"]),

  },
  watch: {},
  methods: {
  }
};
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  // &-container {
  //   // margin: 30px;
  // }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
