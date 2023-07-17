<script setup>
import RewardsCard from '../components/RewardsCard.vue';
</script>
<template>
    <div class="flex flex-col pl-34">
        <div class=" w-full">
   <div class="flex flex-col items-center">
<p class="text-2xl text-[#333] text-semibold">
  How to Win
</p>
<div class="flex flex-row">
  <p class="text-[#333] font-semibold text-6xl">
    Awesome Rewards
  </p>
  <img src="../assets/svg/trophy.svg" class="h-12 w-12"/>
</div>
<p class="font-normal text-base text-[#666666]">
  The first way is by writing a
   detailed and factual review of your institution. And the other is to Join for Campus Ambassador Program
</p>
   </div>
  </div>
  <div class=" w-full">
      <div class="flex flex-row w-full justify-between py-5">
          <div class="max-h-[931px] flex-1 overflow-hidden z-0">
            <img src="../assets/Frame.svg" class="hidden sm:block w-full pl-0 self-start" >
          </div>
          <div class="flex flex-col flex-1 px-40">
            <div class="text-zinc-800 text-4xl text-left font-semibold leading-10 pt-20 pb-10">Submit review</div>
            <div class="flex flex-row pl-5 ">
              <img src="../assets/review1.svg" class="hidden sm:block h-[64px] w-[64px]" >
              <div class="flex flex-col">
                <div class="text-left text-zinc-800 text-lg font-semibold leading-7 pb-5">Write a review</div>
                <div class="text-left text-stone-500 text-base] font-normal leading-normal pb-8">Give a detailed and factual review of your institution & help the future prospects in deciding the right college. Remember You’re a part of critical decision-making process. A reviewer, who has attended multiple institutions, can write a review for all those institutions.</div>
              </div>
            </div>
            <div class="flex flex-row pl-5">
              <img src="../assets/review2.svg" class="hidden sm:block h-[64px] w-[64px]" >
              <div class="flex flex-col">
                <div class=" text-zinc-800 text-lg text-left font-semibold leading-7 pb-5">Write a review</div>
                <div class=" text-stone-500 text-base text-left font-normal leading-normal">Give a detailed and factual review of your institution & help the future prospects in deciding the right college. Remember You’re a part of critical decision-making process. A reviewer, who has attended multiple institutions, can write a review for all those institutions.</div>
              </div>
            </div>
          </div>
        </div>
  </div>
  <div class="flex flex-col  w-full pl-32 overflow-hidden">
    <div class="flex flex-row">
      <div class="flex flex-col">
        <p class=" color-black text-4xl font-semibold leading-10">Join to Campus Ambassador Program</p>
  <p class="text-sm leading-6 tracking-[-0.6px] text-[#666] whitespace-normal">Campus Ambassador Program has been initiated to recognize smart<br>
     and dedicated college students and prov ide them with adequate opportunities to<br>
      learn the industry-relevant skills, while earning Cash rewards and certifications<br>
       from our Industry-experts.</p>
  <p className="pl-32 pb-14 pt-5 text-4xl  font-semibold tracking-[-1] leading-9 text-[#333333] w-full">
    Benefit to <br />
    Campus Ambassador
  </p>

    <!-- benefits-->
    <div class="flex w-full flex-row gap-10 pb-10 pl-32 justify-start">
    <div className="bg-white flex flex-row gap-4 shrink-0 items-center px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Certificates of Internship/LOR</div>
    </div>
     <div className="bg-white flex flex-row gap-4 shrink-0 items-center px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Free Subscription Vouchers</div>
    </div>
    </div>
    <div class="flex w-full flex-row gap-10 pb-10 pl-32 justify-start">
      <div className="bg-white flex flex-row gap-4 items-center shrink-0 px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Featuring on College.com</div>
    </div>
     <div className="bg-white flex flex-row gap-4  items-center shrink-0 px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Instant PayTM cash payments</div>
    </div>
    </div>
    <div class="flex w-full flex-row gap-10 pb-10 pl-32 justify-start">
      <div className="bg-white flex flex-row gap-4 shrink-0 items-center px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Social Media Promotions</div>
    </div>
     <div className="bg-white flex flex-row gap-4 shrink-0  items-center px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Internship opportunities at College.com HQ</div>
    </div>
    </div>
    <div class="flex w-full flex-row gap-10 pb-10 pl-32 justify-start">
      <div className="bg-white flex flex-row gap-4 shrink-0 items-center px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Free Webinars and Counselling sessions</div>
    </div>
     <div className="bg-white flex flex-row gap-4 shrink-0 items-center px-4 rounded-lg shadow-xl shadow-black-300">
      <img src="../assets/svg/certregistration.svg" className="min-h-0 min-w-0 w-12 shrink-0 my-2" />
      <div className="whitespace-nowrap shrink-1 text-xl  tracking-normal leading-7 ">Exclusive Collegedunia Merchandise</div>
    </div>
    </div>
      </div>
      <img src="../assets/Frame.svg" class="max-w-[518.921px]  max-h-[452.048px] relative right-[150px] shrink-0 bottom-[80px] "/>
     
    </div>
 
 

  </div>
