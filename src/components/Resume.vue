<template>
    <div class="resumeContainer">
        <div id="firstObject">
            <img :src=mainSrc id="resumeImage" alt="">
            <div class="absolute-center">
                <label class="italics">Learn more about my Accomplishments</label>
                <h1 class="padding-2vh">DIG A LITTLE DEEPER</h1>
                <v-btn outline>Download Resume</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      mainSrc: require('../assets/Zion2.jpg')
    }
  }
}
</script>

<style lang="postcss">
.resumeContainer {
    font-size: 1.5em;
    margin: 0;
    padding: 0;
    height: 40vh;
    display: grid;
    position: relative;
}
.absolute-center {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
}
.padding-2vh{
    padding-bottom: 2vh;
}
.italics {
    font-style: italic;
}
#resumeImage {
    width: 100%;
    height: 100% !important;
}
</style>
