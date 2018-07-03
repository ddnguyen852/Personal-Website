<template>
<div class="container">
    <v-parallax id="parallax-header" class="griditem-header" :src=parallaxSrc>
      <div class="centered">
      <h2 class="margin-bottom-7px">Hi, I'm Denny.</h2>
      <p class="padding-bottom-15px paragraph">
        Software Developer, Ballroom Dancer, Coach
      </p>
      <v-btn outline>Learn More</v-btn>
    </div>
    </v-parallax>
    <div class="griditem-main">
      <h4>Software Developer by day, Ballroom Dancer by night.</h4>
        <p class="paragraph">
         Worlds apart, yet eerily similar. I aim to get the best of both.
      </p>
    </div>
    <v-parallax class="griditem-parallax2" :src=items[0].src>
    </v-parallax>
    <div class="griditem-quote">
      <h4 class="griditem1">I don't want to survive. I want to live.</h4>
      <div class="griditem2">
        <div class="griditem3">
          <a class="white-link" href="#">Home</a>
          <a class="white-link" href="#">About Me</a>
          <a class="white-link" href="#">Education</a>
          <a class="white-link" href="#">Projects</a>
        </div>
      </div>
        <div class="griditem4">
          <a href="https://www.facebook.com/denny.nguyen.39" class="fa fa-facebook"></a>
          <a href="https://www.instagram.com/denstagrammm/?hl=en" class="fa fa-instagram"></a>
          <a href="https://www.youtube.com/channel/UCmk_8rQT-1kznyNawHIHMYg" class="fa fa-youtube-play"></a>
          <a href="https://www.linkedin.com/in/denny-nguyen-8329a5b6/" class="fa fa-linkedin"></a>
        </div>
    </div>
</div>
  </template>
<script>
import carousel from './Carousel.vue'
export default {
  name: 'AboutMe',
  data () {
    return {
      parallaxSrc: require('../assets/Zion2.jpg'),
      facebookSrc: require('../assets/Facebook.svg'),
      items: [
        {
          src: require('../assets/rhythm-rumba-line.jpg')
        },
        {
          src: require('../assets/latin-rumba-line.jpg')
        },
        {
          src: require('../assets/DQ-dip-3.png')
        },
        {
          src: require('../assets/Zion.jpg')
        }
      ]
    }
  },
  components: {
    carousel
  }
}
</script>

<style lang="postcss">
.container{
  margin: 0;
  font-size: 2em;
  display: grid;
  padding: 0;
  max-width: 100% !important;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(10, 25vh);
  grid-auto-flow: dense;
  grid-template-areas:   "header header header header"
  "header header header header"
  "header header header header"
  "header header header header"
  "main main main main"
  "main main main main"
  "parallax2 parallax2 parallax2 parallax2"
  "parallax2 parallax2 parallax2 parallax2"
  "parallax2 parallax2 parallax2 parallax2"
  "quote quote quote quote"
}
div a {
  padding: 5px;
  text-decoration: none;
  color: white;
}
.fa:hover {
    opacity: 0.7;
}
.social-media-icons {
  display: inline-block;
  padding-top: 2%;
}
.griditem-header {
  grid-area: header;
}
#parallax-header {
  width:100%;
  height:100% !important;
}
#parallax-header div img {
  top: -36%;
}
.griditem-description {
  grid-area: submain;
}
.griditem-main {
  grid-area: main;
  display: grid;
  grid-gap: 20px;
  align-content: center;
  justify-items: center;
  background-color: #edeeef;
  color: black
}
.griditem-parallax2 {
  grid-area: parallax2;
}
.griditem-quote {
  grid-area:quote;
  display: grid;
  grid-template-rows: (3, 33%);
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: start;
}
.griditem1 {
  grid-column: 2 / span 2;
}
.griditem2 {
  grid-column: 2 / span 2;
  grid-row: 2;
}
.griditem3 {
  align-self: start;
}
.griditem4{
  grid-column: 2 / span 2;
}
.griditem-footer {
  grid-area:footer;
  display:grid;
  justify-items: center;
}
.expand-width{
  width: 100%
}
.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}
.paragraph {
  font-size: 16px !important;
  font-weight: bold;
}
.margin-bottom-7px{
  margin-bottom: 7px;
}
.padding-bottom-15px{
  padding-bottom: 15px;
}
.content{
  padding: 0 !important;
}
.white-link {
  font-size: 0.6em;
}
.white-link:hover {
  opacity: 0.7;
}
    @media (max-width: 700px) {
      .container{
        margin: 0;
        font-size: 1.6em;
        display: grid;
        padding: 0;
        max-width: 100% !important;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(11, 25vh);
        grid-auto-flow: dense;
        grid-template-areas:   "header header header header"
        "header header header header"
        "header header header header"
        "header header header header"
        "main main main main"
        "main main main main"
        "parallax2 parallax2 parallax2 parallax2"
        "parallax2 parallax2 parallax2 parallax2"
        "parallax2 parallax2 parallax2 parallax2"
        "quote quote quote quote"
        "footer footer footer footer"
      }
    }
</style>
