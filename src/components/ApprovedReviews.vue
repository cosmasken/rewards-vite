<script >
export default {
    props: ['title', 'number', 'text','text1', 'text2', 'text3'],
 
}
 
</script>
<template>
  <div class="flex flex-col justify-start gap-1 w-full items-start">
  <div class="flex flex-row justify-start gap-2 w-12 items-center mt-0 ml-5">
    <img
      src="https://file.rendit.io/n/Pw7GuWhHeWCeocJP1q0m.svg"
      class="min-h-0 min-w-0 w-6 shrink-0"
    />
    <div class="whitespace-nowrap text-2xl font-['Inter'] font-semibold tracking-[-1] leading-[32px] text-[#333333] w-4 shrink-0">
      5
    </div>
  </div>
  <div class="whitespace-nowrap text-sm font-['Inter'] tracking-[-0.10000000149011612] leading-[20px] text-[#666666] w-3/5 mb-1 ml-5">
    Approved Reviews
  </div>
  <div class="bg-[linear-gradient(180deg,_#e6f0ff_4%,#f4f0ff_57%,#ffffff_100%)] bg-cover bg-50%_50% bg-blend-normal self-stretch flex flex-col justify-start h-48 shrink-0 items-stretch px-5 py-6 rounded-lg">
    <div class="font-['Inter'] tracking-[-0.6000000238418579] leading-[24px] text-[#666666] mr-px">
      Certificate of Participation (Beginner)
    </div>
  </div>
</div>

    <!--div class="flex flex-col w-full h-full px-5 ">
        <div  class="flex flex-row rounded-md bg-white">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path d="M11.221 0.481373L13.9859 6.11221L20.1684 7.01516C20.8719 7.11787 21.1528 7.98689 20.6438 8.48567L16.17 12.8686L17.2261 19.0575C17.3463 19.7618 16.6108 20.2988 15.9816 19.9663L10.4518 17.0443L4.92208 19.9663C4.29285 20.2988 3.55738 19.7618 3.67758 19.0575L4.73366 12.8686L0.259956 8.48563C-0.249121 7.98685 0.0318122 7.11791 0.73535 7.01512L6.9178 6.11217L9.68268 0.481373C9.99733 -0.1594 10.9064 -0.1594 11.221 0.481373Z" fill="url(#paint0_linear_1_75)"/>
      <path d="M13.9858 6.11141L11.221 0.480569C11.0637 0.160203 10.7578 0 10.4518 0V10.6606L13.9858 6.11141Z" fill="url(#paint1_linear_1_75)"/>
      <path d="M16.17 12.8678L20.6437 8.48474C20.8948 8.23869 20.9534 7.90265 20.8641 7.61285L10.4518 10.6605L16.17 12.8678Z" fill="url(#paint2_linear_1_75)"/>
      <path d="M16.8874 19.8979L10.4518 10.6606V17.0436L15.9815 19.9656C16.2973 20.1324 16.6397 20.0802 16.8874 19.8979Z" fill="url(#paint3_linear_1_75)"/>
      <path d="M10.4518 10.6606L4.73361 12.8679L3.67757 19.0568C3.61767 19.4076 3.77029 19.7169 4.01619 19.8979L10.4518 10.6606Z" fill="url(#paint4_linear_1_75)"/>
      <path d="M0.0395508 7.61285L10.4518 10.6605L6.91783 6.11127L0.735372 7.01426C0.378908 7.06629 0.131249 7.31517 0.0395508 7.61285Z" fill="url(#paint5_linear_1_75)"/>
      <path d="M4.73372 12.8677L0.260016 8.48474C0.00888645 8.23869 -0.0497009 7.90265 0.0395887 7.61285L10.4519 10.6605L4.73372 12.8677Z" fill="url(#paint6_linear_1_75)"/>
      <defs>
        <linearGradient id="paint0_linear_1_75" x1="10.4522" y1="2.34101" x2="10.4522" y2="25.5235" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFCF95"/>
          <stop offset="0.427" stop-color="#FFC954"/>
          <stop offset="1" stop-color="#FFC200"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1_75" x1="15.8698" y1="5.32976" x2="8.89739" y2="5.32976" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC200" stop-opacity="0"/>
          <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
          <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
          <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
          <stop offset="1" stop-color="#FF7800"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1_75" x1="17.0609" y1="16.0669" x2="15.1962" y2="6.93082" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC200" stop-opacity="0"/>
          <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
          <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
          <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
          <stop offset="1" stop-color="#FF7800"/>
        </linearGradient>
        <linearGradient id="paint3_linear_1_75" x1="8.10735" y1="20.8702" x2="15.3762" y2="13.6382" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC200" stop-opacity="0"/>
          <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
          <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
          <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
          <stop offset="1" stop-color="#FF7800"/>
        </linearGradient>
        <linearGradient id="paint4_linear_1_75" x1="2.95012" y1="11.6779" x2="8.30303" y2="16.1334" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC200" stop-opacity="0"/>
          <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
          <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
          <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
          <stop offset="1" stop-color="#FF7800"/>
        </linearGradient>
        <linearGradient id="paint5_linear_1_75" x1="6.94616" y1="4.28399" x2="4.76642" y2="10.4402" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC200" stop-opacity="0"/>
          <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
          <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
          <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
          <stop offset="1" stop-color="#FF7800"/>
        </linearGradient>
        <linearGradient id="paint6_linear_1_75" x1="15.0774" y1="4.92762" x2="-0.817167" y2="11.6628" gradientUnits="userSpaceOnUse">
          <stop stop-color="#FFC200" stop-opacity="0"/>
          <stop offset="0.203" stop-color="#FFBB00" stop-opacity="0.203"/>
          <stop offset="0.499" stop-color="#FFA700" stop-opacity="0.499"/>
          <stop offset="0.852" stop-color="#FF8800" stop-opacity="0.852"/>
          <stop offset="1" stop-color="#FF7800"/>
        </linearGradient>
      </defs>
    </svg>
    <p>
      {{ number }}
    </p>
        </div>
        <div class="flex flex-col gap-7 pt-7 px-5 rounded-t-md bg-gradient-to-b from-[#E7F0FF] via-[#F5F0FF] to-white">
          <p>
     {{ text}}
    </p>
    <p class="text-base text-[#333] font-normal">
{{ text1 }}    
</p>
<p class="text-base text-[#333] font-normal">
{{ text2 }}    
</p>
        </div>
    
    
    </div-->
</template>