<div class="flex space-y-6 flex-col ">


  <div className="whitespace-nowrap text-4xl  font-semibold   text-[#333333] max-w-[359px] mt-[-18px] ml-32">
    What will you be up to?
  </div>
   <div class="flex space-y-6 flex-col rounded-xl shadow-xl mx-32 ">
    <div class="grid grid-cols-3 px-6 pt-7 gap-6">


<div className="overflow-hidden bg-white relative flex flex-col w-full items-center px-6 rounded-2xl pt-4 pb-7">
<img src="https://file.rendit.io/n/NsDQHrAMqsC2yN6Aj2vi.svg" className="min-h-0 min-w-0 w-20" />
<p className="text-center">Review Collation</p>
<p className="text-center ">Collate College reviews, on Collegedunia.com using your referral code and get paid for each approved Review.</p>
<div class="absolute bottom-0 left-0">
  <img src="../assets/svg/ellipse-blue.svg">
</div>
<div class="absolute top-0 right-0">
  <img src="../assets/svg/ellipsebluetop.svg">
</div>
</div>


<div className="overflow-hidden bg-white relative flex flex-col w-full items-center px-6 rounded-2xl pt-4 pb-7">
<img src="https://file.rendit.io/n/NsDQHrAMqsC2yN6Aj2vi.svg" className="min-h-0 min-w-0 w-20" />
<p className="text-center">Review Collation</p>
<p className="text-center ">Collate College reviews, on Collegedunia.com using your referral code and get paid for each approved Review.</p>
<div class="absolute bottom-0 left-0">
  <img src="../assets/svg/ellipse-blue.svg">
</div>
<div class="absolute top-0 right-0">
  <img src="../assets/svg/ellipsebluetop.svg">
</div>
</div>


<div className="overflow-hidden bg-white relative flex flex-col w-full items-center px-6 rounded-2xl pt-4 pb-7">
<img src="https://file.rendit.io/n/NsDQHrAMqsC2yN6Aj2vi.svg" className="min-h-0 min-w-0 w-20" />
<p className="text-center">Review Collation</p>
<p className="text-center ">Collate College reviews, on Collegedunia.com using your referral code and get paid for each approved Review.</p>
<div class="absolute bottom-0 left-0">
  <img src="../assets/svg/ellipse-blue.svg">
</div>
<div class="absolute top-0 right-0">
  <img src="../assets/svg/ellipse-red.svg">
</div>
</div>


</div>

<div class="grid grid-cols-2 px-6 pb-7 gap-6 ">

