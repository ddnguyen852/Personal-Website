<template>
    <div>
        <v-navigation-drawer
      clipped
      fixed
      v-model="drawer"
      app
      temporary
    >
    <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="../assets/Icon-2.png" @click="routeTo('/')" style="cursor:pointer">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>Denny Nguyen</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
      </v-list>
      <v-list dense class="pt-0">
        <v-divider></v-divider>
        <v-list-tile v-for="(route, index) in routes" :key='index' :to="{path: route.path}">
          <v-list-tile-action>
            <v-icon>{{route.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{route.title}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Denny Nguyen</v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <a href="https://www.facebook.com/denny.nguyen.39"><img src="../assets/Facebook.png"></a> -->
      <!-- <a href="https://www.youtube.com/channel/UCmk_8rQT-1kznyNawHIHMYg"><img src="../assets/Youtube.png"></a>
      <a href="https://www.youtube.com/channel/UCmk_8rQT-1kznyNawHIHMYg"><img src="../assets/LinkedIn.png"></a>  -->
    </v-toolbar>
    <v-content>
      <router-view></router-view>
    </v-content>
    <!-- <v-footer app fixed>
      <span>&copy; 2017</span>
    </v-footer> -->
    </div>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    routes: [
      {
        title: 'About Me',
        path: '/AboutMe',
        icon: 'dashboard'
      },
      {
        title: 'Resume',
        path: '/Resume',
        icon: 'laptop'
      },
      {
        title: 'Projects',
        path: '/Projects',
        icon: 'settings'
      },
      {
        title: 'Dance',
        path: '/Dance',
        icon: 'tag_faces'
      },
      {
        title: 'Contact',
        path: '/Contact',
        icon: 'mail_outline'
      }
    ]
  }),
  props: {
    source: String
  },
  methods: {
    routeTo: function (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="postcss" scoped>
#facebookTile{
  padding-right: 2%;
}
</style>
