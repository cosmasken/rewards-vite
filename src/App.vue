<script setup>
import WriteReview from './components/WriteReview.vue';
import RulesandGuidelines from './components/RulesandGuidelines.vue';
import TopAmbassadors from './views/TopAmbassadors.vue';
import WeeklyTopLeaderboard from './views/WeeklyTopLeaderboard.vue';
import Hero from './views/Hero.vue';
import WinSection from './components/WinSection.vue';
</script>

<template >
<div class="font-inter">

  <div class="mb-10 bg-hero-pattern h-screen" >
    <Hero/>
  </div>
  <section>
    <WinSection/>
  </section>
  <section class="w-full px-32 bg-gradient-to-b from-[#19009E] via-[#701CDC] to-[#1C97DC]">

<WeeklyTopLeaderboard/>
  </section>
  <section class="w-full px-32 bg-gradient-to-b from-[#19009E] via-[#701CDC] to-[#1C97DC]">
     <TopAmbassadors />
  </section>
  <section> <RulesandGuidelines /></section>
  <section><WriteReview /></section>

 


</div>
</template>

<style scoped>

</style>
