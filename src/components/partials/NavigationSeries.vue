<script setup>
import { useCounterStore }  from "../../stores/counter"
import getMovies from '../../composable/fetch'

    const { getAiringToday, getTrendings } = getMovies()
    const useMovie = useCounterStore()
 
</script>

<template>
    <div class="flex items-center mt-2 gap-1">
        <button class="h-5 px-2 sm:h-8 sm:px-4 border-[2px] border-primary rounded-sm text-gray-300 text-xs sm:text-sm" :class="{ active: useMovie.activeButton === 1 }"
        @click="useMovie.activeButton = 1">Movie</button>
        <button class="h-5 px-2 sm:h-8 sm:px-4 border-[2px] border-primary rounded-sm text-gray-300 text-xs sm:text-sm" :class="{ active: useMovie.activeButton === 2 }"
        @click="useMovie.activeButton = 2; getAiringToday()">Tv Show</button>
        <button class="h-5 px-2 sm:h-8 sm:px-4 border-[2px] border-primary rounded-sm text-gray-300 text-xs sm:text-sm" :class="{ active: useMovie.activeButton === 3 }"
        @click="useMovie.activeButton = 3; getTrendings()">Trending</button>
    </div>
</template>