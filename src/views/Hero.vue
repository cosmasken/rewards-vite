<script setup>
import RecentReview from '../components/RecentReview.vue';
</script>
<template>
    <div class="  h-screen flex flex-col">
      <div class=" flex flex-row pr-20 pb-20">
    <div className="whitespace-nowrap text-3xl font-['Saira'] font-bold leading-[24px] text-[#ead7ff] w-full">
  Rewards & Review
</div>
<div className="flex flex-row justify-between w-full items-center">
  <div className=" font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-16 shrink-0">
    Rewards
  </div>
  <div className="whitespace-nowrap  font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-12 shrink-0">
    Join us
  </div>
  <div className=" font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-24 shrink-0">
    Leaderboard
  </div>
  <div className=" font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-10 shrink-0">
    Rules
  </div>
  <button className="border-solid border-white bg-[rgba(0,_54,_245,_0.2)] flex flex-col h-10 items-center py-2 border rounded">
    <div className="text-center  font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-10 mx-12">
      Login
    </div>
  </button>
</div>

  </div>
  <div className="whitespace-nowrap text-5xl  font-bold leading-[60px] text-[#edd6ff] w-full pb-6">
  Share your College Experience
</div>

<div className="shadow-lg  bg-white flex flex-row gap-6 max-w-[750px] h-16 items-center px-6 rounded-lg">
  <img
    src="https://file.rendit.io/n/tzZCeYhKjpiOtDHmWduD.svg"
    className="min-h-0 min-w-0 w-6 shrink-0"
  />
  <div className="text-xl   text-[rgba(39,_41,_55,_0.7)] w-[287px] shrink-0 h-[26.39%]">
    Search your College
  </div>
</div>

<div className="whitespace-nowrap text-2xl pt-6 font-semibold  text-white/70 w-full">
  Help millions of students in making informed career decisions.
</div>

 </div>
</template>