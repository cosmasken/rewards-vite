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

<div className="relative mt-2 rounded-md shadow-sm max-w-[750px] bg-black ">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center m-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_1_3043)">
    <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#272937" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M21 21L15 15" stroke="#272937" stroke-opacity="0.7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1_3043">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
        </div>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md border-0 py-1.5 pl-10 text-gray-900 ring-3 ring-inset ring-black/20 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="Search Your College experience"
        />
      </div>

<div className="whitespace-nowrap text-2xl pt-6 font-semibold  text-white/70 w-full">
  Help millions of students in making informed career decisions.
</div>
<div class="mt-20 mb-2">
  <p className="text-center text-xl max-w-[221px] bg-black/20 font-semibold px-6 py-1  leading-7 text-[#e3e3ff] rounded-full">
    Recent Winner
  </p>
</div>

<div class="flex flex-col space-y-4">
  <div>
  <RecentReview/>
</div>
<div class="grid grid-cols-3 -ml-44 space-x-8">
  <RecentReview/>
  <RecentReview/>
  <RecentReview/>
</div>
<div class="grid grid-cols-3 -ml-20 space-x-8">
  <RecentReview/>
  <RecentReview/>
  <RecentReview/>
</div>
<div class="grid grid-cols-2 space-x-8">
  <RecentReview/>
  <RecentReview/>
</div>
<div class="self-end">
  <RecentReview/>
</div>

</div>




 </div>
</template>