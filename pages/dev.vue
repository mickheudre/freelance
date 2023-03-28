<template>
  <div class="flex flex-col justify-center items-center pt-16">
    <img src="~/assets/images/header.jpg" class="h-64"/>
    
    <NotionPage :page="data"  class="text-main my-8 w-1/2"/>
    <div id="booking" class="my-16 w-1/2">
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