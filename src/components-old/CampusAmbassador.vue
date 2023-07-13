<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
<div class=" flex flex-row">
<div class="flex flex-col flex-1">
<p class="text-4xl text-left text-semibold text-black pb-5 pr-50">
  Join to Campus Ambassador Program
</p>
<p class=" text-left text-[#666666] text-base pb-20 pr-50">
  Campus Ambassador Program has been initiated to recognize smart and dedicated college students and  prov ide them with adequate opportunities to learn the 
  industry-relevant skills, while earning Cash rewards and  certifications from our Industry-experts.
</p>
<p class="text-4xl pl-32 text-left font-semibold text-[#333]">
  Benefit to <br>
Campus Ambassador
</p>
</div>
<div class="flex-1 text-right pr-0 justify-end">
<img src="../assets/campus.png"/>
</div>
</div>

 
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
