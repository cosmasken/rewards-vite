<script setup>
import ReviewCard from '../components/ReviewCard.vue';
import RefferalCard from '../components/RefferalCard.vue';
</script>

<template>
     <!-- Main container-->
    <div class=" flex flex-col items-center">
        <!-- Header-->
   <p class="text-center text-4xl font-semibold  text-white "> Weekly Top Leaderboard </p>
   <!-- Container with top reviews and top referrals-->
   <div class="flex flex-row space-x-10  ">
      <!-- Container with top reviews -->
     <div class="flex flex-col basis-1/2 shadow-md rounded-lg space-y-6 px-7">
      <p class="text-center text-4xl font-semibold  text-white ">  Top Reviews </p>
        <!-- card-->
        <ReviewCard/>
       <ReviewCard/>

        <!-- card-->
       
     </div>
       <!-- Container with  top referrals-->
     <div class="flex flex-col basis-1/2 shadow-md rounded-lg">

      <p class="text-center text-4xl font-semibold  text-white ">  Top Referrals </p>
      <div class="grid grid-cols-2 gap-7">
 <!--  top referrals card-->
       <RefferalCard/>
       <RefferalCard/>
       <RefferalCard/>
       <RefferalCard/>
        



      </div>

     </div>
   </div>
 </div>
</template>

