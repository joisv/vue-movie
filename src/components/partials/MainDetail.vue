<script setup>
import StreamNavigation from './StreamNavigation.vue'
import { useCounterStore }  from "../../stores/counter"
import getMovies from '../../composable/fetch'

    const { baseImgUrl, getDetailMovie, detailMovie } = getMovies()
    const useMovie = useCounterStore()
    
</script>
<script>
export default {
  props: ['movie'],
  
}
</script>
<template>
    <div class="w-full">
        <h1 class="text-3xl font-medium text-slate-200 relative w-fit sm:text-3xl lg:text-4xl">{{ $props.movie.title }}
        <span class="text-primary font-medium text-sm absolute">HD</span>
        </h1>
         <h1 class="text-lg font-medium text-primary w-fit mt-1">{{ $props.movie.original_title }}
            </h1>
        <div class="flex items-center gap-2">
            <div class="ratings mt-2 text-sm font-medium text-slate-200 mb-2">{{ $props.movie.vote_average }}</div>
            <div class="flex gap-2" v-if="!useMovie.isMobile">
                <span class="text-slate-200 font-normal">{{ $props.movie.release_date }}</span>
                <div class="text-primary font-medium">
                    <p>{{ $props.movie.genres ? $props.movie.genres.map(g => g.name).join(', '): 'Title not available' }}</p>
                </div>
                <p class="text-slate-200 font-medium">1h 46m</p>
            </div>
        <button class="bg-primary p-2 font-medium ml-4 z-20" @click.stop="useMovie.moreInfo" v-if="useMovie.isMobile">more info</button>
        </div>
        <div class="items-center"  v-if="!useMovie.isMobile">
            <div class="flex gap-3">
                <p class="text-slate-200 font-medium">Status</p>
                <p class="text-primary">{{ $props.movie.status }}</p>
            </div>
            <div class="flex gap-3">
                <p class="text-slate-200 font-medium">Popularity</p>
                <p class="text-primary">{{ $props.movie.popularity }}</p>
            </div>
        </div>
        <StreamNavigation v-if="useMovie.isMobile"/>
        <div class="mt-2 pr-5" v-if="!useMovie.isMobile">
            <h1 class="text-slate-200 font-semibold text-xl">Sinopsis</h1>
            <span class="text-primary text-sm">{{ $props.movie.overview }}</span>
        </div>
    </div>
</template>