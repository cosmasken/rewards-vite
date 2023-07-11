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
</script>

<template >
  <div class="h-full w-full m-0 p-0 font-Inter bg-[#F8FAF6]">
    <div class="flex flex-col h-full w-full">
     
   <section class="w-full px-32 bg-[#0036F533]">
    <Navbar/>
   </section>

 <section>
  <div className="relative flex flex-col justify-end w-full items-end ">
  <img
    src="https://file.rendit.io/n/iKzClyEKGhtu2eePAtmd.svg"
    className="w-[1460px] h-[931px] min-h-0 min-w-0 absolute top-[116px] left-[245px]"
  />
  <div className="w-[1642px] h-[957px] bg-[url(https://file.rendit.io/n/TfeB40emX5D1TRYj1Nxc.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-4 left-[108px] flex flex-row justify-start gap-4 items-start pt-32 px-6">
    <div className="flex flex-col justify-start mt-2 gap-3 w-2/3 items-stretch">
      <div className="flex flex-row justify-start gap-12 items-center ml-[277px] mr-6">
        <div className="whitespace-nowrap text-3xl font-['Saira'] font-bold leading-[24px] text-[#ead6ff] mr-[242px] w-64 shrink-0">
          Rewards & Review
        </div>
        <div className="font-['Inter'] font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-16 shrink-0">
          Rewards
        </div>
        <div className="whitespace-nowrap font-['Inter'] font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-12 shrink-0">
          Join us{" "}
        </div>
      </div>
      <div className="relative flex flex-col justify-start items-stretch pt-20 pb-[354px]">
        <img
          src="https://file.rendit.io/n/QNFHBqImssRiPGTj542r.svg"
          className="w-[534px] h-[474px] min-h-0 min-w-0 absolute top-0 left-4"
        />
        <img
          src="https://file.rendit.io/n/K5g5KWzt6WTW4kR4EiZM.svg"
          className="w-[332px] h-40 min-h-0 min-w-0 absolute top-[337.1171875px] left-0"
        />
        <div className="whitespace-nowrap text-5xl font-['Inter'] font-bold leading-[60px] text-[#edd5ff] ml-[291px]">
          Share your College Experience{" "}
        </div>
      </div>
    </div>
    <div className="font-['Inter'] font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-24 shrink-0 mt-2 mr-6">
      Leaderboard
    </div>
    <div className="font-['Inter'] font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-10 shrink-0 mt-2 mr-6">
      Rules
    </div>
    <button className="border-solid border-white bg-[rgba(0,_54,_245,_0.2)] flex flex-col justify-start h-10 items-center py-2 border rounded">
      <div className="text-center font-['Inter'] font-bold tracking-[-0.6000000238418579] leading-[24px] text-white w-10 mx-12">
        Login
      </div>
    </button>
  </div>
  <div className="w-[1436px] h-[585px] bg-[url(https://file.rendit.io/n/nMMdZzCENKqFydcWrYDu.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-[451px] left-[310.9178466796875px] flex flex-col justify-end gap-3 items-end px-10 py-px">
    <div className="whitespace-nowrap text-2xl font-['Inter'] font-semibold tracking-[-1] leading-[32px] text-white/70 self-start w-1/2 mb-12 ml-20">
      Help millions of students in making informed career decisions.
    </div>
    <div className="self-stretch flex flex-row justify-start gap-6 items-start mb-[177px] ml-32">
      <div className="relative flex flex-col justify-start pb-3 w-[174px] shrink-0 items-start mt-5 mr-px">
        <img
          src="https://file.rendit.io/n/8IXmWL3IW9TV9DDHotgm.svg"
          className="w-12 h-6 min-h-0 min-w-0 absolute top-1 left-32"
        />
        <img
          src="https://file.rendit.io/n/ilbGmy2LDXoddq5pHZCT.svg"
          className="w-16 h-6 min-h-0 min-w-0 absolute top-px left-16"
        />
        <img
          src="https://file.rendit.io/n/WqIxh7ON3i7o1GJFHS6m.svg"
          className="min-h-0 min-w-0 w-24"
        />
      </div>
      <img
        src="https://file.rendit.io/n/tDalxlix1liNzwoCLgQH.svg"
        className="min-h-0 min-w-0 mt-8 w-4 shrink-0"
      />
      <img
        src="https://file.rendit.io/n/FQRmnV9ZvcnxlFhS0INY.svg"
        className="min-h-0 min-w-0 w-3 shrink-0 mt-8 mr-px"
      />
      <div className="flex flex-col justify-start gap-px items-end mt-4 mr-24">
        <img
          src="https://file.rendit.io/n/CKV2p6GFm74kWrwUjhlg.svg"
          className="min-h-0 min-w-0 w-24"
        />
        <div className="self-stretch relative flex flex-col justify-start mr-12 pb-4 items-end">
          <img
            src="https://file.rendit.io/n/VksQedm0qKOL5ke2dXHX.svg"
            className="w-12 h-2 min-h-0 min-w-0 absolute top-1 left-8"
          />
          <img
            src="https://file.rendit.io/n/HQ6UwaDTknKzHPROFhEE.svg"
            className="w-8 h-3 min-h-0 min-w-0 absolute top-2 left-0"
          />
          <img
            src="https://file.rendit.io/n/99e5r5bM0EvyecOdWBw0.svg"
            className="min-h-0 min-w-0 w-16"
          />
        </div>
      </div>
      <div className="self-center relative flex flex-row justify-start pl-px gap-4 w-1/2 items-start">
        <img
          src="https://file.rendit.io/n/KV4AzWgqIFbv61UrWfHP.svg"
          className="w-[635px] h-6 min-h-0 min-w-0 absolute top-24 left-0"
        />
        <div className="flex flex-col justify-start gap-0 items-center mt-5 mr-4">
          <div className="relative flex flex-col justify-start mb-1 pt-1 w-20 items-start">
            <img
              src="https://file.rendit.io/n/hmEtNAffBTZiEbrbOBEN.svg"
              className="w-8 h-3 min-h-0 min-w-0 absolute top-0 left-10"
            />
            <img
              src="https://file.rendit.io/n/SR6DQlLoSHl5yW1vEXYm.svg"
              className="min-h-0 min-w-0 w-16"
            />
          </div>
          <img
            src="https://file.rendit.io/n/FGtLsnSLSNenbrXnaafl.svg"
            className="min-h-0 min-w-0 self-start ml-4 w-16"
          />
          <div className="self-stretch relative flex flex-col justify-start items-start py-1">
            <img
              src="https://file.rendit.io/n/x1rBdV2v1scAO7WLVcCn.svg"
              className="w-12 h-8 min-h-0 min-w-0 absolute top-2 left-20"
            />
            <img
              src="https://file.rendit.io/n/Rauwqk7z8wovvX5oEXrx.svg"
              className="w-20 h-4 min-h-0 min-w-0 absolute top-0 left-2"
            />
            <img
              src="https://file.rendit.io/n/RrlghIqy6Xws3ygXkNAJ.svg"
              className="min-h-0 min-w-0 w-20"
            />
          </div>
        </div>
        <img
          src="https://file.rendit.io/n/2Vf3QgYRMNg7Z5wbc4CO.svg"
          className="min-h-0 min-w-0 self-end w-3 shrink-0 mb-8 mr-6"
        />
        <img
          src="https://file.rendit.io/n/dCzxNRwQICLUhufq9bzS.svg"
          className="min-h-0 min-w-0 self-end mb-8 w-4 shrink-0"
        />
        <div className="relative flex flex-row justify-start mb-5 gap-12 w-3/5 items-center px-8">
          <img
            src="https://file.rendit.io/n/QvZg77eq5JnpEbOPt7Wb.svg"
            className="min-h-0 min-w-0 self-end mb-2 w-1 shrink-0"
          />
          <img
            src="https://file.rendit.io/n/rLaYVocv8SSzoR1ysFRt.svg"
            className="w-8 h-10 min-h-0 min-w-0 absolute top-16 left-20"
          />
          <img
            src="https://file.rendit.io/n/AgXhCOSkmMPw6GKkIfbV.svg"
            className="w-12 h-10 min-h-0 min-w-0 absolute top-16 left-32"
          />
          <img
            src="https://file.rendit.io/n/UmADpyk80VNOzYgE9G6q.svg"
            className="w-12 h-10 min-h-0 min-w-0 absolute top-12 left-48"
          />
          <img
            src="https://file.rendit.io/n/cIP0MTb5gOr7grBBPchD.svg"
            className="w-16 h-10 min-h-0 min-w-0 absolute top-12 left-[243.313232421875px]"
          />
          <img
            src="https://file.rendit.io/n/wX5wP5cetxOIOmgQssuE.svg"
            className="w-20 h-10 min-h-0 min-w-0 absolute top-12 left-[308.7738037109375px]"
          />
          <img
            src="https://file.rendit.io/n/K0RklbdZrfWMCMugQnd6.svg"
            className="w-[389px] h-8 min-h-0 min-w-0 absolute top-5 left-0"
          />
          <img
            src="https://file.rendit.io/n/koSPjSwwJguwesVGZ6zj.svg"
            className="min-h-0 min-w-0"
          />
        </div>
      </div>
    </div>
    <div className="flex flex-row justify-start mr-64 gap-8 w-3/5 items-center">
      <div className="shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.12)] overflow-hidden flex flex-col justify-start mt-1 w-1/2 items-stretch rounded-[48px]">
        <div className="bg-white/24 flex flex-row justify-start gap-2 h-20 shrink-0 items-center ml-0 mr-[-71px] my-0 px-4">
          <div className="bg-white/35 flex flex-col justify-start mr-2 w-12 shrink-0 items-center p-1 rounded-[50px]">
            <img
              src="https://file.rendit.io/n/QXCsPei2KG1qJl58TSUL.png"
              className="min-h-0 min-w-0 w-8"
            />
          </div>
          <div className="flex flex-col justify-start gap-1 w-1/2 items-stretch">
            <div className="flex flex-row justify-start mr-3 gap-4 items-center">
              <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white w-2/3">
                Hamdur Ramhan
              </div>
              <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
                1 hr ago
              </div>
            </div>
            <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70">
              Vellore Institute of Technology{" "}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-1 w-24 shrink-0 items-stretch">
            <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
              ₹200{" "}
              <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
                Win
              </div>
            </div>
            <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 ml-5 mr-px">
              By Review
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.12)] overflow-hidden flex flex-col justify-start w-1/2 items-stretch rounded-[48px]">
        <div className="bg-white/24 flex flex-row justify-start gap-2 h-20 shrink-0 items-center ml-0 mr-[-71px] my-0 px-4">
          <div className="bg-white/35 flex flex-col justify-start mr-2 w-12 shrink-0 items-center p-1 rounded-[50px]">
            <img
              src="https://file.rendit.io/n/10sm6IRM8c5fr30FEaWv.png"
              className="min-h-0 min-w-0 w-8"
            />
          </div>
          <div className="flex flex-col justify-start gap-1 w-1/2 items-stretch">
            <div className="flex flex-row justify-start mr-3 gap-4 items-center">
              <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white w-2/3">
                Hamdur Ramhan
              </div>
              <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
                1 hr ago
              </div>
            </div>
            <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70">
              Vellore Institute of Technology{" "}
            </div>
          </div>
          <div className="flex flex-col justify-start gap-1 w-24 shrink-0 items-stretch">
            <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
              ₹200{" "}
              <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
                Win
              </div>
            </div>
            <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 ml-5 mr-px">
              By Review
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.12)] overflow-hidden flex flex-col justify-start mr-6 items-stretch rounded-[48px]">
      <div className="bg-white/24 flex flex-row justify-start gap-2 h-20 shrink-0 items-center ml-0 mr-[-71px] my-0 px-4">
        <div className="bg-white/35 flex flex-col justify-start mr-2 w-12 shrink-0 items-center p-1 rounded-[50px]">
          <img
            src="https://file.rendit.io/n/pPU0OenPhfhCPE87not4.png"
            className="min-h-0 min-w-0 w-8"
          />
        </div>
        <div className="flex flex-col justify-start gap-1 w-1/2 items-stretch">
          <div className="flex flex-row justify-start mr-3 gap-4 items-center">
            <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white w-2/3">
              Hamdur Ramhan
            </div>
            <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
              1 hr ago
            </div>
          </div>
          <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70">
            Vellore Institute of Technology{" "}
          </div>
        </div>
        <div className="flex flex-col justify-start gap-1 w-24 shrink-0 items-stretch">
          <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
            ₹200{" "}
            <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
              Win
            </div>
          </div>
          <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 ml-5 mr-px">
            By Review
          </div>
        </div>
      </div>
    </div>
  </div>
  <img
    src="https://file.rendit.io/n/OVQIqIs6roQV6TA6Zuhk.svg"
    className="w-[573px] h-56 min-h-0 min-w-0 absolute top-[641.382080078125px] left-[180.6260986328125px]"
  />
  <img
    src="https://file.rendit.io/n/czX2gdnak6sqUPTWNYiM.svg"
    className="w-40 h-[206px] min-h-0 min-w-0 absolute top-[649.265625px] left-40"
  />
  <img
    src="https://file.rendit.io/n/VIecRjxJG7GkapTMXb6m.svg"
    className="w-[523px] h-56 min-h-0 min-w-0 absolute top-[641.934326171875px] left-48"
  />
  <div className="shadow-[0px_4px_30px_0px_rgba(0,_0,_0,_0.1)] w-56 h-16 absolute top-[449px] left-[1250px] flex flex-col justify-start items-stretch">
    <div className="bg-white/30 flex flex-row justify-start gap-4 items-center px-1 rounded-[50px]">
      <div className="bg-[url(https://file.rendit.io/n/AQB88S6ndTrsAQfS1HU5.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center my-1">
        <img
          src="https://file.rendit.io/n/52PFuNPcE7xVOcFfvvhh.svg"
          className="min-h-0 min-w-0 w-8"
        />
      </div>
      <div className="flex flex-col justify-start gap-px w-3/5 items-stretch">
        <div className="text-2xl font-['Inter'] font-semibold tracking-[-1] leading-[32px] text-[#1f497c] mr-10 h-[59.18%]">
          ₹ 1.5 Cr
        </div>
        <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-[#5480b4] h-[36.73%]">
          Received Rewards
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-[0px_4px_30px_0px_rgba(0,_0,_0,_0.1)] w-64 h-16 bg-white/30 absolute top-[509px] left-[1497px] flex flex-row justify-start gap-4 items-center pl-1 pr-12 py-1 rounded-[50px]">
    <div className="bg-[url(https://file.rendit.io/n/l28dKJm9kgMxx2Eq12PG.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center">
      <img
        src="https://file.rendit.io/n/9I0ZGl8Ikec4J23mQQcM.svg"
        className="min-h-0 min-w-0 w-8"
      />
    </div>
    <div className="flex flex-col justify-start gap-px w-32 shrink-0 items-start">
      <div className="text-2xl font-['Inter'] font-semibold tracking-[-1] leading-[32px] text-[#1f497c] w-1/2 h-[58.16%]">
        4.1 M
      </div>
      <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-[#666666] self-stretch h-[36.73%]">
        Student Benefitted
      </div>
    </div>
  </div>
  <img
    src="https://file.rendit.io/n/vKSDmiAEvo7P8PHrsj3e.svg"
    className="w-56 h-32 min-h-0 min-w-0 absolute top-[560.247802734375px] left-[1390.4882354736328px]"
  />
  <img
    src="https://file.rendit.io/n/uL6DP4utrnmXmod9ZAXX.svg"
    className="w-[275px] h-40 min-h-0 min-w-0 absolute top-[546.871337890625px] left-[1367.232421875px]"
  />
  <img
    src="https://file.rendit.io/n/qV4VIrpCeJcXnRnIhsRd.svg"
    className="w-[372px] h-56 min-h-0 min-w-0 absolute top-[519.494873046875px] left-[1317.652099609375px]"
  />
  <img
    src="https://file.rendit.io/n/LsGzyq8Xn8039daOklLd.svg"
    className="w-[413px] h-[239px] min-h-0 min-w-0 absolute top-[507.500244140625px] left-[1296.9287109375px]"
  />
  <img
    src="https://file.rendit.io/n/5p7uIffY7alnJmbr72ir.svg"
    className="w-[558px] h-[323px] min-h-0 min-w-0 absolute top-[465.54833984375px] left-[1224.4214782714844px]"
  />
  <img
    src="https://file.rendit.io/n/BzekVGoVmFxGY53RNzqZ.svg"
    className="w-[641px] h-[371px] min-h-0 min-w-0 absolute top-[441.7080078125px] left-[1183.2130126953125px]"
  />
  <div className="bg-[url(https://file.rendit.io/n/R6MTNwkfkoA1o92IOtC4.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-row justify-start gap-10 h-[402px] shrink-0 items-start pl-16 pr-[207px] py-16">
    <img
      src="https://file.rendit.io/n/LZbXs88UnQJdpj0SG0Gx.svg"
      className="min-h-0 min-w-0 w-5 shrink-0 mt-20 mr-1"
    />
    <div className="relative flex flex-col justify-start w-[302px] shrink-0 items-stretch pt-12 pb-20">
      <img
        src="https://file.rendit.io/n/XH3A3Fd41OblGvxjmFQL.svg"
        className="w-48 h-[112px] min-h-0 min-w-0 absolute top-24 left-32"
      />
      <img
        src="https://file.rendit.io/n/IGSIsbacconmys7rO1wY.svg"
        className="w-5 h-20 min-h-0 min-w-0 absolute top-0 left-48"
      />
      <div className="w-2/3 h-20 absolute top-48 left-16 flex flex-row justify-between items-start">
        <img
          src="https://file.rendit.io/n/BoADrmB9Xz9z5kgeAMvV.svg"
          className="min-h-0 min-w-0 w-5 shrink-0"
        />
        <img
          src="https://file.rendit.io/n/motUjLvh3bW9gBWNbIDv.svg"
          className="min-h-0 min-w-0 self-end mt-10 w-4 shrink-0"
        />
      </div>
      <div className="relative flex flex-col justify-end mr-8 items-stretch pt-12 pb-4">
        <div className="w-1/2 h-32 bg-[url(https://file.rendit.io/n/gRtCdzHiM5BNyhOf6vuM.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-[140.4740447998047px] flex flex-col justify-start items-start pt-1 pb-16 px-5">
          <img
            src="https://file.rendit.io/n/ICackiUhX2YzPMgQXWy6.svg"
            className="w-12 h-16 min-h-0 min-w-0 absolute top-12 left-4"
          />
          <img
            src="https://file.rendit.io/n/DW9lzghlQ0gqAZWSaIFz.svg"
            className="min-h-0 min-w-0 ml-2 w-20"
          />
        </div>
        <div className="shadow-[0px_4px_30px_0px_rgba(0,_0,_0,_0.1)] bg-white/35 flex flex-row justify-start mr-16 gap-4 items-center px-1 rounded-[50px]">
          <div className="bg-[url(https://file.rendit.io/n/9aHbdq7umDPX5fcTyLSN.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center my-1">
            <img
              src="https://file.rendit.io/n/pfH6BTnC1QYPXNcmAIpP.svg"
              className="min-h-0 min-w-0 w-8"
            />
          </div>
          <div className="flex flex-col justify-start gap-1 w-1/2 items-start">
            <div className="text-2xl font-['Inter'] font-semibold tracking-[-1] leading-[32px] text-[#1f497c] w-1/2 h-[58.16%]">
              1.5 M
            </div>
            <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-[#666666] self-stretch h-[36.33%]">
              Verified Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="https://file.rendit.io/n/JLh9tv5DnPhGXepOJ9Mo.svg"
      className="min-h-0 min-w-0 mt-24 w-6 shrink-0"
    />
  </div>
  <img
    src="https://file.rendit.io/n/0ORv9WfB09KMSW8c0Jle.svg"
    className="w-12 h-24 min-h-0 min-w-0 absolute top-[378.093505859375px] left-[1406.9102783203125px]"
  />
  <img
    src="https://file.rendit.io/n/GgOHwAKyuX295qM9zKWZ.svg"
    className="w-[113px] h-32 min-h-0 min-w-0 absolute top-[408.80712890625px] left-[1432.761245727539px]"
  />
  <div className="w-[113px] h-16 bg-[url(https://file.rendit.io/n/0DoPbmbAktYN1nulXSmK.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-[374.515625px] left-[1432.7579650878906px] flex flex-col justify-start items-center px-2 py-1">
    <div className="bg-[url(https://file.rendit.io/n/IO5SBU6oxtCgrUARCSoO.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-end ml-0 w-24 h-16 shrink-0 items-center">
      <img
        src="https://file.rendit.io/n/oG9eqKKCV4wJyehIVibJ.svg"
        className="min-h-0 min-w-0 w-20"
      />
    </div>
  </div>
  <img
    src="https://file.rendit.io/n/jJECQO0YA0nokZKL7EPP.svg"
    className="w-12 h-12 min-h-0 min-w-0 absolute top-[375px] left-[1514.4156799316406px]"
  />
  <img
    src="https://file.rendit.io/n/nYPg83MJRQ8JjTlBJIsh.png"
    className="w-64 h-56 min-h-0 min-w-0 absolute top-64 left-[1371.0498962402344px]"
  />
  <div className="w-64 h-48 bg-[url(https://file.rendit.io/n/ZSKgVzL6ZgxUMKvL5ntU.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-56 left-[1351.9999084472656px] flex-col justify-center">
    <div className="text-center w-48 h-[37%] text-5xl font-['Inter'] font-bold tracking-[-1.5] leading-[70px] text-white absolute top-16 left-6">
      $200
    </div>
    <div className="text-center w-2/3 h-[30.88%] text-3xl font-['Inter'] font-semibold tracking-[-1.5] leading-[60px] text-[#5455d4] absolute top-5 left-10">
      Win Upto
    </div>
  </div>
  <img
    src="https://file.rendit.io/n/1a16nurt3o4b9zcywTpE.svg"
    className="w-12 h-16 min-h-0 min-w-0 absolute top-[376px] left-[1446.9999084472656px]"
  />
  <img
    src="https://file.rendit.io/n/tatTppNa0frtt3s68zR1.svg"
    className="w-12 h-20 min-h-0 min-w-0 absolute top-[443.109130859375px] left-[1519.4213256835938px]"
  />
  <img
    src="https://file.rendit.io/n/PKpi3yeJsEqfYgffsKUU.svg"
    className="w-5 h-12 min-h-0 min-w-0 absolute top-[495.81005859375px] left-[1419.7651672363281px]"
  />
  <div className="shadow-[0px_14px_20px_0px_rgba(11,_17,_75,_0.16)] w-2/5 h-24 bg-black/15 absolute top-[350px] left-[410px] flex flex-col justify-center items-stretch px-4 rounded-lg">
    <div className="shadow-[0px_4px_8px_0px_rgba(0,_0,_0,_0.12)] bg-white flex flex-row justify-start mr-px gap-6 h-16 shrink-0 items-center px-6 rounded-lg">
      <img
        src="https://file.rendit.io/n/IPiA7uiVUOUmmcBCELla.svg"
        className="min-h-0 min-w-0 w-6 shrink-0"
      />
      <div className="text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] text-[rgba(39,_41,_55,_0.7)] w-[287px] shrink-0 h-[26.39%]">
        Search your College
      </div>
    </div>
  </div>
  <div className="w-[463px] h-20 bg-white/24 absolute top-[720px] left-[658px] flex flex-row justify-start gap-2 items-center pl-4 pr-20 py-3">
    <div className="bg-white/35 flex flex-col justify-start mr-2 w-12 shrink-0 items-center p-1 rounded-[50px]">
      <img
        src="https://file.rendit.io/n/iJFFC3nmG7i43oqViP50.png"
        className="min-h-0 min-w-0 w-8"
      />
    </div>
    <div className="flex flex-col justify-start gap-1 w-48 shrink-0 items-stretch">
      <div className="flex flex-row justify-start mr-3 gap-4 items-center">
        <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white w-2/3">
          Hamdur Ramhan
        </div>
        <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
          1 hr ago
        </div>
      </div>
      <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70">
        Vellore Institute of Technology{" "}
      </div>
    </div>
    <div className="flex flex-col justify-start gap-1 w-24 shrink-0 items-stretch">
      <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
        ₹200{" "}
        <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
          Win
        </div>
      </div>
      <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 ml-5 mr-px">
        By Review
      </div>
    </div>
  </div>
  <div className="w-[463px] h-20 bg-white/24 absolute top-[720px] left-[1089px] flex flex-row justify-start gap-2 items-center pl-4 pr-20 py-3">
    <div className="bg-white/35 flex flex-col justify-start mr-2 w-12 shrink-0 items-center p-1 rounded-[50px]">
      <img
        src="https://file.rendit.io/n/GbTwlLVWQAvc2JbWuqG7.png"
        className="min-h-0 min-w-0 w-8"
      />
    </div>
    <div className="flex flex-col justify-start gap-1 w-48 shrink-0 items-stretch">
      <div className="flex flex-row justify-start mr-3 gap-4 items-center">
        <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white w-2/3">
          Hamdur Ramhan
        </div>
        <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
          1 hr ago
        </div>
      </div>
      <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70">
        Vellore Institute of Technology{" "}
      </div>
    </div>
    <div className="flex flex-col justify-start gap-1 w-24 shrink-0 items-stretch">
      <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
        ₹200{" "}
        <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
          Win
        </div>
      </div>
      <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 ml-5 mr-px">
        By Review
      </div>
    </div>
  </div>
  <div className="w-[463px] h-20 bg-white/24 absolute top-[723px] left-56 flex flex-row justify-start gap-2 items-center pl-4 pr-20 py-3">
    <div className="bg-white/35 flex flex-col justify-start mr-2 w-12 shrink-0 items-start p-1 rounded-[50px]">
      <img
        src="https://file.rendit.io/n/Zt3nzVUygdhhGYgzdIGY.png"
        className="min-h-0 min-w-0 ml-2 w-6"
      />
    </div>
    <div className="flex flex-col justify-start gap-1 w-48 shrink-0 items-stretch">
      <div className="flex flex-row justify-start mr-3 gap-4 items-center">
        <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white w-2/3">
          Hamdur Ramhan
        </div>
        <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
          1 hr ago
        </div>
      </div>
      <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70">
        Vellore Institute of Technology{" "}
      </div>
    </div>
    <div className="flex flex-col justify-start gap-1 w-24 shrink-0 items-stretch">
      <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
        ₹200{" "}
        <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
          Win
        </div>
      </div>
      <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 ml-5 mr-px">
        By Review
      </div>
    </div>
  </div>
  <div className="w-[463px] h-20 bg-white/24 absolute top-[633px] left-[537px] flex flex-row justify-start gap-2 items-center pl-4 pr-20 py-3">
    <div className="bg-white/35 flex flex-col justify-start mr-2 w-12 shrink-0 items-center p-1 rounded-[50px]">
      <img
        src="https://file.rendit.io/n/pPU0OenPhfhCPE87not4.png"
        className="min-h-0 min-w-0 w-8"
      />
    </div>
    <div className="flex flex-col justify-start gap-1 w-48 shrink-0 items-stretch">
      <div className="flex flex-row justify-start mr-3 gap-4 items-center">
        <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white w-2/3">
          Hamdur Ramhan
        </div>
        <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
          1 hr ago
        </div>
      </div>
      <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70">
        Vellore Institute of Technology{" "}
      </div>
    </div>
    <div className="flex flex-col justify-start gap-1 w-24 shrink-0 items-stretch">
      <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
        ₹200{" "}
        <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
          Win
        </div>
      </div>
      <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 ml-5 mr-px">
        By Review
      </div>
    </div>
  </div>
  <div className="shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.12)] w-[375px] h-16 overflow-hidden absolute top-[813px] left-[392px] flex flex-col justify-start items-stretch rounded-[48px]">
    <div className="bg-white/24 flex flex-row justify-start gap-4 h-20 shrink-0 items-center ml-0 mr-[-82px] my-0 px-4">
      <div className="bg-white/35 flex flex-col justify-start w-12 shrink-0 items-center p-1 rounded-[50px]">
        <img
          src="https://file.rendit.io/n/r45YuYp3rXVwn7HL4PDH.png"
          className="min-h-0 min-w-0 w-8"
        />
      </div>
      <div className="flex flex-col justify-start gap-1 w-2/3 items-stretch">
        <div className="flex flex-row justify-start gap-2 items-center">
          <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white mr-2 w-2/5">
            Hamdur Ramhan
          </div>
          <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
            1 hr ago
          </div>
          <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
            ₹200{" "}
            <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
              Win
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start mr-px gap-4 items-center">
          <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 mb-px w-48">
            Vellore Institute of Technology{" "}
          </div>
          <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-16 shrink-0">
            By Review
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.12)] w-[375px] h-16 overflow-hidden absolute top-[809px] left-[819px] flex flex-col justify-start items-stretch rounded-[48px]">
    <div className="bg-white/24 flex flex-row justify-start gap-4 h-20 shrink-0 items-center ml-0 mr-[-82px] my-0 px-4">
      <div className="bg-white/35 flex flex-col justify-start w-12 shrink-0 items-center p-1 rounded-[50px]">
        <img
          src="https://file.rendit.io/n/CIqqQBCH4LBHppb6nqrf.png"
          className="min-h-0 min-w-0 w-8"
        />
      </div>
      <div className="flex flex-col justify-start gap-1 w-2/3 items-stretch">
        <div className="flex flex-row justify-start gap-1 items-center">
          <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white mr-3 w-2/5">
            Rameshwer Anna
          </div>
          <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
            1 hr ago
          </div>
          <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
            ₹20{" "}
            <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
              Win
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start mr-px gap-4 items-center">
          <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 mb-px w-48">
            Vellore Institute of Technology{" "}
          </div>
          <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-16 shrink-0">
            By Referal
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-[0px_4px_20px_0px_rgba(0,_0,_0,_0.12)] w-[375px] h-16 overflow-hidden absolute top-[805px] left-[1246px] flex flex-col justify-start items-stretch rounded-[48px]">
    <div className="bg-white/24 flex flex-row justify-start gap-4 h-20 shrink-0 items-center ml-0 mr-[-82px] my-0 px-4">
      <div className="bg-white/35 flex flex-col justify-start w-12 shrink-0 items-center p-1 rounded-[50px]">
        <img
          src="https://file.rendit.io/n/vkGrThKBuKIb7BcvywUg.png"
          className="min-h-0 min-w-0 w-8"
        />
      </div>
      <div className="flex flex-col justify-start gap-1 w-2/3 items-stretch">
        <div className="flex flex-row justify-start gap-2 items-center">
          <div className="whitespace-nowrap font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white mr-2 w-2/5">
            Hamdur Ramhan
          </div>
          <div className="text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-12 shrink-0 h-full">
            1 hr ago
          </div>
          <div className="text-right font-['Inter'] font-semibold tracking-[-0.6000000238418579] leading-[24px] text-white justify-start">
            ₹200{" "}
            <div className="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-white contents">
              Win
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-start mr-px gap-4 items-center">
          <div className="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 mb-px w-48">
            Vellore Institute of Technology{" "}
          </div>
          <div className="text-right text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-white/70 w-16 shrink-0">
            By Review
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="shadow-[0px_17px_18px_0px_rgba(0,_0,_0,_0.12)] w-56 h-10 bg-black/20 absolute top-[599px] left-[412px] flex flex-col justify-start items-stretch px-8 py-1 rounded-[47px]">
    <div className="text-center text-xl font-['Inter'] font-semibold tracking-[-0.800000011920929] leading-[28px] text-[#e2e2ff] ml-px">
      Recent Winner
    </div>
  </div>
</div>

 </section>

   <section class="bg-gradient-to-b from-[#0036F533] via-[#34D7CD] to-[#70E3CE]">

   </section>
   <section class="w-full">
    <HowToWin/>
   </section>
   <section class="w-full">
    <SubmitReview/>
   </section>
   <section>
    <div class="relative flex flex-col justify-start gap-10 w-full items-stretch pb-12 px-0">
  <img
    src="https://file.rendit.io/n/STLqF7e8pUIDT3Po5b5M.svg"
    class="w-[629px] h-[775px] min-h-0 min-w-0 absolute top-[-104px] left-[1418.837890625px]"
  />
  <div class="flex flex-row justify-start gap-1 items-end mt-[-15.35px] mb-2 ml-2">
    <div class="flex flex-col justify-start gap-5 w-3/5 items-stretch mb-2 mr-8">
      <div class="text-4xl font-['Inter'] font-semibold tracking-[-1.5] leading-[60px] mr-40">
        Join to Campus Ambassador Program
      </div>
      <div class="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-[#666666] mb-16 mr-40">
        Campus Ambassador Program has been initiated to recognize smart and
        dedicated college students and
        {"  "}
        prov ide them with adequate opportunities to learn the industry-relevant
        skills, while earning Cash rewards and
        {"  "}
        certifications from our Industry-experts.
      </div>
      <div class="text-4xl font-['Inter'] font-semibold tracking-[-1] leading-[36px] text-[#333333] ml-32">
        Benefit to <br />
        Campus Ambassador
      </div>
    </div>
    <div class="self-center relative flex flex-row justify-start gap-4 w-2/5 items-center">
      <img
        src="https://file.rendit.io/n/lNKmIkSwxKSgRWa8gb05.svg"
        class="w-20 h-20 min-h-0 min-w-0 absolute top-56 left-[408.8699645996094px]"
      />
      <div class="w-20 h-[211px] absolute top-[112.3492431640625px] left-[441.6569519042969px] flex flex-col justify-between items-center">
        <img
          src="https://file.rendit.io/n/C1I1ulskhYKTir3twqI1.svg"
          class="min-h-0 min-w-0 w-20"
        />
        <img
          src="https://file.rendit.io/n/DOmAgoy7iVWgHe7shNn9.svg"
          class="min-h-0 min-w-0 self-start ml-8 w-2"
        />
      </div>
      <div class="relative flex flex-col justify-end gap-2 w-[413px] items-start pt-10 pb-4 px-3">
        <img
          src="https://file.rendit.io/n/KLVY1EiB9yFp3LfFY4Ez.svg"
          class="w-24 h-40 min-h-0 min-w-0 absolute top-20 left-0"
        />
        <img
          src="https://file.rendit.io/n/NDcgrus1phUsDL3f64qD.svg"
          class="w-20 h-12 min-h-0 min-w-0 absolute top-48 left-16"
        />
        <img
          src="https://file.rendit.io/n/BCoNYxFahCdzPoukDR5z.svg"
          class="w-[319px] h-48 min-h-0 min-w-0 absolute top-48 left-24"
        />
        <img
          src="https://file.rendit.io/n/4jEjxjIDLUz389A7LPc4.svg"
          class="w-48 h-[269px] min-h-0 min-w-0 absolute top-4 left-56"
        />
        <div class="w-2/5 h-64 bg-[url(https://file.rendit.io/n/6PxuvkwGPPXkuujfp0eo.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-5 left-56 flex flex-col justify-center items-center pt-3 pb-2 px-1">
          <img
            src="https://file.rendit.io/n/LkgsOnXuCRwa5C14VqOL.svg"
            class="min-h-0 min-w-0"
          />
        </div>
        <img
          src="https://file.rendit.io/n/uepVjTW5U6OhxIdSXGMR.svg"
          class="w-20 h-20 min-h-0 min-w-0 absolute top-0 left-48"
        />
        <img
          src="https://file.rendit.io/n/yYrBtq9qGd3GKsDzWyBb.svg"
          class="w-16 h-[206px] min-h-0 min-w-0 absolute top-64 left-16"
        />
        <img
          src="https://file.rendit.io/n/fFSPQMloJOTOz32gYyjz.svg"
          class="w-12 h-[117px] min-h-0 min-w-0 absolute top-20 left-32"
        />
        <img
          src="https://file.rendit.io/n/LuV5YZjGvYtg4ZwbPxzo.svg"
          class="min-h-0 min-w-0 ml-32 w-1"
        />
        <div class="self-stretch relative flex flex-row justify-end ml-20 gap-1 items-center px-3">
          <img
            src="https://file.rendit.io/n/ReeKEJU8WATHBETrx8B2.svg"
            class="w-[307px] h-48 min-h-0 min-w-0 absolute top-32 left-0"
          />
          <div class="w-[307px] h-48 bg-[url(https://file.rendit.io/n/NYBt3Mv5cWq7c45dUzfG.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-32 left-0 flex flex-col justify-start items-stretch pt-3 pb-10 px-5">
            <div class="bg-[url(https://file.rendit.io/n/N4FZ2FbhJo3uASaUN3Bw.svg)] bg-cover bg-50%_50% bg-blend-normal relative flex flex-col justify-start ml-10 items-center p-1">
              <img
                src="https://file.rendit.io/n/0ktpQIIzNC7qC5tXS721.svg"
                class="w-24 h-16 min-h-0 min-w-0 absolute top-20 left-px"
              />
              <img
                src="https://file.rendit.io/n/rhCyUyHSLUjuv4V5C0ls.svg"
                class="w-56 h-32 min-h-0 min-w-0 absolute top-1 left-1"
              />
              <img
                src="https://file.rendit.io/n/ebIQqdYaTmSpPhpNzNsB.svg"
                class="min-h-0 min-w-0"
              />
            </div>
          </div>
          <img
            src="https://file.rendit.io/n/HY02AWtzU9B9SFrIwZuQ.svg"
            class="min-h-0 min-w-0 self-start mt-16 w-2 shrink-0"
          />
          <div class="relative flex flex-col justify-end pt-48 w-2/3 items-start">
            <div class="w-[149px] h-[203px] bg-[url(https://file.rendit.io/n/5sd1ou5XeNM4rXgNiCWG.svg)] bg-cover bg-50%_50% bg-blend-normal absolute top-0 left-10 flex flex-col justify-start items-end pr-6 py-4">
              <img
                src="https://file.rendit.io/n/AH7zNZqycme4xucIuOvn.svg"
                class="min-h-0 min-w-0 w-2"
              />
            </div>
            <img
              src="https://file.rendit.io/n/5hKHnfPSFDR0S3JNM0MJ.svg"
              class="min-h-0 min-w-0 w-16"
            />
          </div>
        </div>
      </div>
      <div class="self-start flex flex-col justify-start mt-12 gap-24 w-2 shrink-0 h-24 items-center">
        <img
          src="https://file.rendit.io/n/D0gejag6ie4CCq8FLnfp.svg"
          class="min-h-0 min-w-0 w-1"
        />
        <img
          src="https://file.rendit.io/n/ZmBogmfWrJ1qzdmgbUDd.svg"
          class="min-h-0 min-w-0 w-1"
        />
      </div>
    </div>
    <img
      src="https://file.rendit.io/n/MN11yVr7rMkMQaCayFDS.svg"
      class="min-h-0 min-w-0 mb-48 w-1 shrink-0"
    />
  </div>
  <div class="self-start flex flex-row justify-start ml-32 gap-10 w-3/5 items-center">
    <div class="shadow-[0px_21px_26px_0px_rgba(47,_63,_87,_0.08)] flex flex-col justify-start mb-px w-1/2 items-stretch">
      <div class="bg-white flex flex-row justify-start gap-4 items-center px-4 rounded-lg">
        <img
          src="https://file.rendit.io/n/JXHowvQ8C23yQ2DIGExf.svg"
          class="min-h-0 min-w-0 w-12 shrink-0 my-2"
        />
        <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-[284px]">
          Certificates of Internship/LOR
        </div>
      </div>
    </div>
    <div class="shadow-[0px_21px_26px_0px_rgba(47,_63,_87,_0.08)] bg-white flex flex-row justify-start gap-4 w-1/2 items-center pl-4 pr-6 rounded-lg">
      <div class="bg-[url(https://file.rendit.io/n/SbmQ873XZLWLrynvj5Ag.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center my-2">
        <img
          src="https://file.rendit.io/n/4cucLuK7x5jknVOzBbyz.svg"
          class="min-h-0 min-w-0 w-6"
        />
      </div>
      <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-64">
        Free Subscription Vouchers
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-start gap-8 items-center ml-32 mr-[299px]">
    <div class="shadow-[0px_21px_26px_0px_rgba(47,_63,_87,_0.08)] bg-white flex flex-row justify-start gap-4 w-1/2 items-center px-4 rounded-lg">
      <div class="bg-[url(https://file.rendit.io/n/ItKwRqfWlAcBT0Ksf56h.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center my-2">
        <img
          src="https://file.rendit.io/n/358cPTNafOBtwG95weSF.svg"
          class="min-h-0 min-w-0 w-6"
        />
      </div>
      <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-2/3">
        Featuring on College.com
      </div>
    </div>
    <div class="shadow-[0px_21px_26px_0px_rgba(43,_0,_13,_0.08)] bg-white flex flex-row justify-start gap-4 w-1/2 items-center px-4 rounded-lg">
      <div class="bg-[url(https://file.rendit.io/n/JzqmfZB5J6Hk6Bv8FVxb.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center my-2">
        <img
          src="https://file.rendit.io/n/8knrpsjU0dWux1q2WAyY.svg"
          class="min-h-0 min-w-0 w-8"
        />
      </div>
      <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-[287px]">
        Instant PayTM cash payments
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-start gap-8 items-center ml-32 mr-56">
    <div class="shadow-[0px_21px_26px_0px_rgba(43,_0,_13,_0.08)] bg-white flex flex-row justify-center gap-4 items-center pl-4 pr-3 py-2 rounded-lg">
      <div class="bg-[url(https://file.rendit.io/n/ItKwRqfWlAcBT0Ksf56h.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center">
        <img
          src="https://file.rendit.io/n/CWANABCSfE9Jl2g0Wzk6.svg"
          class="min-h-0 min-w-0 w-6"
        />
      </div>
      <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-[236px]">
        Social Media Promotions
      </div>
    </div>
    <div class="shadow-[0px_21px_26px_0px_rgba(43,_0,_13,_0.08)] bg-white flex flex-row justify-start gap-4 w-3/5 items-center px-4 rounded-lg">
      <div class="bg-[url(https://file.rendit.io/n/Bb874Ynccum7asWahdb8.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-start w-12 shrink-0 h-12 items-center my-2 py-2">
        <img
          src="https://file.rendit.io/n/NhKreXC5CeaJFdUpsYev.svg"
          class="min-h-0 min-w-0 w-6"
        />
      </div>
      <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-[413px]">
        Internship opportunities at College.com HQ
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-start gap-8 items-center ml-32 mr-48">
    <div class="shadow-[0px_21px_26px_0px_rgba(43,_0,_13,_0.08)] bg-white flex flex-row justify-start gap-4 w-1/2 items-center px-4 rounded-lg">
      <div class="bg-[url(https://file.rendit.io/n/8MkkTfuE79JhyAR7j7aO.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center my-2">
        <img
          src="https://file.rendit.io/n/8hHpWB7nrYHs6oYBRbsQ.svg"
          class="min-h-0 min-w-0 w-6"
        />
      </div>
      <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-[384px]">
        Free Webinars and Counselling sessions
      </div>
    </div>
    <div class="shadow-[0px_21px_26px_0px_rgba(43,_0,_13,_0.08)] bg-white flex flex-row justify-start gap-4 w-1/2 items-center px-4 rounded-lg">
      <div class="bg-[url(https://file.rendit.io/n/ZGw2cUSciQmTi30M1ZZO.svg)] bg-cover bg-50%_50% bg-blend-normal flex flex-col justify-center w-12 shrink-0 h-12 items-center my-2">
        <img
          src="https://file.rendit.io/n/XYKa2WIfTtPb9IITq1Lq.svg"
          class="min-h-0 min-w-0 w-8"
        />
      </div>
      <div class="whitespace-nowrap text-xl font-['Inter'] tracking-[0.10000000149011612] leading-[28px] w-[347px]">
        Exclusive Collegedunia Merchandise
      </div>
    </div>
  </div>
</div>

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
