<script setup>
import HelloWorld from './components/HelloWorld.vue'
import AchievementCard from './components/AchievementCard.vue'
import AmbassadorCard from './components/AmbassadorCard.vue'
import ApprovedReviews from './components/ApprovedReviews.vue'
import FooterItem from './components/FooterItem.vue'
import GuideText from './components/GuideText.vue'
import LeaderboardCard from './components/LeaderboardCard.vue'
import ProfileHeader from './components/ProfileHeader.vue'
import ReferralCard from './components/ReferralCard.vue'
import ReviewCard from './components/ReviewCard.vue'
import RewardsCard from './components/RewardsCard.vue'
import Trophies from './components/Trophies.vue'
import UptoCard from './components/UptoCard.vue'
import Navbar from './components/Navbar.vue'
import HowToWin from './components/HowToWin.vue'
import SubmitReview from './components/SubmitReview.vue'
import CampusAmbassador from './components/CampusAmbassador.vue'
import TopReviewsNoCard from './components/TopReviewsNoCard.vue'
import TopReferralCard from './components/TopReferralCard.vue'
import PersonCard from './components/PersonCard.vue'
</script>

<template >
  <div class="h-full w-full m-0 p-0 font-Inter bg-[#F8FAF6]">
    <div class="flex flex-col h-full w-full">
     
   <section class="w-full px-32 bg-[#0036F533]">
    <Navbar/>
   </section>

 <section>
  
 </section>

   <section class="bg-gradient-to-b from-[#0036F533] via-[#34D7CD] to-[#70E3CE]">

   </section>
   <section class="w-full">
    <HowToWin/>
   </section>
   <section class="w-full">
    <SubmitReview/>
   </section>
   <section class="w-full pl-32">
    <CampusAmbassador/>
   </section>
   <section class="bg-[#F8FAFB] w-full pl-32">
<div class="grid grid-cols-2 w-full">
  <p class="pl-32 text-left">Benefits to <br> Campus Ambassador </p>
<AmbassadorCard title="Certificates of Internship/LOR"/>
<AmbassadorCard title="Free Subscription Vouchers"/>
<AmbassadorCard title="Featuring on College.com"/>
<AmbassadorCard title="Instant PayTM cash payments"/>
<AmbassadorCard title="Social Media Promotions"/>
<AmbassadorCard title="Internship opportunities at College.com HQ"/>
<AmbassadorCard title="Free Webinars and Counselling sessions"/>
<AmbassadorCard title="Exclusive Collegedunia Merchandise"/>
</div>
   </section>

   <section class="w-full px-32">
<p class="pl-32 text-3xl text-semibold text-[#333] mb-11">What are you upto</p>
<div class="bg-white rounded-md shadow-md ">
  <div class="grid grid-cols-3">
    <UptoCard title="Review Collation" desc="Collate College reviews, on Collegedunia.com using your referral code and get paid for each approved Review."/>
<UptoCard title="Refer your friends" desc="Refer your friends to join the program, and Gain paytm cash for every approved review that they get."/>
<UptoCard title="Representation" desc="Represent us your campus and provide insights into your campus through Articles and Campus Tour Videos"/>

  </div>
  <div class="grid grid-cols-2">
    <UptoCard title="Collaboration" desc="Find, build and promote collaborations/ partnerships for Collegedunia with like- minded communities within your institution, promoting mutual learning and growth."/>
<UptoCard title="Guest Interviews" desc="Conduct insightful Student and Faculty interviews to provide information about your institution, and learn about their vision for the growth and welfare of the student."/>

</div>
</div>

   </section>
  
   <section class="w-full px-32 bg-white">
    <div class="w-full h-full grid grid-cols-5">
<ApprovedReviews header="Approved Reviews"
number="5" 
text="Certificate of Participation (Beginner)"
text1="Exclusive Collegedunia merchandise"/>

<ApprovedReviews 
number="20" 
header="Approved Reviews" 
text="Internship Certificate (Master)"
text1="Additional Paytm Cash Reward"
text2="Social Media Promotions"/>

<ApprovedReviews 
number="35" 
header="Approved Reviews" 
text="Certificate of Recognition (Jedi) and LOR"
text1="Paytm Cash Reward (upto INR 500)"
text2="Feature on CD Website and Social Media"/>