<div className="overflow-hidden bg-white relative flex flex-col w-full items-center px-6 rounded-2xl pt-4 pb-7">
<img src="https://file.rendit.io/n/NsDQHrAMqsC2yN6Aj2vi.svg" className="min-h-0 min-w-0 w-20" />
<p className="text-center">Review Collation</p>
<p className="text-center ">Collate College reviews, on Collegedunia.com using your referral code and get paid for each approved Review.</p>
<div class="absolute bottom-0 left-0">
  <img src="../assets/svg/ellipse-purple.svg">
</div>
<div class="absolute top-0 right-0">
  <img src="../assets/svg/ellipse-purpletop.svg">
</div>
</div>


<div className="overflow-hidden bg-white relative flex flex-col w-full items-center px-6 rounded-2xl pt-4 pb-7">
<img src="https://file.rendit.io/n/NsDQHrAMqsC2yN6Aj2vi.svg" className="min-h-0 min-w-0 w-20" />
<p className="text-center">Review Collation</p>
<p className="text-center ">Collate College reviews, on Collegedunia.com using your referral code and get paid for each approved Review.</p>
<div class="absolute bottom-0 left-0">
  <img src="../assets/svg/ellipse-purple.svg">
</div>
<div class="absolute top-0 right-0">
  <img src="../assets/svg/ellipsebluetop.svg">
</div>
</div>
</div>
   </div>

</div>

<!-- what will you be upto-->

