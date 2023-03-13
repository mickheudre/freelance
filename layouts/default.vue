<template>
    <div class="min-h-screen w-screen bg-back flex flex-col">
        <div class="flex items-center sticky top-4 px-4 sm:px-8">
            <div class="flex gap-8 lg:gap-24 items-center">
                <Logo class="h-12 w-12 sm:w-16 sm:h-16"/>
                <a class="hidden sm:block font-sans text-lg uppercase font-semibold">Qui suis-je ?</a>
                <a class="hidden sm:block font-sans text-lg uppercase font-semibold">Mes services</a>
                <a class="hidden sm:block font-sans text-lg uppercase font-semibold">Me contacter</a>
            </div>
            <div class="fixed bg-main rotate-45 top-8 right-0 transform translate-x-1/4 px-8 py-2">
                <span class="uppercase text-back">k - Open for work</span>

            </div>
        </div>
        <slot />
        <div class="border-t-4 border-main my-12 mx-8">

        </div>
    </div>
</template>