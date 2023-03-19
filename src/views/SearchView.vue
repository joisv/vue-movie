<script setup>
import { onMounted, watchEffect } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import  getMovies  from '../composable/fetch'

    const { resultSearch, searchMulti, baseImgUrl } = getMovies();
    const route = useRoute();

    watchEffect( async () => {
        const query = route.query.query;
        await searchMulti(query);
    });
</script>
<template>
<Suspense>
    <template #default>
        <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 p-2 max-w-screen-xl m-auto sm:relative sm:top-14">
        <h1 class="font-semibold absolute text-primary text-xl ml-2 mt-5 mb-3 sm:text-3xl lg:text-4xl sm:font-bold sm:opacity-80 h-fit w-[80vw]" title="New Movie">Result for <span class="text-slate-300 text-lg font-normal sm:text-2xl sm:font-medium">{{ route.query.query }}</span></h1>
        <template v-for="search in resultSearch.results" :key="search.id">
            <div class="min-h-[160px] w-full cursor-pointer relative top-20">
                <RouterLink :to="{name : 'detail' , params: { id: search.id } }" v-if="search.media_type === 'movie'">
                <div class="relative flex flex-wrap items-center justify-center after:w-full after:h-full after:hover:bg-bgDark after:opacity-25 after:absolute after:z-30 after:top-0 after:ease-in after:duration-75">
                    <img class="object-cover object-center" :src="`${search.poster_path ? baseImgUrl+search.poster_path : '/src/assets/images/Sample.jpg'}`" alt="">
                    <div class="h-fit w-auto p-1 bg-primary text-xs rounded-full absolute top-1 right-1 font-semibold text-center">{{ search.vote_average }}</div>
                    <div class="absolute">
                        <svg width="50px" height="50px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier"> <path d="M8 17.1783V6.82167C8 6.03258 8.87115 5.55437 9.53688 5.97801L17.6742 11.1563C18.2917 11.5493 18.2917 12.4507 17.6742 12.8437L9.53688 18.022C8.87115 18.4456 8 17.9674 8 17.1783Z" stroke="#01AED3" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>  
                    </div>
                </div>
                <h1 class="text-primary font-semibold relative sm:text-lg text">
                    {{ search.title ? search.title.substring(0, 13) + '...' : 'N/A' }}
                </h1>
                <div class="flex items-center mt-1 justify-between">
                    <span class="text-xs text-gray-500 sm:text-sm">{{ search.release_date ? search.release_date.substring(0, 4) : 'N/A' }}</span>
                    <span class="text-xs text-gray-500 sm:text-sm">141 min</span>
                    <span class="border-[1px] border-gray-500 text-xs text-gray-500 h-fit px-[2px] rounded-sm text-center sm:text-sm">{{ search.media_type === 'tv' ? 'tvshow' : 'movie' }}</span>
                </div>
                </RouterLink>
                <RouterLink :to="{name : 'tvdetail' , params: { id: search.id } }" v-else-if="search.media_type === 'tv'">
                <div class="relative flex flex-wrap items-center justify-center after:w-full after:h-full after:hover:bg-bgDark after:opacity-25 after:absolute after:z-30 after:top-0 after:ease-in after:duration-75">
                    <img class="object-cover object-center" :src="`${search.poster_path ? baseImgUrl+search.poster_path : '/src/assets/images/Sample.jpg'}`" alt="">
                    <div class="h-fit w-auto p-1 bg-primary text-xs rounded-full absolute top-1 right-1 font-semibold text-center">{{ search.vote_average }}</div>
                    <div class="absolute">
                        <svg width="50px" height="50px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_iconCarrier"> <path d="M8 17.1783V6.82167C8 6.03258 8.87115 5.55437 9.53688 5.97801L17.6742 11.1563C18.2917 11.5493 18.2917 12.4507 17.6742 12.8437L9.53688 18.022C8.87115 18.4456 8 17.9674 8 17.1783Z" stroke="#01AED3" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"/> </g>
                        </svg>  
                    </div>
                </div>
                <h1 class="text-primary font-semibold relative sm:text-lg text">
                    {{ search.name ? search.name.substring(0, 13) + '...' : 'N/A' }}
                </h1>
                <div class="flex items-center mt-1 justify-between">
                    <span class="text-xs text-gray-500 sm:text-sm">{{ search.release_date ? search.release_date.substring(0, 4) : 'N/A' }}</span>
                    <span class="text-xs text-gray-500 sm:text-sm">141 min</span>
                    <span class="border-[1px] border-gray-500 text-xs text-gray-500 h-fit px-[2px] rounded-sm text-center sm:text-sm">{{ search.media_type === 'tv' ? 'tvshow' : 'movie' }}</span>
                </div>
                </RouterLink>
            </div>
        </template>
        </div>
    </template>
    <template #fallback>
        <h1 class="text-slate-200 text-5xl">Loading</h1>
    </template>
</Suspense>
</template>
