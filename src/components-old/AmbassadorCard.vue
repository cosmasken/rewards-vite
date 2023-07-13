<script >
export default {
    props: ['title', 'text',],
 
}
 
</script>
<template>
    <div class=" w-full h-full">
<div class="flex flex-row rounded-full shadow-md gap-4 bg-white mb-10 mr-8 items-center">
    <img src="../assets/icon.svg" class="hidden sm:block h-[64px] w-[64px]" >
    <p class="font-normal text-xl text-black ">
{{ title }}
</p>
</div>
    </div>
</template>