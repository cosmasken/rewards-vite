<script setup>
import WriteReview from './components/WriteReview.vue';
import RulesandGuidelines from './components/RulesandGuidelines.vue';
import TopAmbassadors from './views/TopAmbassadors.vue';
import WeeklyTopLeaderboard from './views/WeeklyTopLeaderboard.vue';
import Hero from './views/Hero.vue';
import WinSection from './components/WinSection.vue';
import Footer from './views/Footer.vue';
</script>

<template >
<div class="font-inter bg-white h-screen ">
  <img src="./assets/svg/hero.png" class="w-full h-[931px] absolute top-0 cover"/>
  <div class="relative h-[931px] pl-40 pt-10 ">
    <Hero/>
  </div>

  <div class="relative">
    <WinSection/>
   
  </div>

 

  <div class="relative ">
    <WeeklyTopLeaderboard/>
  
  </div>

<div class="relative">
    <RulesandGuidelines />
  </div>
  

  <div class="relative">
  
<WriteReview />
  </div>
  <div class="relative">
<Footer />
</div>
    
</div>

</template>

<style scoped>
.hero:after {
  background: url(https://raw.githack.com/SochavaAG/example-mycode/master/pens/animation-wave-shadow/images/wave.svg) repeat-x scroll 0 0;
}
 .gradient {
        background: linear-gradient(90deg, #d53369 0%, #daae51 100%);
      }
</style>
