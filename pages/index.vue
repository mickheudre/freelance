<template>
  <div class="flex flex-col px-4 sm:px-8 lg:px-32 pt-4">
    <div class="w-full my-8 sm:my-0">
      <div class="uppercase text-3xl md:text-6xl lg:text-8xl italic font-semibold border-b-4 md:border-b-8 w-full border-main text-main my-4 md:my-8 ">
        Votre Application
      </div>
      <div class="uppercase text-3xl md:text-6xl italic lg:text-8xl font-semibold border-b-4 md:border-b-8 w-full border-main text-main text-right md:my-8 ">
        Clés en main
      </div>
    </div>
    <div class="flex flex-col items-center  md:items-stretch md:flex-row w-full h-full  my-4">
      <img src="~/assets/images/index.jpg" class="w-48 md:w-96 "/>
      <div class="flex flex-col items-center md:items-end justify-start gap-y-4 w-full"> 
        <div class="flex flex-wrap justify-between md:justify-end w-full md:gap-x-8  my-4">
          <span class=" font-serif text-xl md:text-2xl text-main">Design UI/UX <Star class="inline pb-1"/></span>
          <span class=" font-serif text-xl md:text-2xl text-main">Développement <Star class="inline pb-1"/></span>
          <span class=" font-serif text-xl md:text-2xl text-main">Conception Agile & Lean <Star class="inline pb-1"/></span>
        </div>
        <div class="sm:w-4/5 lg:w-2/3">
          <h4 class="font-semibold text-xl my-2 sm:text-right">
            Construisons ensemble l’application qu’il vous faut
          </h4>
          <h5 class="sm:text-right">De l’émergence de l’idée à la mise en production, conçue pour répondre à vos besoins et ceux des utilisateurs</h5>
          
        </div>
        <button class="font-bold px-12 lg:px-16 py-5 bg-main text-back rounded-md font-sans uppercase my-8">Parlons de vos projets</button>

      </div>
    </div>

    <div class="flex flex-col sm:flex-row my-16 gap-16 items-center justify-between">
      <div class="flex flex-col  gap-8 sm:w-1/2">
        <h2 class=" font-semibold text-4xl lg:text-8xl font-serif">Une offre sur mesure</h2>

        <div class="flex gap-8 w-full">
          <div class="bg-main h-24  rounded-sm flex">
            <span class="text-back text-4xl font-bold ml-8 mr-2 mt-2 text-right">1</span>
          </div>
          <div>
            <h4 class="text-2xl font-semibold mb-4">Vous voulez tester une idée</h4>
            <p>Vous voulez tester une idée et cherchez quelqu’un pour développer rapidement une application afin de recueillir des retours utilisateurs au plus vite.</p>
            <p>Vous avez des contraintes de temps ou de budget</p>
          </div>
        </div>
      </div>
      <img class="w-48 md:w-96" src="../assets/images/offer.jpg"/>
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