<template>
    <div class="about-container">
        <div class="item1">
            <img :src=zionAboutMe alt="">
        </div>
        <div class="item2">
            <div>
                <h3>Hello!</h3> <br>
                <p>
                    My name is Denny Nguyen. I am a recent college graduate from Arizona State University.
                    Over the years of my time there, I have developed a passion for Software Development
                    as well as ballroom dance. I love both for their own reasons, however, they affect one
                    another more than one may think. The number of positive aspects they have on each other,
                    and in turn me, is so vast that I'd rather not bore you in a simple about me post. Check
                    out my other pages if you want to know more!
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      zionAboutMe: require('../assets/ZionAboutMe.jpg')
    }
  }
}
</script>

<style lang="postcss">
    @media (min-width: 1251px) {
        .about-container {
            font-size: 1.2em;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "item1 item2";
            padding-top: 10vh;
        }
        .item1 {
            grid-area: item1;
            justify-self: center;
        }
        .item1 img {
            width: minmax(100%, 400px);
            height: minmax(100%, 500px);
        }
        .item2 {
            padding: 15px;
            grid-area: item2;
            display: grid;
            grid-template-columns: 3fr 1fr;
        }
    }
    @media (max-width: 1250px) {
        .about-container {
            font-size: 1.2em;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 1fr;
            grid-template-areas: "item1 item2";
        }
        .item1 {
            grid-area: item1;
            justify-self: center;
        }
        .item1 img {
            width: minmax(100%, 400px);
            height: minmax(100%, 500px);
        }
        .item2 {
            padding: 15px;
            grid-area: item2;
        }
    }
    @media (max-width: 700px) {
        .about-container {
            font-size: 1.2em;
            display: grid;
            grid-gap: 20px;
            grid-template-columns: 1fr;
            grid-template-rows: 1fr 1fr;
            grid-template-areas: "item1"
            "item2";
        }
        .item1 {
            grid-area: item1;
        }
        .item1 img {
            width: 100%;
            height: 100%;
        }
        .item2 {
            padding: 15px;
            grid-area: item2;
        }
    }
</style>
