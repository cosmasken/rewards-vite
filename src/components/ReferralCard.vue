<script >
export default {
    props: ['title', 'text','number',],
 
}
 
</script>
<template>
    <div class=" w-full h-full">
<div class="flex flex-row rounded-full justify-between gap-4 bg-[#7B22D4]">
    <img src=".,/assets/icon.svg" class="hidden sm:block h-[64px] w-[64px]" >
    <p class="font-normal text-sm text-white">
{{ number }}
</p>
<p class="font-normal text-sm text-white">
{{ text }}
</p>
</div>
    </div>
</template>