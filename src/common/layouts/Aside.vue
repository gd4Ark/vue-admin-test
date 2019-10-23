<template>
  <div class="app-aside">
    <el-menu v-if="!_.isEmpty(navList)"
             :default-active="activeIndex"
             class="el-menu-vertical"
             router>
      <template v-for="item of navList">
        <router-link :key="item.path"
                     class="link"
                     :to="item.path">
          {{ item.meta.title }}
        </router-link>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    activeIndex: ''
  }),
  computed: {
    ...mapGetters(['title', 'navList'])
  },
  watch: {
    $route() {
      this.updateActive()
    }
  },
  mounted() {
    this.updateActive()
  },
  beforeUpdate() {
    this.updateActive()
  },
  methods: {
    updateActive() {
      const activeIndex = this.$route.matched.find(item => {
        return !item.redirect
      }).path
      if (this.activeIndex !== activeIndex) {
        this.activeIndex = activeIndex
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.app-aside {
  @include wh($sidebar-width, 100%);
  @include flex-column;
  & > .el-menu {
    flex: 1;
    box-shadow: 4px 1px 12px rgba(0, 55, 107, 0.04);
    overflow-y: auto;
    @include no-scrollbar;
  }
}
span {
  @include no-user-select;
}
</style>
<style lang="scss" scoped>
.link {
  display: flex;
  @include sub-center;
  line-height: 50px;
  &.router-link-active {
    color: $color-primary;
  }
}
</style>
