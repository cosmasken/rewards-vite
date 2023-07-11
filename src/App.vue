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
import NewCard from './components/NewCard.vue'
import BenfitsSection from './components/BenfitsSection.vue'
</script>

<template >
  <div class="h-full w-full m-0 p-0 font-Inter bg-[#F8FAF6]">
    <div class="flex flex-col h-full w-full">
     
 


   <section class="bg-gradient-to-b from-[#0036F533] via-[#34D7CD] to-[#70E3CE]">

   </section>
   <section class="w-full">
    <HowToWin/>
   </section>
   <section class="w-full">
    <SubmitReview/>
   </section>
   <section>
   <BenfitsSection/>

   </section>
   <!--section class="w-full pl-32">
    <CampusAmbassador/>
   </section-->
   <!--section class="bg-[#F8FAFB] w-full pl-32">
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
   </section-->

   <section class="w-full px-32">
<p class="pl-32 text-3xl text-semibold text-[#333] mb-11">What are you upto</p>
<div class="bg-white rounded-md shadow-md mb-3">
  <div class="grid grid-cols-3">
    <div className="overflow-hidden bg-white relative flex flex-col justify-end pt-4 gap-3 w-full items-center rounded-[20px]">
  <img
    src="https://file.rendit.io/n/xD0CpNFUD8Ljfo8f7cy4.svg"
    className="w-[173px] h-[173px] min-h-0 min-w-0 absolute top-[-67px] left-56"
  />
  <img
    src="https://file.rendit.io/n/iajmeYa7B2q3zjBym2Ae.svg"
    className="min-h-0 min-w-0 w-16"
  />
  <div className="self-stretch relative flex flex-col justify-start items-stretch mb-[-44px] ml-[-41px] mr-[-39px] pb-32 px-16">
    <img
      src="https://file.rendit.io/n/4pToLvJ7udLR3qt4Uyy7.svg"
      className="w-[117px] h-[117px] min-h-0 min-w-0 absolute top-12 left-[308px]"
    />
    <img
      src="https://file.rendit.io/n/jZhremv9iD5VRHns5zns.svg"
      className="w-[141px] h-[141px] min-h-0 min-w-0 absolute top-0 left-0"
    />
    <div className="text-center w-[286px] text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-[#666666] absolute top-8 left-16 h-16">
      Collate College reviews, on Collegedunia.com using your referral code and
      get paid for each approved Review.
    </div>
    <div className="text-center text-xl font-['Inter'] font-semibold tracking-[-0.800000011920929] leading-[28px] text-[#333333] ml-1">
      Review Collation
    </div>
  </div>
</div>

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
    <div class="w-full h-full grid grid-cols-5 gap-2">
<ApprovedReviews/>
<ApprovedReviews/>
<ApprovedReviews/>
<ApprovedReviews/>
<ApprovedReviews/>
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
      <div class="flex flex-1 flex-col p-7 gap-2 bg-[#ffffff00]">
        <p class="text-white text-3xl"> Top Reviews</p>
        <NewCard/>
        <NewCard/>
        <!--div class="flex flex-row rounded-md shadow-md p-5 mb-5">

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

