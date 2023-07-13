<script setup>
import AmbassadorPerformerCard from '../components/AmbassadorPerformerCard.vue';
</script>
<template>
    <div class="flex flex-col  space-y-6  w-full ">
        <p class="text-center text-4xl font-semibold  text-white">
  Top 10 Campus Ambassador Performers
        </p>
        <div class="bg-black/12 shadow-md flex flex-row justify-start gap-20 max-w-[445px] text-center items-center p-2 rounded-full">
  <div class="bg-white flex flex-col justify-start w-1/2 h-8 items-center my-1 py-1 rounded-[40px]">
    <div class="font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-[#003ee0] w-16">
      Monthly
    </div>
  </div>
  <div class=" font-semibold  text-white  shrink-0">
    Quarterly
  </div>
 
</div>
<div class="flex flex-col space-y-4">

    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    <AmbassadorPerformerCard/>
    
  
  </div>

    </div>
</template>