<!-- milestones and rewards-->
<div className=" flex flex-col justify-end  items-start  ">
  <div className="w-full    flex flex-col gap-1 items-start pt-10  px-32">
    <div className="whitespace-nowrap text-4xl  font-semibold   text-[#333333]  ml-40">
      Milestones and Rewards
    </div>
  
    <div className=" self-stretch flex flex-row justify-between items-end mb-5 ml-8 space-x-6">
      <div className="flex flex-col mb-6 gap-1 items-start">
        <div className="flex flex-row ml-5 gap-2 w-12 items-center">
          <img
            src="https://file.rendit.io/n/KLz5brLXcG1NgJLw8Bul.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="whitespace-nowrap text-2xl  font-semibold  leading-[32px] text-[#333333] w-4 shrink-0">
            5
          </div>
        </div>
        <div className="whitespace-nowrap text-sm  tracking-[-0.10000000149011612] leading-[20px] text-[#666666] w-3/5 mb-1 ml-5">
          Approved Reviews
        </div>
        <div className="bg-[linear-gradient(180deg,_#e7f0ff_4%,#f5f0ff_57%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal self-stretch flex flex-col h-48 shrink-0 px-5 py-6 rounded-lg">
          <div className="  leading-6 text-[#666666] mr-px">
            Certificate of Participation (Beginner)
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start">
        <div className="flex flex-row ml-5 gap-2 w-16 items-center">
          <img
            src="https://file.rendit.io/n/PcjXFC9RzJrUnr1YFk2z.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="text-2xl  font-semibold  leading-[32px] text-[#333333] w-1/2">
            20
          </div>
        </div>
        <div className="whitespace-nowrap text-sm  tracking-[-0.10000000149011612] leading-[20px] text-[#666666] w-3/5 mb-1 ml-5">
          Approved Reviews
        </div>
        <div className="bg-[linear-gradient(180deg,_#e7f0ff_4%,#f5f0ff_57%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal self-stretch flex flex-col gap-6 h-64 shrink-0 px-5 py-6 rounded-lg">
          <div className="  leading-6 text-[#666666] mr-px">
            Certificate of Participation (Beginner)
          </div>
          <div className="  leading-6 text-[#666666] mr-px">
            Exclusive Collegedunia merchandise
          </div>
        </div>
      </div>
      <div className="flex flex-col mb-3 gap-1 items-start">
        <div className="flex flex-row ml-5 gap-2 w-16 items-center">
          <img
            src="https://file.rendit.io/n/KIkAg10Yi9YReviewCardhow todTFLS9lQh.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="whitespace-nowrap text-2xl  font-semibold  leading-[32px] text-[#333333] w-1/2">
            35
            
          </div>
        </div>
        <div className="whitespace-nowrap text-sm  tracking-[-0.10000000149011612] leading-[20px] text-[#666666] w-3/5 mb-1 ml-5">
          Approved Reviews
        </div>
        <div className="bg-[linear-gradient(180deg,_#e7f0ff_4%,#f5f0ff_57%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal self-stretch flex flex-col gap-6 h-[299px] shrink-0 px-5 py-6 rounded-lg">
          <div className="  leading-6 text-[#666666] mr-px">
            Internship Certificate (Master)
          </div>
          <div className="  leading-6 text-[#666666] mr-px">
            Additional Paytm Cash Reward
          </div>
          <div className="  leading-6 text-[#666666] mr-px">
            Social Media Promotions
          </div>
        </div>
      </div>
      <div className="self-center flex flex-col gap-1 items-start mt-2 mb-3">
        <div className="flex flex-row ml-5 gap-2 w-16 items-center">
          <img
            src="https://file.rendit.io/n/VsZHIUaUzr3C6qtcYRBH.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="text-2xl  font-semibold  leading-[32px] text-[#333333] w-1/2">
            50
          </div>
        </div>
        <div className="whitespace-nowrap text-sm  tracking-[-0.10000000149011612] leading-[20px] text-[#666666] w-3/5 mb-1 ml-5">
          Approved Reviews
        </div>
        <div className="bg-[linear-gradient(180deg,_#e7f0ff_4%,#f5f0ff_57%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal self-stretch flex flex-col gap-6 h-[343px] shrink-0 px-5 py-6 rounded-lg">
          <div className="  leading-6 text-[#666666] mr-px">
            Certificate of Recognition (Jedi) and LOR
          </div>
          <div className="  leading-6 text-[#666666] mr-px">
            Paytm Cash Reward (upto INR 500)
          </div>
          <div className="  leading-6 text-[#666666] mr-px">
            Feature on CD Website and Social Media
          </div>
        </div>
      </div>
      <div className="self-start flex flex-col gap-2 items-start">
        <div className="flex flex-row ml-5 gap-2 w-12 items-center">
          <img
            src="https://file.rendit.io/n/KLz5brLXcG1NgJLw8Bul.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="whitespace-nowrap text-2xl  font-semibold  leading-[32px] text-[#333333] w-4 shrink-0">
            50
          </div>
        </div>
        <div className="whitespace-nowrap text-sm  tracking-[-0.10000000149011612] leading-[20px] text-[#666666] ml-5 w-3/5">
          Approved Reviews
        </div>
        <div className="bg-[linear-gradient(180deg,_#e7f0ff_4%,#f5f0ff_57%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal self-stretch flex flex-col gap-6 h-[374px] shrink-0 px-5 py-6 rounded-lg">
          <div className="  leading-6 text-[#666666] mr-px">
            Paytm Cash Reward Per 25 Approved Reviews
          </div>
          <div className="  leading-6 text-[#666666] mr-px">
            Featured Interview on CD Website and Social Media
          </div>
          <div className="  leading-6 text-[#666666] mr-px">
            Linkedin Endorsements
          </div>
        </div>
      </div>
    </div>
    <!-- how to join-->
  <div class="pl-32 space-y-5">
    <p class=" text-left text-3xl text-{#666666}  font-semibold">
How to Join
    </p>
    <RewardsCard text="Submit your review for your college using the Review Form. 
    You will get your Referral code after submitting a review of your college  "/>
    <RewardsCard text="Refer your colleagues to join as a campus ambassador using this Referral form "/>
     <button className="text-center bg-[#003fe0] whitespace-nowrap px-20 py-3  font-semibold  leading-6 text-white rounded-full">
      See All Activity Guidline
    </button>

  </div>
   </div>
</div>

    </div>
</template>