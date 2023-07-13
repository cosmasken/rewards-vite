<template>
    <div class="flex flex-row space-x-4">
<img src="../assets/svg/${imageurl}" class="w-12 h-12"/>
<div class="flex flex-col">
    <p class="whitespace-nowrap text-base font-semibold  text-[white] ">
  {{ title }}
    </p>
<p class="text-center whitespace-nowrap text-sm  text-[white]">
  {{ desc }}
</p>

</div>
    </div>
</template>
<script>
export default {
    props: ['imageurl', 'title', 'desc',],
 
}
</script>