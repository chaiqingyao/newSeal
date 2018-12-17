<template>
  <div class="dashboard-container">
    <!-- {{dicData}} -->
    <!-- <div class="dashboard-text">name:{{name}}</div>
    <div class="dashboard-text">roles:<span v-for='role in roles' :key='role'>{{role}}</span></div>-->
    <!-- {{roles[0]}} -->
    <!-- 公安端首页 -->
    <div v-if="roles[0] == 'admin'">
      <gahome></gahome>
    </div>
    <div v-if="roles[0] == 'qiye'">
      <qyhome></qyhome>
    </div>
      
  </div> 
</template>

<script>
import { mapGetters } from "vuex";
import qyhome from "./homePages/qyHome";
import gahome from "./homePages/gaHome";

export default {
  name: "dashboard",
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
