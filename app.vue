<template>
  <div class="w-screen h-screen bg-back p-2 sm:p-12">
    <div class="md:h-full grid grid-rows-2 border-8 divide-y-8 divide-main border-main">
      <div class="grid grid-cols-4 divide-x-8 divide-main h-48 md:h-full">
        <div class="col-span-3 flex flex-col  items-center justify-center ">
          <h1 class="font-basteleur text-main text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:w-2/3 pb-2 sm:pb-8">Travaillons</h1>
          <h1 class="font-cantique text-main text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl sm:w-2/3 text-right">Ensemble</h1>
        </div>
        <div class="flex flex-col items-center justify-center">
          <div class="relative h-3/4 w-2/3">
            <Prism class="absolute stroke-main" />
            <Door class="inset-0 fill-accent" />
          </div>
        </div>
      </div>
      <div class="grid grid-cols-4 divide-x-8 divide-main h-48 md:h-full">
        <div class="flex flex-col items-center justify-center">
          <div class="relative h-3/4 w-3/4">
            <Doggo class="absolute stroke-main" />
            <Triangle class="inset-0 fill-accent" />
          </div>
        </div>
        <div class="col-span-3 flex flex-col justify-center items-center gap-4 p-4">
          <p class="text-lg sm:text-xl md:text-2xl"> Vous avez des projets de sites web ou d’applications ?</p>
          <p class="text-lg sm:text-xl md:text-2xl">Vous voulez expérimenter, créer ou tester vos idées ?</p>
        </div>
      </div>
    </div>
    
  </div>
</template>
<script>
export default {
  setup () {
    useHead({
      script: [
      { 
        async: true,
        src: 'https://scripts.withcabin.com/hello.js',
      }]
    }) },
    head: {
      title: 'Mickaël se lance'
    }
  }
</script>