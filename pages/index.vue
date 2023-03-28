<template>
  <div class="flex flex-col px-4 sm:px-8 lg:px-32 w-full pt-4 xl:pt-14 max-w-screen-2xl ">
    <div class="w-full my-8 sm:my-0">
      <div class="uppercase text-3xl md:text-6xl lg:text-8xl font-semibold border-b-4 md:border-b-8 w-full border-main text-main my-4 md:my-8 ">
        Votre Application
      </div>
      <div class="uppercase text-3xl md:text-6xl lg:text-8xl font-semibold border-b-4 md:border-b-8 w-full border-main text-main text-right md:my-8 ">
        Clés en main
      </div>
    </div>
    <div class="flex flex-col items-center  md:items-stretch md:flex-row w-full h-full  my-4">
      <div class="flex justify-center sm:w-1/2">
        <img src="~/assets/images/index.jpg" class="w-48 md:w-96 2xl:w-5/6"/>
      </div>
      <div class="flex flex-col items-center md:items-end justify-start gap-y-4 sm:w-1/2"> 
        <div class="flex flex-wrap justify-between md:justify-end w-full md:gap-x-8  my-4 2xl:my-16" >
          <span class=" font-serif text-xl md:text-2xl text-main">Design UI/UX <Star class="inline pb-1"/></span>
          <span class=" font-serif text-xl md:text-2xl text-main">Développement <Star class="inline pb-1"/></span>
          <span class=" font-serif text-xl md:text-2xl text-main">Conception Agile & Lean <Star class="inline pb-1"/></span>
        </div>
        <div class="sm:w-4/5 lg:w-2/3">
          <h4 class="font-semibold text-xl lg:text-2xl my-2 sm:text-right">
            Construisons ensemble l’application qu’il vous faut
          </h4>
          <p class="text-lg font-normal sm:text-right">De l’émergence de l’idée à la mise en production, conçue pour répondre à vos besoins et ceux des utilisateurs</p>
          
        </div>
        <button class="font-bold px-12 lg:px-16 py-5 bg-main text-back rounded-md font-sans uppercase my-8"><a href="#booking">Parlons de vos projets</a></button>
        
      </div>
    </div>
    
     <div class="flex flex-col sm:flex-row my-16  items-center justify-between">
      <div class="flex flex-col  gap-16 sm:w-2/3 lg:w-1/2">
        <h2 class=" font-semibold text-4xl lg:text-7xl font-serif">Une offre sur mesure</h2>
        
        <div class="flex gap-8 w-full">
          <div class="bg-main h-24  rounded-sm flex">
            <span class="text-back text-4xl font-bold ml-8 mr-2 mt-2 text-right">1</span>
          </div>
          <div class="w-full">
            <h4 class="text-2xl font-semibold mb-4">Vous voulez tester une idée</h4>
            <p>Vous voulez tester une idée et cherchez quelqu’un pour développer rapidement une application afin de recueillir des retours utilisateurs.</p>
            <p>Faisons de vos contraintes de temps et de budget une force pour se concentrer sur l'essentiel. </p>
          </div>
        </div>
        <div class="flex gap-8 w-full">
          <div class="bg-main h-24  rounded-sm flex">
            <span class="text-back text-4xl font-bold ml-8 mr-2 mt-2 text-right">2</span>
          </div>
          <div class="w-full">
            <h4 class="text-2xl font-semibold mb-4">Vous cherchez à améliorer un produit existant</h4>
            <p>Vous souhaitez améliorer l’interface utilisateur d’une application déjà existante et cherchez un regard neuf.</p>
            <p>Je vous propose de résoudre ensemble les problèmes que rencontrent vos utilisateurs.</p>
          </div>
        </div>
        <div class="flex gap-8 w-full">
          <div class="bg-main h-24  rounded-sm flex">
            <span class="text-back text-4xl font-bold ml-8 mr-2 mt-2 text-right">3</span>
          </div>
          <div class="w-full">
            <h4 class="text-2xl font-semibold mb-4">Vous avez des besoins ponctuels et souhaitez renforcer votre équipe</h4>
            <p>Vous chercher quelqu’un pour renforcer votre équipe pendant les périodes de rush, ou pour ajouter des fonctionnalités à votre application.</p>
            <p>J'interviens sur Grenoble ou Paris, ou en distenciel, de quelques jours à quelques semaines.</p>
          </div>
        </div>
      </div> 
      <img class="w-3/4 sm:w-48 lg:w-96 my-16 sm:my-0" src="../assets/images/offer.jpg"/> 
    </div>
    <div class="my-32 w-full">
      <h5 class="font-serif font-semibold text-2xl">Ils m'ont fait confiance</h5>
      <div class="flex  items-center gap-x-16 gap-y-8 sm:gap-16 my-4 justify-center flex-wrap" >
          <img class="h-8 sm:h-12" src="~/assets/images/inria-logo.png"/>
          <img class="h-8 sm:h-12" src="~/assets/images/gopro-logo.png"/>
          <img class="h-12 m:h-16" src="~/assets/images/iskn-logo.png"/>
          <img class="h-8 m:h-12" src="~/assets/images/ami-logo.png"/>
      </div>
    </div>
    <div id="booking" class="my-8">
      <h3 class="font-serif text-2xl font-semibold">Je vous propose de prendre 30 minutes afin d'échanger sur vos projets et vos besoins </h3>
      <Calendar class="py-8"/>
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