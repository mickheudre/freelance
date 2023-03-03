<template>
  <div class="w-screen min-h-screen bg-back p-2 sm:p-12 flex flex-col gap-8">
    <div class="lg:h-full grid grid-cols-5 lg:grid-cols-4  border-3 lg:border-4   border-main">
      <div class="col-span-5 lg:col-span-3  border-3 lg:border-4  border-main py-12 sm:py-16 lg:py-auto flex flex-col items-center justify-center">
        <h1 class="font-basteleur text-main text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl sm:w-4/5 lg:w-2/3 pb-6 sm:pb-8">Travaillons</h1>
        <h1 class="font-cantique text-main text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl sm:w-4/5 lg:w-2/3 text-right">Ensemble</h1>
      </div>
      <div class="col-span-2 lg:col-span-1 border-3 lg:border-4 border-main flex flex-col items-center justify-center">
        <div class="relative h-3/4 w-3/4">
          <Prism class="absolute stroke-back" />
          <Prism class="absolute stroke-main translate-x-px" />
          
          <Door class="fill-accent" />
        </div>
      </div>
      <div class="col-span-3 lg:col-span-1 border-3 lg:border-4 border-main p-6 lg:hidden flex flex-col items-center justify-center py-8 sm:py-16">
        <p class="text-lg sm:text-xl md:text-2xl text-main font-serif"> <span class="relative">Vous <Highlight2 class="absolute inset-0 stroke-accent fill-accent "/></span> avez des projets de sites web ou d’applications ?</p>
      </div>
      <div class="col-span-2 lg:col-span-1 border-3 lg:border-4 border-main order-last lg:order-none flex flex-col items-center justify-center md:p-4 lg:p-8">
        <div class="relative  w-3/4">
          <Doggo class="absolute stroke-back" />
          <Doggo class="absolute stroke-main translate-x-px" />
          <Triangle class="inset-0 fill-accent" />
        </div>
      </div>
      <div class="col-span-3 border-3 lg:border-4 border-main gap-4 p-6 flex flex-col items-center justify-center py-8 sm:py-16">
        <p class="text-lg sm:text-xl md:text-2xl hidden text-main lg:block font-serif z-20"> <span class="relative">Vous <Highlight2 class="absolute h-36 -top-8 -left-12 stroke-accent fill-accent z-10"/></span> avez des projets de sites web ou d’applications ?</p>
        <p class="text-lg sm:text-xl md:text-2xl text-main font-serif"><span class="relative">Vous</span> voulez expérimenter, créer ou tester vos idées ?</p>
      </div>
    </div>
    <div class="flex flex-col items-center py-16 w-full">
      <div class="relative w-full sm:px-4 lg:w-2/3">
        <Flag class="scale-y-150 sm:scale-y-100 stroke-back fill-accent" />
        <h2 class="absolute inset-0 font-serif text-back translate-y-7 sm:translate-y-16 lg:translate-y-24 text-sm sm:text-lg lg:text-2xl  px-6 text-center sm:text-left md:px-16 lg:px-24">Je vous propose mes service de design et développement de sites web et d’applications</h2>
      </div>
      
    </div>
    <div class="flex flex-col gap-12 sm:flex-row items-center lg:mx-16">
      
      <div class="flex flex-col w-full gap-6 items-center ">
        <NotionBlock :block="data.results[0]"  class="text-main"/>
        <Map class="stroke-main fill-accent w-1/2 sm:w-1/3 lg:hidden" />
        <NotionBlock :block="data.results[1]"  class="text-main"/>
      </div>
      <Map class="stroke-main fill-accent w-1/3  hidden lg:flex" />
      
    </div>
    
    
  </div>
</template>
<script setup >
useHead({
  title: 'Mickaël se lance',
  script: [
  { 
    async: true,
    src: 'https://scripts.withcabin.com/hello.js',
  }]
})

const { data } = await useFetch('https://api.notion.com/v1/blocks/3326eab0ccb5406da856ab051cbd5811/children',
{
  onRequest({ url, options, cancel }) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
    }
  }
} )

const dataNext = await useFetch('https://api.notion.com/v1/blocks/acd7d7550849450ba3bbe5eae577e904/children',
{
  onRequest({ url, options, cancel }) {
    options.headers = {
      ...options.headers,
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.NOTION_TOKEN}`,
      'Notion-Version': '2022-06-28',
    }
  }
} )


</script>