<template>
  <div id="app">
    <v-header></v-header>
    <v-nav></v-nav>
   	<router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/header/v-header';
import vNav from './components/nav/v-nav';

export default {
  name: 'app',
  components: {
    vHeader,
    vNav
  }
};
</script>

<style>
</style>
