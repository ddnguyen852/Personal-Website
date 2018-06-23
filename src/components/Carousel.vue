<template>
  <v-carousel>
    <v-carousel-item v-for="(item,i) in items" :src="item" :key="i"></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data () {
    return {
      items: ['../assets/Full-pic-3.jpg', '../assets/OSB.jpg', '../assets/DBTS.jpg']
    }
  }
}
</script>