</div-->
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
   <div class="px-32 flex flex-col bg-gradient-to-b from-[#19009E] via-[#701CDC] to-[#1C97DC] gap-2">
    <p class="text-4xl text-white flex flex-row text-semibold ">
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
    <div className="overflow-hidden flex flex-row justify-start gap-3 w-full items-start px-8 py-4">
  <img
    src="https://file.rendit.io/n/PWg8t1pfaiRk1Tu5u5vf.svg"
    className="min-h-0 min-w-0 w-6 shrink-0 mt-[291px] mr-16"
  />
  <img
    src="https://file.rendit.io/n/4ZcoHT0HFwSruYhhaEmD.svg"
    className="min-h-0 min-w-0 self-end mb-56 w-10 shrink-0"
  />
  <div className="flex flex-col justify-start mb-32 gap-1 w-[1110px] items-start">
    <div className="whitespace-nowrap text-4xl font-['Inter'] font-semibold tracking-[-1.5] leading-[60px] text-[#333333] w-[396px] mb-6 ml-[345px]">
      Rules and Guidelines
    </div>
    <div className="whitespace-nowrap text-xl font-['Inter'] font-semibold tracking-[-0.800000011920929] leading-[28px] text-[#333333] self-end w-20 mb-3 mr-[470px]">
      Key Point
    </div>
    <img
      src="https://file.rendit.io/n/noZz8lYJ4fadUXRwKWre.svg"
      className="min-h-0 min-w-0 ml-56 w-1"
    />
    <div className="self-stretch flex flex-row justify-start gap-6 items-center">
      <div className="relative flex flex-row justify-end gap-4 w-[419px] shrink-0 items-start px-2">
        <div className="w-20 h-20 bg-[url(https://file.rendit.io/n/dLhGpssr5P1Wrk02iclO.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-[114px] flex flex-col justify-center pl-1 items-start">
          <img
            src="https://file.rendit.io/n/Cabal3bx938kTrTr8lXE.svg"
            className="min-h-0 min-w-0 w-1"
          />
        </div>
        <img
          src="https://file.rendit.io/n/jVXDYHAVWqxCjlLPgRy5.svg"
          className="w-20 h-20 min-h-0 min-w-0 absolute top-6 left-3"
        />
        <img
          src="https://file.rendit.io/n/VguJcS9T7WVXIIPioqeN.svg"
          className="w-16 h-[206px] min-h-0 min-w-0 absolute top-[179px] left-0"
        />
        <img
          src="https://file.rendit.io/n/3Qprolp3LH9mnHcvqVJ7.svg"
          className="w-24 h-40 min-h-0 min-w-0 absolute top-56 left-[323px]"
        />
        <div className="self-end relative flex flex-col justify-end mt-4 w-[339px] items-start pt-56 px-12">
          <div className="w-3/5 h-48 bg-[url(https://file.rendit.io/n/v1BbzT37W4umC6aRgZcw.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-12 left-0 flex flex-col justify-start items-end pr-20 py-12">
            <img
              src="https://file.rendit.io/n/4QRkwWZinhy1Z7Magpf6.svg"
              className="min-h-0 min-w-0 w-2"
            />
          </div>
          <img
            src="https://file.rendit.io/n/Y5nhPh0f8a5EeACRV34J.svg"
            className="w-[319px] h-48 min-h-0 min-w-0 absolute top-[176.125732421875px] left-5"
          />
          <img
            src="https://file.rendit.io/n/HWd7Il2YIYlA16FeUMw9.svg"
            className="w-48 h-[269px] min-h-0 min-w-0 absolute top-0 left-40"
          />
          <div className="w-1/2 h-64 bg-[url(https://file.rendit.io/n/Bam3CDKTDUXMo5LACTSr.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-1 left-40 flex flex-col justify-center items-center pt-3 pb-2 px-1">
            <img
              src="https://file.rendit.io/n/k1IM3OABJfBdaA8T50Ju.svg"
              className="min-h-0 min-w-0"
            />
          </div>
          <img
            src="https://file.rendit.io/n/TtPZXDUp4aVbGkPE71hE.svg"
            className="w-[307px] h-48 min-h-0 min-w-0 absolute top-[171.43212890625px] left-5"
          />
          <div className="w-[307px] h-48 bg-[url(https://file.rendit.io/n/RPCwwJVHCZSwnIQtss14.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-40 left-5 flex flex-col justify-start items-stretch pt-3 pb-10 px-5">
            <div className="bg-[url(https://file.rendit.io/n/WV1TXIYIeYbBlxeOPlO5.svg)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-start ml-10 items-center p-1">
              <img
                src="https://file.rendit.io/n/XS9LPy4EZxSJmjQIfo4C.svg"
                className="w-24 h-16 min-h-0 min-w-0 absolute top-20 left-px"
              />
              <img
                src="https://file.rendit.io/n/2xZD5dulSwBjWruzAksd.svg"
                className="w-56 h-32 min-h-0 min-w-0 absolute top-1 left-1"
              />
              <img
                src="https://file.rendit.io/n/DKC6vsBseEMjHPhzwZUb.svg"
                className="min-h-0 min-w-0"
              />
            </div>
          </div>
          <div className="w-2/5 h-[203px] bg-[url(https://file.rendit.io/n/6k78mTc9Ut8PNQKdI2jf.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-10 left-40 flex flex-col justify-start items-end pr-6 py-4">
            <img
              src="https://file.rendit.io/n/o9qx7pLoGi79HXKoCHI9.svg"
              className="min-h-0 min-w-0 w-2"
            />
          </div>
          <img
            src="https://file.rendit.io/n/mMlyhfMnlbQAhJnmsHIR.svg"
            className="min-h-0 min-w-0"
          />
        </div>
        <div className="flex flex-col justify-start mt-12 gap-24 w-2 shrink-0 h-24 items-center">
          <img
            src="https://file.rendit.io/n/QbyCTygRGWiqZRR0A0SA.svg"
            className="min-h-0 min-w-0 w-1"
          />
          <img
            src="https://file.rendit.io/n/z5OsFqdgFHAfumFGkl55.svg"
            className="min-h-0 min-w-0 w-1"
          />
        </div>
      </div>
      <img
        src="https://file.rendit.io/n/xx0yOWtDOdvWw8maDaD3.svg"
        className="min-h-0 min-w-0 self-end w-2 shrink-0 mb-16 mr-5"
      />
      <img
        src="https://file.rendit.io/n/gFPOWELtZkKT3AN3jVGV.svg"
        className="min-h-0 min-w-0 self-end w-1 shrink-0 mb-[143px] mr-6"
      />
      <div className="flex flex-col justify-start gap-4 w-1/2 items-stretch">
        <div className="flex flex-row justify-start mr-px gap-3 items-center">
          <img
            src="https://file.rendit.io/n/oBsuDo7SKiM2qU2YLk6p.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] text-[#666666] w-[514px] h-[85.71%]">
            Add maximum details to your answer
          </div>
        </div>
        <div className="flex flex-row justify-start mb-px gap-3 items-center">
          <img
            src="https://file.rendit.io/n/oBsuDo7SKiM2qU2YLk6p.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] text-[#666666] w-[515px] h-full">
            There should be no plagiarism and negative content about the college
          </div>
        </div>
        <div className="flex flex-row justify-start gap-3 items-center mb-px mr-3">
          <img
            src="https://file.rendit.io/n/oBsuDo7SKiM2qU2YLk6p.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] text-[#666666] w-[501px] h-full">
            Review should be written only for the courses offered by the college
          </div>
        </div>
        <div className="flex flex-row justify-start gap-3 items-center mb-px mr-2">
          <img
            src="https://file.rendit.io/n/oBsuDo7SKiM2qU2YLk6p.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] text-[#666666] w-[505px] h-full">
            Mention facts and figures as per your best knowledge
          </div>
        </div>
        <div className="flex flex-row justify-start mb-6 gap-3 items-center">
          <img
            src="https://file.rendit.io/n/oBsuDo7SKiM2qU2YLk6p.svg"
            className="min-h-0 min-w-0 w-6 shrink-0"
          />
          <div className="text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] text-[#666666] w-[515px] h-full">
            A good validated review will also lead to better reward
          </div>
        </div>
        <div className="border-solid border-[#003ee0] overflow-hidden bg-white self-start flex flex-col justify-center w-3/5 h-12 shrink-0 items-center border rounded-lg">
          <div className="text-center whitespace-nowrap font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-[#003ee0] w-3/5">
            Read Terms & Guidelines
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

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
