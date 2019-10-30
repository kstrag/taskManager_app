<template>
  <v-app>
      <v-content>
          <app-menu></app-menu>
          <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
      'app-menu': Menu
  },
  data: () => ({
      openSideNav: false
  }),
};
</script>