<ApprovedReviews
number="50" 
header="Approved Reviews" 
text="Paytm Cash Reward Per 25 Approved Reviews"
text1="Featured Interview on CD Website and Social Media"
text2="Linkedin Endorsements"/>

<ApprovedReviews
number="50" 
header="Approved Reviews" 
text="Paytm Cash Reward Per 25 Approved Reviews"
text1="Featured Interview on CD Website and Social Media"
text2="Linkedin Endorsements"/>
    </div>
   </section>
   
   <section class="w-full px-32 bg-gradient-to-b from-white via-white to-[#6495ED]">
    <p class="pl-32 text-left text-3xl text-{#666666} pb-8 font-semibold">
How to Join
    </p>
    <RewardsCard text="Submit your review for your college using the Review Form. 
    You will get your Referral code after submitting a review of your college  "/>
    <RewardsCard text="Refer your colleagues to join as a campus ambassador using this Referral form "/>
   </section>

   <section class="w-full px-32 bg-gradient-to-b from-[#19009E] via-[#701CDC] to-[#1C97DC]">
    <p class="pl-32 text-center text-3xl text-white pb-8 font-semibold">
Weekly Top Leaderboard
    </p>

    <div class="flex flex-row gap-9">
      <div class="flex flex-1 flex-col p-7 bg-[#ffffff00]">
        <p class="text-white text-3xl"> Top Reviews</p>
        <div class="flex flex-row rounded-md shadow-md p-5 mb-5">

          <TopReferralCard/>
          <div class="flex flex-col rounded-md gap-4">
<TopReviewsNoCard/>
<p class="text-white text-sm font-normal ">
    “The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time... 
    The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time..
  </p>
  <p class="text-white text-sm font-normal ">
    Kingston School of Management and Science
  </p>
          </div>
          
        </div>
        <div class="flex flex-row rounded-md shadow-md p-5 mb-5">

<TopReferralCard/>
<div class="flex flex-col rounded-md gap-4">
<TopReviewsNoCard/>
<p class="text-white text-sm font-normal ">
“The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time... 
The annual is named as 'SANGRILLA' which is the best thing I want to talk about and which is the best time..
</p>
<p class="text-white text-sm font-normal ">
Kingston School of Management and Science
</p>
</div>

</div>
      </div>
      <div class="flex flex-1 flex-col p-7 bg-[#ffffff00]">
        <p class="text-white text-3xl"> Top Referrals</p>
      <div class="grid grid-cols-2 gap-5 ">
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
        <PersonCard/>
      </div>
      </div>
     
    </div>

  
   </section>

   <section class="w-full flex flex-col  ">
   <div class="px-32 bg-gradient-to-b from-[#19009E] via-[#701CDC] to-[#1C97DC]">
    <p class="text-4xl text-white flex flex-row text-semibold">
      Top 10 Campus Ambassador Performers
    </p>
    <LeaderboardCard/>
    <LeaderboardCard/>
    <LeaderboardCard/>
    <LeaderboardCard/>
    <LeaderboardCard/>
    
   </div>
   <img src="./assets/rulesgradient.svg" width="100%"/>
   </section>
   <section>
    <footer class="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" class="sr-only">Footer</h2>
      <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div class="xl:grid xl:grid-cols-3 xl:gap-8">
          <div class="space-y-8">
            <p class="text-sm leading-6 text-gray-300">Making the world a better place through constructing elegant hierarchies.</p>
            <form class="mt-6 sm:flex sm:max-w-md">
              <label for="email-address" class="sr-only">Email address</label>
              <input type="email" name="email-address" id="email-address" autocomplete="email" required class="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:w-64 sm:text-sm sm:leading-6 xl:w-full" placeholder="Enter your email">
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
              </div>
            </form>
            <p class="text-xs leading-5 text-gray-400">&copy; 2020 Your Company, Inc. All rights reserved.</p>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Solutions</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Commerce</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Insights</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">Support</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Guides</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">API Status</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 class="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">About</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Press</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Partners</a>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm font-semibold leading-6 text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Claim</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a>
                  </li>
                  <li>
                    <a href="#" class="text-sm leading-6 text-gray-300 hover:text-white">Terms</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24"></div>
      </div>
    </footer>
   </section>
  </div>
  </div>

</template>

<style scoped>

</style>
