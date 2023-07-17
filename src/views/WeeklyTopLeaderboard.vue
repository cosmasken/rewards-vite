<script setup>
import ReviewCard from '../components/ReviewCard.vue';
import RefferalCard from '../components/RefferalCard.vue';
import AmbassadorPerformerCard from '../components/AmbassadorPerformerCard.vue';
import Monthly from '../components/Monthly.vue';
</script>

<template>
  <div class="w-full  bg-[linear-gradient(350deg,_#19009e_7%,#701cdc_68%,#1c97dc_95%)] bg-cover bg-50%_50% bg-blend-normal flex flex-col">
    <img src="../assets/svg/topleaderboard.png" class="w-full " alt="fuck"/>
     <!-- Main container-->
    <div class=" flex flex-col items-center px-32">
        <!-- Header-->
        <div className="text-center text-4xl  font-semibold tracking-[-1.5] leading-[60px] text-white w-full">
  Weekly Top Leaderboard
</div>
   <!-- Container with top reviews and top referrals-->
   <div class="flex flex-row space-x-10  ">
      <!-- Container with top reviews -->
     <div class="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.2)_0%,rgba(0,_0,_0,_0)_100%)] bg-cover bg-50%_50% bg-blend-normal flex flex-col basis-1/2 shadow-md rounded-lg space-y-6 pt-8 pb-12 px-6 min-w-[546px]">
      <p class="text-left text-4xl font-semibold  text-white ">  Top Reviews </p>
        <!-- card-->
        <ReviewCard/>
       <ReviewCard/>

        <!-- card-->
       
     </div>
       <!-- Container with  top referrals-->
     <div class="bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0.2)_0%,rgba(0,_0,_0,_0)_100%)] bg-cover bg-50%_50% bg-blend-normal flex flex-col basis-1/2 shadow-md rounded-lg min-w-[546px] px-6 py-8">

      <p class="text-left text-4xl font-semibold  text-white ">  Top Referrals </p>
      <div class="grid grid-cols-2 gap-7 px-4">
 <!--  top referrals card-->
       <RefferalCard/>
       <RefferalCard/>
       <RefferalCard/>
       <RefferalCard/>
        



      </div>

     </div>
   </div>
 </div>

 <div class="flex flex-col  space-y-6  w-full pb-10">
  <!--img src="../assets/svg/performertop.png" class="w-full max-h-[165px]" alt="fuck"/-->
   
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
    <img src="../assets/svg/rulestop.png" class="w-full max-h-[773px]" alt="Rules Top"/>

</div>
</template>

