<script setup>
import { onMounted } from '@vue/runtime-core'
import { ref } from 'vue';
import getMovies from '../../composable/fetch'

    const { baseImgUrl, latestMovies, getLatestMovie } = getMovies()
   
    onMounted(() => {
        getLatestMovie()
    })
</script>

<template>
    <div v-if="latestMovies.results">
        <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 p-2 max-w-screen-xl m-auto">
            <template v-for="movie in latestMovies.results" :key="movie.id">
                <div class="min-h-[160px] w-full cursor-pointer">
                    <RouterLink :to="{name : 'detail' , params: { id: movie.id } }">
                    <div class="relative flex flex-wrap items-center justify-center after:w-full after:h-full after:hover:bg-bgDark after:opacity-25 after:absolute after:z-30 after:top-0 after:ease-in after:duration-75">
                        <img class="object-cover object-center" :src="`${baseImgUrl}${movie.poster_path}`" alt="" >
                        <div class="h-fit w-auto p-1 bg-primary text-xs rounded-full absolute top-1 right-1 font-medium text-center">{{ movie.vote_average }}</div>
                        <div class="absolute">
                            <svg width="50px" height="50px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_iconCarrier"> <path d="M8 17.1783V6.82167C8 6.03258 8.87115 5.55437 9.53688 5.97801L17.6742 11.1563C18.2917 11.5493 18.2917 12.4507 17.6742 12.8437L9.53688 18.022C8.87115 18.4456 8 17.9674 8 17.1783Z" stroke="#01AED3" stroke-width="2.04" stroke-linecap="round" stroke-linejoin="round"/> </g>
                            </svg>  
                        </div>
                    </div>
                    <h1 class="text-primary font-semibold relative sm:text-lg">{{ movie.title ? movie.title.substring(0, 13) + '...' : 'No description available' }}</h1>
                    <div class="flex items-center mt-1 justify-between">
                        <span class="text-xs text-gray-500 sm:text-sm">{{ movie.release_date.substring(0, 4) }}</span>
                        <span class="text-xs text-gray-500 sm:text-sm">141 min</span>
                        <span class="border-[1px] border-gray-500 text-xs text-gray-500 h-fit px-[2px] rounded-sm text-center sm:text-sm">movie</span>
                    </div>
                    </RouterLink>
                </div>
            </template>
        </div>
    </div>
    <div v-else><h1 class="text-slate-200 text-5xl">Loading</h1></div>
</template>