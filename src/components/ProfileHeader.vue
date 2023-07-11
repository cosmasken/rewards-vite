<script >
export default {
    props: ['name', 'city',],
 
}
 
</script>

<template>
<div class=" w-full h-full">
    <img src="./assets/person.svg" class="hidden sm:block h-[64px] w-[64px]" >
  <p class="text-white text-lg"> {{name}}</p>
  <p class="text-white text-lg"> {{ city}}</p> 
</div>

</template>

<style scoped>
</style>
