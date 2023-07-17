<script setup>
import AmbassadorPerformerCard from '../components/AmbassadorPerformerCard.vue';
import Monthly from '../components/Monthly.vue';
</script>
<template>
    <div class="flex flex-col  space-y-6  w-full  bg-gradient-to-b from-[#701CDC] via-[#701CDC] to-[#3e474d]">
      <div class=" absolute top-0">
    <img src="../assets/svg/ambassadortop.svg" class="w-full h-[201px]"/>

</div>
      <p class="text-center text-4xl font-semibold  text-white">
  Top 10 Campus Ambassador Performers
        </p>
      <Monthly/>
<div class="flex flex-col space-y-4 px-32">

    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    
  
  </div>

    </div>
</template>
