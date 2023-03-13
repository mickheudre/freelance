<template>
  <div class="flex flex-col px-4 sm:px-8 ">
    <div class="w-full my-8 sm:my-4">
      <div class="uppercase text-3xl md:text-6xl lg:text-8xl font-semibold border-b-4 md:border-b-8 w-full border-main text-main my-4 md:my-8">
        Votre Application
      </div>
      <div class="uppercase text-3xl md:text-6xl lg:text-8xl font-semibold border-b-4 md:border-b-8 w-full border-main text-main text-right md:my-8">
        Clés en main
      </div>
    </div>
    <div class="flex flex-col items-center  md:items-stretch md:flex-row w-full h-full lg:px-16">
      <img src="~/assets/images/index.jpg" class="w-48 md:w-64  sm:my-0"/>
      <div class="flex flex-col items-center md:items-end justify-between gap-y-4 w-full"> 
        <div class="flex flex-wrap justify-between md:justify-end w-full md:gap-x-8 md:pl-16 mt-8">
          <span class="uppercase font-semibold md:text-lg text-main">Design UI/UX <Star class="inline pb-1"/></span>
          <span class="uppercase font-semibold md:text-lg text-main">Développement <Star class="inline pb-1"/></span>
          <span class="uppercase font-semibold md:text-lg text-main">Conception Agile & Lean <Star class="inline pb-1"/></span>
        </div>
        <div class="sm:w-4/5 lg:w-1/2">
          <h4 class="uppercase font-semibold my-2 sm:text-right">
            Construisons ensemble l’application qu’il vous faut
          </h4>
          <h5 class="sm:text-right">De l’émergence de l’idée à la mise en production, conçue pour répondre à vos besoins et ceux des utilisateurs</h5>

        </div>
        <button class="font-bold px-16 py-5 bg-main text-back rounded-md font-sans uppercase m-4">En savoir plus</button>
      </div>
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

const { data } = await useFetch('https://api.notion.com/v1/blocks/ca653b5655934d228ad6643d11a17ac5/children',
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

<style>

h1 {
  @apply text-4xl font-bold my-8;
}
</style>