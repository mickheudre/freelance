<template>
    <div class="min-h-screen w-screen bg-back flex flex-col overflow-hidden">
        <div class="flex items-center  sticky top-4 px-4 sm:px-8">
            <div class="flex gap-8 lg:gap-24 items-center">
                <Logo class="h-12 w-12 flex-none sm:w-16 sm:h-16"/>
                <a class="hidden  sm:flex flex-none font-sans uppercase font-semibold">Qui suis-je ?</a>
                <a class="hidden sm:flex flex-none font-sans uppercase font-semibold">Mes services</a>
                <a class="hidden sm:flex flex-none font-sans uppercase font-semibold">Me contacter</a>
            </div>
            <div class="marquee  bg-main text-back flex transform rotate-45 translate-x-1/3  px-8 py-2">
                    <div class="marquee__inner" aria-hidden="true">
                        <p  class=" w-max" v-for="item in 12">
                            Open to Work <span class="px-2">-</span>
                        </p>
                    </div>
                    </div>
            </div>                
            <slot />
            <div class="border-t-4 border-main my-12 mx-8">
                
            </div>
        </div>
    </template>
    
    
    <style>
    .marquee {
        position: relative;
        overflow: hidden;
        --offset: 20vw;
        --move-initial: calc(-25% + var(--offset));
        --move-final: calc(-50% + var(--offset));
    }
    
    .marquee__inner {
        width: fit-content;
        display: flex;
        position: relative;
        transform: translate3d(var(--move-initial), 0, 0);
        animation: marquee 5s linear infinite;
    }
    
    
    @keyframes marquee {
        0% {
            transform: translate3d(var(--move-initial), 0, 0);
        }
        
        100% {
            transform: translate3d(var(--move-final), 0, 0);
        }
    }
    
    
</style>