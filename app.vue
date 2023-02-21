<template>
  <div class="w-screen h-screen bg-back p-2 sm:p-12">
    <div class="lg:h-full grid grid-cols-4  border-4  border-main">
      <div class="col-span-4 lg:col-span-3  border-4  py-12 sm:py-16 lg:py-auto flex flex-col items-center justify-center">
        <h1 class="font-basteleur text-main text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl sm:w-4/5 lg:w-2/3 pb-2 sm:pb-8">Travaillons</h1>
        <h1 class="font-cantique text-main text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl sm:w-4/5 lg:w-2/3 text-right">Ensemble</h1>
      </div>
      <div class=" border-4 flex flex-col items-center justify-center">
        <div class="relative h-3/4 w-3/4">
          <Prism class="absolute stroke-main" />
          <Door class="fill-accent" />
        </div>
      </div>
      <div class="col-span-3  border-4 p-4 lg:hidden flex flex-col items-center justify-center py-16">
        <p class="text-lg sm:text-xl md:text-2xl "> Vous avez des projets de sites web ou d’applications ?</p>
      </div>
      <div class="  border-4 order-last lg:order-none flex flex-col items-center justify-center">
        <div class="relative h-3/4 w-3/4 ">
          <Doggo class="absolute stroke-main" />
          <Triangle class="inset-0 fill-accent" />
        </div>
      </div>
      <div class="col-span-3  border-4 gap-4 p-4 flex flex-col items-center justify-center py-16">
        <p class="text-lg sm:text-xl md:text-2xl hidden lg:block"> Vous avez des projets de sites web ou d’applications ?</p>
        <p class="text-lg sm:text-xl md:text-2xl">Vous voulez expérimenter, créer ou tester vos idées ?</p>
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